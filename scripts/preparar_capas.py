from pathlib import Path
from PIL import Image, ImageOps


ORIGEM = Path("assets/capa")
DESTINO = ORIGEM / "carrossel"
# As fotos enviadas pela cliente já vêm em 3:2; manter a proporção deixa
# todas as imagens do carrossel com o mesmo tamanho na capa.
TAMANHO = (1800, 1200)


def numero_da_capa(arquivo: Path):
    # Os arquivos chegam como "1(1).png", "6.png", "10.jpeg"...
    return int(arquivo.stem.split("(")[0])


def preparar(arquivo: Path):
    imagem = ImageOps.exif_transpose(Image.open(arquivo)).convert("RGB")
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
