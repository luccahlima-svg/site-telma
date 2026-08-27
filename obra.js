const obra = (tituloPt, tituloEn, descricaoPt = "", descricaoEn = "") => ({
  pt: { titulo: tituloPt, descricao: descricaoPt },
  en: { titulo: tituloEn, descricao: descricaoEn }
});

const dadosObras = {
  1: obra("Fale com minhas mãos, 2023", "Speak with My Hands, 2023", "Vídeo, 3’59”\nVídeo editado com material de arquivo\nhttps://vimeo.com/827412719?share=copy&fl=sv&fe=ci", "Video, 3’59”\nVideo edited from archival footage\nhttps://vimeo.com/827412719?share=copy&fl=sv&fe=ci"),
  2: obra("Acordar, escrever de lado, 2024", "Waking Up, Writing Sideways, 2024", "Instalação de listas colecionadas desde 1997\nDimensões variáveis", "Installation of lists collected since 1997\nVariable dimensions"),
  3: obra("A Ground of Promises, 2024", "A Ground of Promises, 2024", "Coleção de “santinhos” (material de divulgação de políticos em eleição) de políticos diversos\nDimensões variáveis", "Collection of campaign cards from various politicians\nVariable dimensions"),
  4: obra("Welcome Sounds, 2023", "Welcome Sounds, 2023", "Fotografia e áudio-instalação, 3’37”\nSons de abertura de sessões plenárias em cinco lugares: Parlamento Nacional de Fiji; Câmara Municipal de São Paulo; Câmara Municipal de Sheffield; Parlamento da Etiópia; e o Estado do Texas.\nhttps://freesound.org/s/785308/", "Photography and audio installation, 3’37”\nOpening sounds from plenary sessions in five places: the Parliament of Fiji; São Paulo City Council; Sheffield City Council; the Parliament of Ethiopia; and the State of Texas.\nhttps://freesound.org/s/785308/"),
  5: obra("Trolley, 2023", "Trolley, 2023", "Vídeo, 1’\nVídeo editado de um carrinho em um departamento burocrático ao longo de um dia\nhttps://vimeo.com/1047315054?share=copy", "Video, 1’\nEdited video of a trolley in a bureaucratic department over the course of a day\nhttps://vimeo.com/1047315054?share=copy"),
  6: obra("Representação, 2023", "Representation, 2023", "Boletins de urnas eletrônicas, estrutura de alumínio e LED\n1,5 × 1,5 × 2,4 m", "Electronic voting machine reports, aluminum structure and LED\n1.5 × 1.5 × 2.4 m"),
  7: obra("Palimpsesto, 2023", "Palimpsest, 2023", "Projeto de lei e mapas impressos e aplicados em placa de madeira iluminada\n1,7 × 3,5 m", "Bill and printed maps applied to an illuminated wooden panel\n1.7 × 3.5 m"),
  8: obra("Ponto de vista, 2025", "Point of View, 2025", "Bordado e moldura acrílica\n4,2 × 3,5 m", "Embroidery and acrylic frame\n4.2 × 3.5 m"),
  9: obra("Ponte para meu corpo, 2021", "Bridge to My Body, 2021", "Bordado em linho e aplicação de tecido\n56 × 160 cm", "Embroidery on linen and fabric appliqué\n56 × 160 cm"),
  10: obra("Sem título (ainda), 2025", "Untitled (Still), 2025", "Bordado em tecido\n24 × 29 cm", "Embroidery on fabric\n24 × 29 cm"),
  11: obra("Trip, 2024", "Trip, 2024", "Mesa e bancos de madeira\n25 × 50 × 70 cm", "Wooden table and benches\n25 × 50 × 70 cm"),
  12: obra("Das formas de mover o tempo, 2022", "Ways of Moving Time, 2022", "Vídeo, duração variável\nSérie em constante atualização", "Video, variable duration\nAn ongoing series"),
  13: obra("Bússola, 2022", "Compass, 2022", "Bordado em tecido apresentado sobre fundo de luz\n59 × 37 cm", "Embroidery on fabric presented over a light background\n59 × 37 cm"),
  14: obra("Galocha azul", "Blue Rain Boot", "Audioinstalação\nÁudio 5´30”", "Audio installation\nAudio 5´30”"),
  15: obra("Punctum, 2026", "Punctum, 2026", "Caixas de papelão encapadas com tecido, costuradas e empilhadas\nDimensões variáveis", "Cardboard boxes covered with fabric, sewn and stacked\nVariable dimensions"),
  16: obra("Clockwise, 2024", "Clockwise, 2024", "Vídeo-instalação projetada em gavetas empilhadas\n1’56”", "Video installation projected onto stacked drawers\n1’56”"),
  17: obra("Travessia, 2021", "Crossing, 2021", "Atadura de gaze e cubo de vidro quebrado\n25 × 28 cm", "Gauze bandage and broken glass cube\n25 × 28 cm"),
  18: obra("Movimento incontido, número 1", "Uncontained Movement, Number 1", "Linhas costuradas sobre tecido\n17 × 15 cm", "Threads sewn onto fabric\n17 × 15 cm"),
  19: obra("Sem título, 2024 (série)", "Untitled, 2024 (series)", "Costura em tecido\nTamanhos variados", "Stitching on fabric\nVarious sizes"),
  20: obra("Metamorfose, 2022", "Metamorphosis, 2022", "Bordado em linho\n35 × 25 cm", "Embroidery on linen\n35 × 25 cm"),
  21: obra("Terço, 2021–atual", "Rosary, 2021–present", "Amarração com linha de agulhas de acupuntura usadas, processo contínuo", "Used acupuncture needles tied together with thread, ongoing process"),
  22: obra("Pulmão, 2022", "Lung, 2022", "Costura em saco plástico\n1,30 × 1,2 m", "Stitching on a plastic bag\n1.30 × 1.2 m"),
  23: obra("Orbitais, 2021", "Orbitals, 2021", "Desenho com carvão\n59 × 42 cm cada\nPolíptico", "Charcoal drawing\n59 × 42 cm each\nPolyptych"),
  24: obra("Solipsismos, 2022", "Solipsisms, 2022", "Videoperformance\nhttps://vimeo.com/741675146", "Video performance\nhttps://vimeo.com/741675146"),
  25: obra("Metropolis, 2019", "Metropolis, 2019", "Bordado em retalho de saia de linho\n22 × 35 cm", "Embroidery on a scrap from a linen skirt\n22 × 35 cm"),
  26: obra("Inventário, 2018", "Inventory, 2018", "Bordado em algodão\n39 × 51 cm", "Embroidery on cotton\n39 × 51 cm"),
  27: obra("Cartas inviáveis, 2020", "Unfeasible Letters, 2020", "Colagens em papel de algodão\n13 × 2", "Collages on cotton paper\n13 × 2"),
  28: obra("Encontrar meu ponto de reverberação, 2024", "Finding My Point of Reverberation, 2024", "Grafite sobre papel\n29,7 × 42 cm", "Graphite on paper\n29.7 × 42 cm"),
  29: obra("Série Desvio, 2020", "Deviation Series, 2020", "Costura de linhas em papel de algodão\n11 × 16 cm cada\nPolíptico", "Threads sewn onto cotton paper\n11 × 16 cm each\nPolyptych"),
  30: obra("Irene, 2019", "Irene, 2019", "Bordado e aplicação de tecido sobre tecido tingido com casca de cebola\n0,63 × 0,42 m", "Embroidery and fabric appliqué on fabric dyed with onion skins\n0.63 × 0.42 m"),
  31: obra("Escrita-rio, 2022–atual", "River-Writing, 2022–present", "Série composta por escrita fluida feita com caneta nanquim sobre papel\n29,7 × 42 cm cada", "Series of fluid writing made with India ink pen on paper\n29.7 × 42 cm each"),
  32: obra("Rever I, 2022", "Rever I, 2022", "Fronha de algodão e pontos de costura\n25 × 28 cm", "Cotton pillowcase and stitching\n25 × 28 cm"),
  33: obra("Pedra lascada, pedra polida, 2022", "Chipped Stone, Polished Stone, 2022", "Pedras e tecido costurado\nDimensões variáveis, série contínua\nPublicação relacionada: http://climacom.mudancasclimaticas.net.br/pedra-lascada/", "Stones and sewn fabric\nVariable dimensions, ongoing series\nRelated publication: http://climacom.mudancasclimaticas.net.br/pedra-lascada/"),
  34: obra("Passagens do interior, 2021", "Inner Passages, 2021", "Bordado em algodão\n37 × 33 cm", "Embroidery on cotton\n37 × 33 cm"),
  35: obra("Sismógrafo", "Seismograph", "Caneta, papel, sensores de biossinais e bobina\nDimensões variáveis", "Pen, paper, biosignal sensors and coil\nVariable dimensions"),
  36: obra("Azul, 2018", "Blue, 2018", "Bordado em linho\n37 × 41 cm", "Embroidery on linen\n37 × 41 cm"),
  37: obra("Garrafas ao mar, 2021–atual", "Messages in Bottles, 2021–present", "Ação que consiste em percorrer a cidade deixando pelo caminho garrafas de vidro transparente. Cada garrafa contém um pequeno bordado e um cartão, que convida quem encontrou o objeto a contatar a artista. O projeto começou no momento de isolamento social pandêmico e segue em curso.", "An action consisting of walking through the city and leaving transparent glass bottles along the way. Each bottle contains a small embroidery and a card inviting whoever finds the object to contact the artist. The project began during pandemic social isolation and remains ongoing."),
  38: obra("Rede social, 2024", "Social Network, 2024", "Cordas de redes penduradas\nDimensões variáveis", "Hanging hammock ropes\nVariable dimensions"),
  39: obra("O rio e o tempo, 2020 (tríptico)", "The River and Time, 2020 (triptych)", "Bordado em algodão\n5 × 6 cm cada", "Embroidery on cotton\n5 × 6 cm each"),
  40: obra("Argonauta, 2020", "Argonaut, 2020", "Grafite sobre papel\n29,7 × 42 cm", "Graphite on paper\n29.7 × 42 cm"),
  41: obra("Infiltração, 2021", "Infiltration, 2021", "Inscrição de grafite em papéis vegetais sobrepostos\n31 × 16 cm", "Graphite inscription on overlapping plant-based papers\n31 × 16 cm"),
  42: obra("Grounding, 2024", "Grounding, 2024", "Pedra, haste de cobre e gesso\n3 m × 2 m", "Stone, copper rod and plaster\n3 m × 2 m"),
  43: obra("Caminhada", "Walk", "Nanquim em papel - 21 × 29,7 cm cada (tríptico)", "India ink on paper - 21 × 29.7 cm each (triptych)"),
  44: obra("Garatujas", "Scribbles"),
  45: obra("Sagradas escrituras, 2021", "Sacred Scriptures, 2021", "Bordado em atadura de gaze\n72 × 22 cm", "Embroidery on gauze bandage\n72 × 22 cm")
};

const parametros = new URLSearchParams(location.search);
const numeroInformado = Number.parseInt(parametros.get("id"), 10);
const numero = Number.isInteger(numeroInformado) && numeroInformado >= 1 && numeroInformado <= 45
  ? numeroInformado
  : 1;
const idioma = parametros.get("lang") === "en" ? "en" : "pt";
const codigo = String(numero).padStart(2, "0");
const dados = dadosObras[numero] || {};
const ordemOriginalDasImagens = [
  1, 2, 3, 4, 5,
  6, 7, 8, 9, 10,
  11, 12, 13, 14, 15,
  16, 18, 26, 19, 17,
  21, 22, 20, 24, 25,
  30, 27, 28, 29, 31,
  32, 38, 33, 34, 35,
  36, 37, 39, 40, 41,
  42, 43, 44, 45, 23
];
const numeroOriginal = ordemOriginalDasImagens[numero - 1];
const codigoOriginal = String(numeroOriginal).padStart(2, "0");
const tituloPadrao = idioma === "en" ? `Work ${codigo}` : `Obra ${codigo}`;
const descricaoPadrao = idioma === "en"
  ? "Information and description of this work will be added soon."
  : "Informações e descrição desta obra serão adicionadas em breve.";

document.documentElement.lang = idioma === "en" ? "en" : "pt-BR";
document.title = `${dados[idioma]?.titulo || tituloPadrao} — Telma Hoyler`;

const imagem = document.querySelector("#imagemObra");
const galeriasObras = {
  8: [
    "obra-08.webp",
    "ponto de vista.png"
  ],
  23: [
    "23 capa.png",
    "Sagradas-escrituras-1-sem-fundo.png"
  ],
  27: [
    "cartas-inviaveis-01-recorte.jpg",
    "cartas-inviaveis-02-recorte.jpg",
    "cartas-inviaveis-03-recorte.jpg",
    "cartas-inviaveis-04-recorte.jpg",
    "cartas-inviaveis-05-recorte.jpg",
    "cartas-inviaveis-06-recorte.jpg",
    "cartas-inviaveis-07-recorte.jpg",
    "cartas-inviaveis-08-recorte.jpg",
    "cartas-inviaveis-09-recorte.jpg"
  ],
  29: [
    "A_sem tit 5-crop.png",
    "A_sem tit X-crop.png",
    "A_sem tit 3-crop.png",
    "A_sem tit 4-crop.png",
    "A_sem tit 2-crop.png",
    "A_sem tit 1-crop.png"
  ],
  32: [
    "v7.jpeg",
    "v6 2.jpeg",
    "v5.jpeg",
    "v2.jpeg",
    "v2 _.jpeg",
    "v1.jpeg"
  ],
  35: [
    "obra-44.webp",
    "obra-35.webp",
    "croquis.png"
  ],
  37: [
    "img-7292.jpg",
    "img-7288.jpg",
    "img-6833.jpg",
    "img-1787.jpg",
    "img-0989.jpg",
    "img-0984.jpg",
    "img-0982.jpg"
  ],
  40: [
    "capa.png",
    "segunda.png",
    "terceira.png"
  ],
  44: [
    "imagem 1.png",
    "imagem2.png",
    "imagem 3.png"
  ]
};
const imagensGaleria = galeriasObras[numeroOriginal];
const figura = document.querySelector("figure");

figura.classList.add(`obra-${numeroOriginal}`);

if (imagensGaleria) {
  figura.classList.add("tem-galeria", `galeria-obra-${numeroOriginal}`);
  document.querySelector(".moldura-imagem-obra").remove();
  figura.insertAdjacentHTML("afterbegin", `
    <div class="galeria-imagens-obra">
      ${imagensGaleria.map((arquivo, indice) => `
        <img src="assets/trabalhos/${arquivo}" alt="${tituloPadrao} — imagem ${indice + 1}" loading="lazy" />
      `).join("")}
    </div>
  `);
} else {
  imagem.src = numeroOriginal === 3
    ? "assets/trabalhos/santinhos _chao de estrelas.png"
    : numeroOriginal === 4
      ? "assets/trabalhos/obra-37.webp"
    : numeroOriginal === 23
      ? "assets/trabalhos/23 capa.png"
      : numeroOriginal === 20
        ? "assets/trabalhos/disposicao na pagina interna.png"
        : numeroOriginal === 13
          ? "assets/trabalhos/obra-13-sem-fundo.png?v=20260827-1"
        : numeroOriginal === 14
          ? "assets/trabalhos/barquinho.jpeg"
        : numeroOriginal === 17
          ? "assets/trabalhos/obra-17-sem-fundo.png"
        : numeroOriginal === 22
          ? "assets/trabalhos/2022.08-acervo.telma-4.jpg"
        : numeroOriginal === 19
          ? "assets/trabalhos/obra-19-clara.png"
        : numeroOriginal === 26
          ? "assets/trabalhos/acervo-66.jpg"
          : numeroOriginal === 30
            ? "assets/trabalhos/InventarioX-recorte.jpg"
            : numeroOriginal === 34
              ? "assets/trabalhos/obra-34-sem-fundo.png"
              : numeroOriginal === 35
                ? "assets/trabalhos/obra-44.webp"
              : numeroOriginal === 37
                ? "assets/trabalhos/capa-garrafa.jpg"
                : numeroOriginal === 38
                  ? "assets/trabalhos/obra-38-recorte.jpg"
                  : numeroOriginal === 39
                    ? "assets/trabalhos/essa rede social.png"
                  : numeroOriginal === 41
                    ? "assets/trabalhos/pensamento de caracol.png"
                  : numeroOriginal === 42
                    ? "assets/trabalhos/portfolio-tete-2.jpg"
                    : numeroOriginal === 43
                      ? "assets/trabalhos/fio terra2.png"
                : `assets/trabalhos/obra-${codigoOriginal}.webp`;
  imagem.alt = dados[idioma]?.titulo || tituloPadrao;
}

document.querySelector("#tituloObra").textContent = dados[idioma]?.titulo || tituloPadrao;

const descricaoObra = document.querySelector("#descricaoObra");
const descricao = dados[idioma]?.descricao || descricaoPadrao;

const rotulosDescricao = idioma === "en"
  ? {
      tecnica: "Medium",
      dimensoes: "Dimensions",
      duracao: "Duration",
      observacoes: "Notes",
      link: "Link"
    }
  : {
      tecnica: "Técnica",
      dimensoes: "Dimensões",
      duracao: "Duração",
      observacoes: "Observações",
      link: "Link"
    };

function adicionarLinhaDescricao(tipo, conteudo, url = false) {
  const linha = document.createElement("span");
  linha.className = "linha-descricao-obra";

  if (tipo !== "tecnica") {
    const rotulo = document.createElement("strong");
    rotulo.textContent = `${rotulosDescricao[tipo]}: `;
    linha.append(rotulo);
  }

  if (url) {
    const link = document.createElement("a");
    link.href = conteudo;
    link.target = "_blank";
    link.rel = "noreferrer";
    link.textContent = conteudo;
    linha.append(link);
  } else {
    linha.append(document.createTextNode(conteudo));
  }

  descricaoObra.append(linha);
}

const linhasDescricao = descricao.split("\n").map((linha) => linha.trim()).filter(Boolean);

linhasDescricao.forEach((linha, indice) => {
  if (/^https?:\/\//i.test(linha)) {
    adicionarLinhaDescricao("link", linha, true);
    return;
  }

  if (/^(dimensões variáveis|variable dimensions|tamanhos variados|various sizes)$/i.test(linha)) {
    adicionarLinhaDescricao("dimensoes", linha);
    return;
  }

  if (/^\d+(?:[,.]\d+)?\s*(?:m|cm)?\s*×/i.test(linha)) {
    adicionarLinhaDescricao("dimensoes", linha);
    return;
  }

  if (/^\d+[^\d\s]/.test(linha)) {
    adicionarLinhaDescricao("duracao", linha);
    return;
  }

  if (/^(áudio|audio)\s+\d/i.test(linha)) {
    adicionarLinhaDescricao("duracao", linha);
    return;
  }

  const tecnicaComDuracao = linha.match(/^(.+?),\s*(\d.+|duração variável|variable duration)$/i);
  if (tecnicaComDuracao) {
    adicionarLinhaDescricao("tecnica", tecnicaComDuracao[1]);
    adicionarLinhaDescricao("duracao", tecnicaComDuracao[2]);
    return;
  }

  const ehDescricaoPendente = linha === descricaoPadrao;
  const ehObservacao = indice > 0 || ehDescricaoPendente || linha.length > 120;
  adicionarLinhaDescricao(ehObservacao ? "observacoes" : "tecnica", linha);
});
