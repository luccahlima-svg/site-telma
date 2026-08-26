from pathlib import Path
from PIL import Image, ImageChops, ImageFilter, ImageOps


ORIGEM = Path("assets/capa")
DESTINO = ORIGEM / "carrossel"
TAMANHO = (1920, 1080)


def limite_fundo_preto(imagem: Image.Image):
    cinza = imagem.convert("L")
    mascara = cinza.point(lambda valor: 255 if valor > 42 else 0)
    return mascara.getbbox()


def limite_fundo_claro(imagem: Image.Image):
    pontos = (
        imagem.getpixel((0, 0)),
        imagem.getpixel((imagem.width - 1, 0)),
        imagem.getpixel((0, imagem.height - 1)),
        imagem.getpixel((imagem.width - 1, imagem.height - 1)),
    )
    fundo = tuple(sum(p[i] for p in pontos) // 4 for i in range(3))
    referencia = Image.new("RGB", imagem.size, fundo)
    diferenca = ImageChops.difference(imagem, referencia).convert("L")
    diferenca = diferenca.filter(ImageFilter.GaussianBlur(radius=5))
    mascara = diferenca.point(lambda valor: 255 if valor > 18 else 0)
    return mascara.getbbox()


def preparar(arquivo: Path):
    imagem = Image.open(arquivo).convert("RGB")

    if arquivo.stem in {"imagem 1", "imagem 2", "imagem 4"}:
        limite = limite_fundo_preto(imagem)
        if limite:
            imagem = imagem.crop(limite)
            # As bordas artesanais do papel deixam pequenos vãos pelos quais o
            # fundo preto ainda aparece. Um recuo lateral curto elimina esses
            # resíduos sem atingir o bordado central.
            recuo_x = max(1, round(imagem.width * 0.025))
            imagem = imagem.crop((recuo_x, 0, imagem.width - recuo_x, imagem.height))
    elif arquivo.name == "caixas.jpg":
        limite = limite_fundo_claro(imagem)
        if limite:
            imagem = imagem.crop(limite)
    elif arquivo.name.startswith("ChatGPT Image"):
        imagem = imagem.crop((24, 24, imagem.width - 24, imagem.height - 24))

    enquadrada = ImageOps.fit(
        imagem,
        TAMANHO,
        method=Image.Resampling.LANCZOS,
        centering=(0.5, 0.5),
    )
    destino = DESTINO / f"{arquivo.stem}.webp"
    enquadrada.save(destino, "WEBP", quality=92, method=6)
    return destino


def main():
    DESTINO.mkdir(parents=True, exist_ok=True)
    extensoes = {".jpg", ".jpeg", ".png", ".webp"}
    for arquivo in sorted(ORIGEM.iterdir()):
        if arquivo.is_file() and arquivo.suffix.lower() in extensoes:
            print(preparar(arquivo).as_posix())


if __name__ == "__main__":
    main()
