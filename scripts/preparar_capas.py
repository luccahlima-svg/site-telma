from pathlib import Path
from PIL import Image, ImageChops, ImageFilter, ImageOps


ORIGEM = Path("assets/capa")
DESTINO = ORIGEM / "carrossel"
# As fotos enviadas pela cliente já vêm em 3:2; manter a proporção deixa
# todas as imagens do carrossel com o mesmo tamanho na capa.
TAMANHO = (1800, 1200)


def numero_da_capa(arquivo: Path):
    # Os arquivos chegam como "1(1).png", "6.png", "10.jpeg"...
    return int(arquivo.stem.split("(")[0])


def remover_borda_clara(imagem: Image.Image):
    # Fotos de obras em papel às vezes chegam com uma margem clara do fundo
    # de fotografia. Só cortamos quando há margem nos quatro lados, para não
    # mexer em fotos de exposição com parede branca.
    pontos = (
        imagem.getpixel((0, 0)),
        imagem.getpixel((imagem.width - 1, 0)),
        imagem.getpixel((0, imagem.height - 1)),
        imagem.getpixel((imagem.width - 1, imagem.height - 1)),
    )
    fundo = tuple(sum(p[i] for p in pontos) // 4 for i in range(3))
    if min(fundo) < 225:
        return imagem
    referencia = Image.new("RGB", imagem.size, fundo)
    diferenca = ImageChops.difference(imagem, referencia).convert("L")
    diferenca = diferenca.filter(ImageFilter.GaussianBlur(radius=3))
    limite = diferenca.point(lambda valor: 255 if valor > 10 else 0).getbbox()
    if not limite:
        return imagem
    esquerda, topo, direita, base = limite
    margem_minima = round(min(imagem.size) * 0.01)
    margens = (esquerda, topo, imagem.width - direita, imagem.height - base)
    if min(margens) < margem_minima:
        return imagem
    # Um recuo curto elimina a sombra e o serrilhado da beirada do papel.
    recuo = round(min(direita - esquerda, base - topo) * 0.006)
    return imagem.crop((esquerda + recuo, topo + recuo, direita - recuo, base - recuo))


def preparar(arquivo: Path):
    imagem = ImageOps.exif_transpose(Image.open(arquivo)).convert("RGB")
    imagem = remover_borda_clara(imagem)
    enquadrada = ImageOps.fit(
        imagem,
        TAMANHO,
        method=Image.Resampling.LANCZOS,
        centering=(0.5, 0.5),
    )
    destino = DESTINO / f"{numero_da_capa(arquivo)}.webp"
    enquadrada.save(destino, "WEBP", quality=90, method=6)
    return destino


def main():
    DESTINO.mkdir(parents=True, exist_ok=True)
    extensoes = {".jpg", ".jpeg", ".png", ".webp"}
    for arquivo in sorted(ORIGEM.iterdir()):
        if arquivo.is_file() and arquivo.suffix.lower() in extensoes:
            print(preparar(arquivo).as_posix())


if __name__ == "__main__":
    main()
