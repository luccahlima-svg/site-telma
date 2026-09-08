let idiomaAtual = localStorage.getItem("telma-language") || "pt";

const textosPorIdioma = {
  pt: {
    "rodape.direitos": "© 2026 Telma Hoyler.<br />Todos os direitos reservados.",
    "menu.sobre": "Sobre",
    "menu.arte": "Arte",
    "menu.academico": "Acadêmico",
    "menu.filmes": "Filme",
    "menu.contato": "Contato",
    "submenu.apresentacao": "Apresentação",
    "submenu.trabalhos": "Trabalhos",
    "submenu.exposicoes": "Exposições",
    "submenu.textos": "Textos",
    "submenu.publicacoes": "Publicações selecionadas",
    "submenu.aulas": "Aulas",
    "submenu.pesquisas": "Pesquisas",
    "inicio.legendaImagem": "Imagem de referência",
    "inicio.obrasDestaque": "Obras selecionadas",
    "inicio.verTodasObras": "Ver todas as obras →",
    "secao.sobre.numero": "Sobre",
    "secao.sobre.titulo": "Entre política e poética",
    "secao.sobre.texto1": "Telma Hoyler (São Paulo, 1988) é artista visual e cientista social, tendo concluído em 2022 seu doutorado em ciência política pela Universidade de São Paulo. Transita entre a cidade e a floresta, entre a política e a poética, entre o mundo “de dentro” e o “de fora”. Ao invés de dualidades e oposições, procura cerzir os pontos de contato entre essas categorias, desgastadas pela forma binária como insistimos em categorizar o mundo.",
    "secao.sobre.texto2": "Desde 2018, busca traduzir para o universo visual reflexões e sensações despertadas ao longo da sua extensa pesquisa etnográfica junto a burocratas, políticos e lideranças comunitárias. Cria a partir de múltiplas linguagens, incluindo escrita, costura, colagem, desenho e procedimentos de apropriação de imagens e sons para produção de vídeos e instalações sonoras.",
    "secao.sobre.exposicoes": "Exposições",
    "secao.textos": "Textos",
    "secao.arte.numero": "Arte",
    "secao.arte.titulo": "Catálogo.",
    "secao.arte.introducao": "Catálogo visual em atualização — imagens provisórias até a substituição pelas obras finais.",
    "academico.publicacoes": "Publicações selecionadas",
    "academico.aulas": "Aulas",
    "academico.pesquisas": "Pesquisas",
    "secao.contato.numero": "Contato",
    "secao.contato.titulo": "Vamos conversar",
    "secao.contato.introducao": "Para obras, exposições, encomendas, residências, parcerias acadêmicas e imprensa.",
    "contato.email": "Email",
    "contato.instagram.arte": "Instagram — Arte",
    "contato.instagram.academico": "Instagram — Acadêmico",
    "contato.linkedin": "LinkedIn",
    "contato.lattes.titulo": "Currículo Lattes",
    "contato.lattes.descricao": "Plataforma de currículos acadêmicos do CNPq.",
    "contato.atelier": "Atelier",
    "contato.cidade": "São Paulo, Brasil",
    "filme.ficha.titulo": "Ficha Técnica",
    "filme.ficha.direcao": "Direção:",
    "filme.ficha.montagem": "Montagem:",
    "filme.ficha.fotografia": "Direção de Fotografia:",
    "filme.ficha.cameras": "Câmeras:",
    "filme.ficha.som": "Edição de Som e Mixagem:",
    "filme.ficha.cor": "Colorização:",
    "filme.ficha.producao": "Produção:",
    "filme.ficha.posProducao": "Pós-Produção:",
    "filme.ficha.financiamento": "Financiamento:"
  },
  en: {
    "rodape.direitos": "© 2026 Telma Hoyler.<br />All rights reserved.",
    "menu.sobre": "About",
    "menu.arte": "Visual art",
    "menu.academico": "Academic",
    "menu.filmes": "Film",
    "menu.contato": "Contact",
    "submenu.apresentacao": "Presentation",
    "submenu.trabalhos": "Works",
    "submenu.exposicoes": "Exhibitions",
    "submenu.textos": "Texts",
    "submenu.publicacoes": "Selected publications",
    "submenu.aulas": "Classes",
    "submenu.pesquisas": "Research",
    "inicio.legendaImagem": "Reference image",
    "inicio.obrasDestaque": "Selected works",
    "inicio.verTodasObras": "View all works →",
    "secao.sobre.numero": "About",
    "secao.sobre.titulo": "Between politics and poetics.",
    "secao.sobre.texto1": "Telma Hoyler (São Paulo, 1988) is a visual artist and academic researcher. Holds a PhD in political science at the University of São Paulo (2017-2022) with exchange periods in Sciences Po (Paris, 2019-2020) and the University College London (Londres, 2023).",
    "secao.sobre.texto2": "She researches human interactions considering their multiple possibilities: in time, in space, between humans and non-humans. In the field of political sociology, she studies the topic by focusing on representation and democracy. Since 2017, the artist seeks to translate into the visual universe reflections and sensations aroused throughout her extensive ethnographic research with bureaucrats, politicians and territorial mobilizers.",
    "secao.sobre.exposicoes": "Exhibitions",
    "secao.textos": "Texts",
    "secao.arte.numero": "Visual art",
    "secao.arte.titulo": "Catalogue.",
    "secao.arte.introducao": "Visual catalogue in progress — temporary images until the final works are added.",
    "academico.publicacoes": "Selected publications",
    "academico.aulas": "Classes",
    "academico.pesquisas": "Research",
    "secao.contato.numero": "Contact",
    "secao.contato.titulo": "Let's talk.",
    "secao.contato.introducao": "For works, exhibitions, commissions, residencies, academic partnerships and press.",
    "contato.email": "Email",
    "contato.instagram.arte": "Instagram — Art",
    "contato.instagram.academico": "Instagram — Academic",
    "contato.linkedin": "LinkedIn",
    "contato.lattes.titulo": "Lattes CV",
    "contato.lattes.descricao": "CNPq academic CV platform.",
    "contato.atelier": "Studio",
    "contato.cidade": "São Paulo, Brazil",
    "filme.ficha.titulo": "Credits",
    "filme.ficha.direcao": "Director:",
    "filme.ficha.montagem": "Editing:",
    "filme.ficha.fotografia": "Director of Photography:",
    "filme.ficha.cameras": "Camera:",
    "filme.ficha.som": "Sound Editing and Mixing:",
    "filme.ficha.cor": "Color Grading:",
    "filme.ficha.producao": "Production:",
    "filme.ficha.posProducao": "Post-Production:",
    "filme.ficha.financiamento": "Funding:"
  }
};

const titulosObras = [
  ["Fale com minhas mãos, 2023", "Speak with My Hands, 2023"],
  ["Acordar, escrever de lado, 2024", "Waking Up, Writing Sideways, 2024"],
  ["A Ground of Promises, 2024", "A Ground of Promises, 2024"],
  ["Welcome Sounds, 2023", "Welcome Sounds, 2023"],
  ["Trolley, 2023", "Trolley, 2023"],
  ["Representação, 2023", "Representation, 2023"],
  ["Palimpsesto, 2023", "Palimpsest, 2023"],
  ["Ponto de vista, 2025", "Point of View, 2025"],
  ["Ponte para meu corpo, 2021", "Bridge to My Body, 2021"],
  ["Sem título (ainda), 2025", "Untitled (Still), 2025"],
  ["Trip, 2024", "Trip, 2024"],
  ["Das formas de mover o tempo, 2022", "Ways of Moving Time, 2022"],
  ["Bússola, 2022", "Compass, 2022"],
  ["Galocha azul", "Blue Rain Boot"],
  ["Punctum, 2026", "Punctum, 2026"],
  ["Clockwise, 2024", "Clockwise, 2024"],
  ["Travessia, 2021", "Crossing, 2021"],
  ["Movimento incontido, número 1", "Uncontained Movement, Number 1"],
  ["Sem título, 2024 (série)", "Untitled, 2024 (series)"],
  ["Metamorfose, 2022", "Metamorphosis, 2022"],
  ["Terço, 2021–atual", "Rosary, 2021–present"],
  ["Pulmão, 2022", "Lung, 2022"],
  ["Orbitais, 2021", "Orbitals, 2021"],
  ["Solipsismos, 2022", "Solipsisms, 2022"],
  ["Metropolis, 2019", "Metropolis, 2019"],
  ["Inventário, 2018", "Inventory, 2018"],
  ["Cartas inviáveis, 2020", "Unfeasible Letters, 2020"],
  ["Encontrar meu ponto de reverberação, 2024", "Finding My Point of Reverberation, 2024"],
  ["Série Desvio, 2020", "Deviation Series, 2020"],
  ["Irene, 2019", "Irene, 2019"],
  ["Escrita-rio, 2022–atual", "River-Writing, 2022–present"],
  ["Rever I, 2022", "Rever I, 2022"],
  ["Pedra lascada, pedra polida, 2022", "Chipped Stone, Polished Stone, 2022"],
  ["Passagens do interior, 2021", "Inner Passages, 2021"],
  ["Sismógrafo", "Seismograph"],
  ["Azul, 2018", "Blue, 2018"],
  ["Garrafas ao mar, 2021–atual", "Messages in Bottles, 2021–present"],
  ["Rede social, 2024", "Social Network, 2024"],
  ["O rio e o tempo, 2020 (tríptico)", "The River and Time, 2020 (triptych)"],
  ["Argonauta, 2020", "Argonaut, 2020"],
  ["Infiltração, 2021", "Infiltration, 2021"],
  ["Grounding, 2024", "Grounding, 2024"],
  ["Caminhada", "Walk"],
  ["Garatujas", "Scribbles"],
  ["Sagradas escrituras, 2021", "Sacred Scriptures, 2021"]
];

// Ordem visual aprovada. Cada número aponta para a antiga posição da imagem.
const ordemOriginalDasCapas = [
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

const capasOriginais = {
  3: "trabalhos/santinhos _chao de estrelas.png",
  5: "trabalhos/obra-05-capa.png",
  6: "trabalhos/Representação detalhe1.png",
  19: "trabalhos/obra-19-clara.png",
  23: "trabalhos/sagradas-escrituras-capa-recorte.png",
  26: "trabalhos/acervo-66-capa-recorte.jpg",
  30: "trabalhos/InventarioX.jpg",
  34: "trabalhos/obra_34.jpeg",
  36: "trabalhos/obra-36-capa-recorte.png",
  37: "trabalhos/capa-garrafa.jpg",
  38: "trabalhos/obra-38-capa-sem-branco.jpg",
  39: "trabalhos/rede social capa.png",
  40: "trabalhos/rio-e-tempo-capa-sem-fundo.png",
  41: "trabalhos/argonauta-capa-anexo.png",
  42: "trabalhos/portfolio-tete-2.jpg",
  43: "trabalhos/fio terra2.png",
  44: "trabalhos/caminhada-capa-sem-fundo.jpg"
};

const obras = Array.from({ length: 45 }, (_, indice) => ({
  imagem: capasOriginais[ordemOriginalDasCapas[indice]]
    || `trabalhos/obra-${String(ordemOriginalDasCapas[indice]).padStart(2, "0")}.webp`,
  ano: "",
  pt: titulosObras[indice][0],
  en: titulosObras[indice][1]
}));

const exposicoes = [
  { ano: "2025", pt: "Para entender a fúria", en: "Para entender a fúria", detalhePt: "Espaço Tingê, curadoria de Thatiana Cardoso — São Paulo", detalheEn: "Espaço Tingê, curated by Thatiana Cardoso — São Paulo" },
  { ano: "2024", pt: "Marcas de ordens provisórias", en: "Marcas de ordens provisórias", detalhePt: "Edifício Vera, curadoria de André Fernandes e Renato Almeida — São Paulo", detalheEn: "Edifício Vera, curated by André Fernandes and Renato Almeida — São Paulo" },
  { ano: "2024", pt: "Estruturas do vazio", en: "Estruturas do vazio", detalhePt: "E se coletivo, curadoria de Omar Porto — São Paulo", detalheEn: "E se coletivo, curated by Omar Porto — São Paulo" },
  { ano: "2024", pt: "Linhas de Força, superfícies de contato", en: "Linhas de Força, superfícies de contato", detalhePt: "Galeria Gare, curadoria de Mário Gioia — São Paulo", detalheEn: "Galeria Gare, curated by Mário Gioia — São Paulo" },
  { ano: "2024", pt: "Living Democracy", en: "Entanglements", detalhePt: "Brunei Gallery — Londres", detalheEn: "Brunei Gallery — London" },
  { ano: "2023", pt: "A exceção e a regra", en: "A exceção e a regra", detalhePt: "Ateliê 397, curadoria de Erica Burini — São Paulo", detalheEn: "Ateliê 397 — São Paulo" },
  { ano: "2023", pt: "E se ouvíssemos a casa?", en: "E se ouvíssemos a casa?", detalhePt: "Casa Mulungu — São Paulo", detalheEn: "Casa Mulungu — São Paulo" },
  { ano: "2022", pt: "18º Salão Ubatuba de Artes Visuais", en: "18º Salão Ubatuba de Artes Visuais", detalhePt: "Ubatuba", detalheEn: "Ubatuba" },
  { ano: "2022", pt: "Festival Lux de Performance", en: "Festival Lux de Performance", detalhePt: "Espaço Lux — São Paulo", detalheEn: "Espaço Lux — São Paulo" },
  { ano: "2022", pt: "E se a gente ficar?", en: "E se a gente ficar?", detalhePt: "Apartamento 01 — São Paulo", detalheEn: "Apartamento 01 — São Paulo" },
  { ano: "2018", pt: "Movimento (in)contido", en: "Movimento (in)contido", detalhePt: "Banca Curva — São Paulo", detalheEn: "Banca Curva — São Paulo" },
  { ano: "2017", pt: "Marias", en: "Marias", detalhePt: "Galeria Butantã — São Paulo", detalheEn: "Galeria Butantã — São Paulo" }
];

const textos = [
  { ano: "2024", pt: "The rule and the exception", en: "The rule and the exception", detalhePt: "Catálogo", detalheEn: "Catalogue", url: "assets/textos/the-rule-and-the-exception-catalogue.pdf" },
  { ano: "2024", pt: "Marcas de ordens provisórias", en: "Marcas de ordens provisórias", detalhePt: "", detalheEn: "", url: "assets/textos/marcas-de-ordens-provisorias.pdf" }
];

const publicacoes = [
  { ano: "2025", pt: "O espartilho conceitual da política: representação, clientelismo, participação e cooptação", en: "The conceptual corset of politics: representation, clientelism, participation and cooptation", detalhePt: "Lua Nova", detalheEn: "Lua Nova", url: "assets/academico/O%20espartilho%20conceitual%20da%20politica.pdf" },
  { ano: "2025", pt: "Making Political Representation in Territories of the City: The Role of Mandatos in São Paulo", en: "Making Political Representation in Territories of the City: The Role of Mandatos in São Paulo", detalhePt: "Urban Affairs Review", detalheEn: "Urban Affairs Review", url: "assets/academico/hoyler-marques-2025-making-political-representation-in-territories-of-the-city-the-role-of-mandatos-in-sao-paulo.pdf" },
  { ano: "2025", pt: "Ethnography in the plural: experimenting with collective ethnography in research on politics and politicians in Brazil", en: "Ethnography in the plural: experimenting with collective ethnography in research on politics and politicians in Brazil", detalhePt: "Ethnography", detalheEn: "Ethnography", url: "assets/academico/cornwall-et-al-2025-ethnography-in-the-plural-experimenting-with-collective-ethnography-in-research-on-politics-and.pdf" },
  { ano: "2025", pt: "Collaborative reflexive inquiry into parliaments: ethnographers negotiating during research on politics", en: "Collaborative reflexive inquiry into parliaments: ethnographers negotiating during research on politics", detalhePt: "Capítulo — Doing Fieldwork in Centres of Power, Routledge", detalheEn: "Chapter — Doing Fieldwork in Centres of Power, Routledge", url: "assets/academico/collective%20ethongraphy%20-%20chapter.pdf" },
  { ano: "2023", pt: "Política local e coordenação intrapartidária nas dobradas eleitorais paulistanas", en: "Local politics and intraparty coordination in the electoral dobradas in São Paulo", detalhePt: "Revista Brasileira de Ciências Sociais", detalheEn: "Revista Brasileira de Ciências Sociais", url: "assets/academico/Hoyler%20e%20Marques_2023_%20politica%20local%20e%20coordenacao%20intrapartidaria%20nas%20dobradas.pdf" },
  { ano: "2023", pt: "Itineraries and forms of management in the awarding of commendations by São Paulo municipal councillors: an exercise in researching with", en: "Itineraries and forms of management in the awarding of commendations by São Paulo municipal councillors: an exercise in researching with", detalhePt: "Vibrant", detalheEn: "Vibrant", url: "assets/academico/Vibrant_honrarias%20vereadores.pdf" },
  { ano: "2021", pt: "A construção de vínculos político-territoriais na cidade: evidências de São Paulo", en: "The construction of political-territorial ties in the city: evidence from São Paulo", detalhePt: "Opinião Pública", detalheEn: "Opinião Pública", url: "assets/academico/a%20construcao%20%20de%20vinculos%20politico%20territoriais.pdf" },
  { ano: "2019", pt: "A vida política dos documentos: notas sobre burocratas, políticas e papéis", en: "The political life of documents: notes on bureaucrats, politics and paper", detalhePt: "Revista de Sociologia e Política", detalheEn: "Revista de Sociologia e Política", url: "assets/academico/a%20vida%20politica%20dos%20documentos.pdf" },
  { ano: "2016", pt: "Produção habitacional via mercado: quem produz, como e onde?", en: "Housing production via market: who produces, how and where?", detalhePt: "Novos Estudos Cebrap", detalheEn: "Novos Estudos Cebrap", url: "assets/academico/Producao%20habitacional%20via%20mercado_novos%20estudos.pdf" },
  { ano: "2015", pt: "Quem governa quando o Estado não governa? Entrevista com Patrick Le Galès", en: "Who governs when the State does not? Interview with Patrick Le Galès", detalhePt: "Novos Estudos Cebrap", detalheEn: "Novos Estudos Cebrap", url: "assets/academico/Novos%20Estudos_entrevista%20Le%20Gales_Final_publicado.pdf" }
];

const aulas = [
  { ano: "2026", pt: "Cidade e clima", en: "City and climate", detalhePt: "IDP-SP", detalheEn: "IDP-SP" },
  { ano: "2026", pt: "Métodos qualitativos e técnicas de pesquisa", en: "Qualitative methods and research techniques", detalhePt: "IDP-SP", detalheEn: "IDP-SP" },
  { ano: "2024", pt: "Dinâmicas urbanas e políticas públicas", en: "Urban dynamics and public policies", detalhePt: "IDP-SP", detalheEn: "IDP-SP" }
];

const pesquisas = [
  {
    titulo: "Candidatura de servidores públicos",
    paragrafos: [
      "Classicamente, esperamos que funcionários públicos não se relacionem com a política partidária; estariam nas burocracias e departamentos dos vários níveis de governo justamente para garantir estabilidade entre eleições, para que políticas permaneçam mesmo que o governante e o partido no poder mudem. A pesquisa procura entender, a partir da análise da base de dados de candidaturas do TSE – Tribunal Superior Eleitoral no Brasil, o fenômeno da candidatura dessas pessoas. Em termos qualitativos, enfoca na categoria dos policiais militares e professores de escolas públicas para entender como transformam o capital funcional aprendido como funcionários públicos em capital político para disputar eleições.",
      "Financiamento: Fapesp"
    ]
  },
  {
    titulo: "Intermediadores da política",
    paragrafos: [
      "Do ponto de vista relacional, sempre existe alguém entre dois mundos: que conecta famílias, amigos, empresas etc. Essa pesquisa olha especificamente para os intermediários da política que atuam no nível dos bairros, conectando cidadãos ainda pouco inseridos nas redes políticas a instâncias públicas da política mais institucionalizada, como mandatos parlamentares, burocracias etc.",
      "Iniciou-se no final de 2016 como uma pesquisa etnográfica baseada na cidade de São Paulo para fins de doutoramento, tendo-se estendido por diversos caminhos subsequentes, incluindo a Rede People and Parliaments (2023-2025), a colaboração com o Nepol – Núcleo de Estudos em Poder Local (UFJF), entre outras parcerias e projetos em curso."
    ]
  },
  {
    titulo: "Pensar o pensamento: etnografia da política e outras reflexões epistêmicas e metodológicas",
    paragrafos: [
      "Toda pesquisa carrega uma pergunta escondida atrás da pergunta: não só o que descobrimos, mas como chegamos a poder dizer isso. Anos de campo ao lado de vereadores e seus intermediários me ensinaram que conhecer a política de perto muda o que se pode ver — e também o que se corre o risco de deixar de ver. Esta é a reflexão sobre o próprio ofício: os dilemas de estar perto demais e longe o suficiente, as traduções entre o que se observa e o que se escreve. Uma etnografia da própria etnografia, por assim dizer — pensar o pensamento como parte do trabalho, não como seu apêndice."
    ]
  },
  {
    titulo: "Cidade e clima",
    paragrafos: [
      "A cidade sempre foi pensada como espaço de conflito e negociação, mas pensar a cidade contemporânea exige acrescentar outra camada: a cidade como corpo que sente o clima, que alaga, esquenta, seca. Este interesse cruza a tradição dos estudos urbanos com os debates recentes sobre adaptação e resiliência, perguntando como o clima se torna também questão de poder local: quem decide por onde a água escoa, quem tem sombra e quem tem sol, quem tem para onde ir quando chove demais. Caminhar pela cidade — atenta a córregos cobertos, rachaduras, árvores que faltam — é também um método: registrar no corpo, e às vezes na câmera, o que os indicadores ainda não sabem nomear."
    ]
  },
  {
    titulo: "Artefatos da política",
    paragrafos: [
      "Documentos e objetos também fazem política, isto é, não apenas a representam, mas carregam decisões, omissões e rastros de poder que sobrevivem ao expediente que os produziu. Explorei anteriormente esse assunto nas publicações “A vida política dos documentos” (2019) e Itinerários da produção legislativa (2023). Daí duas coleções nascidas dessa mesma curiosidade: santinhos de campanha reunidos desde os anos 1950, quando se materializavam em caixas de fósforo; e boletim físico impresso pelas urnas eletrônicas. Ambas coleções já se tornaram matéria-prima de obras expostas.",
      "Um projeto sonhado nessa linha de interesses é criar mobiliário urbano fabricado a partir do descarte de documentos públicos e posicionar esse mobiliário para que pessoas descansem em praças públicas pela cidade."
    ]
  },
  {
    titulo: "Ressentimentos e outras questões de família / Home in Politics",
    paragrafos: [
      "“Home is where we start from”, escreveu Winnicott — mas onde a casa vai depois? Esta pesquisa, em parceria comparativa entre Brasil e Reino Unido, parte da ideia de que a casa não fica confinada à esfera privada: ela viaja emocionalmente, simbólica e materialmente para dentro das instituições políticas, moldando como poder, cuidado e conflito são vividos e geridos ali dentro. Olhamos para parlamentos nacionais e câmaras municipais nos dois países perguntando como hierarquias familiares, divisões de trabalho por gênero, comensalidade e afeto doméstico são reencenados na vida institucional cotidiana. Entre os afetos que assim cruzam a fronteira do privado ao público está o ressentimento, sentimento tantas vezes lido apenas como combustível reacionário, mas que talvez carregue também uma dimensão mais geral que cruza espectros políticos referindo-se a quem sente que seu lugar na casa comum da sociedade não foi reconhecido. Interessa-nos, assim, entender como o ressentimento circula e se naturaliza nas instituições e constrói a política."
    ]
  }
];

const paginas = ["home", "about", "presentation", "exhibitions", "texts", "art", "publications", "classes", "research", "films", "contact"];
const paginasPadrao = { academic: "publications" };
const paginasAcademicas = ["publications", "classes", "research"];
const paginasArte = ["art", "exhibitions", "texts"];
const imagensHero = document.querySelectorAll(".imagem-hero");
const botoesHero = document.querySelectorAll(".pontos-hero button");
const botaoMenuMobile = document.querySelector(".botao-menu-mobile");
const fundoMenuLateral = document.querySelector(".fundo-menu-lateral");
let imagemHeroAtual = 0;

function carregarImagemHero(indice) {
  const imagem = imagensHero[indice]?.querySelector("img[data-src]");
  if (!imagem) return;
  imagem.src = imagem.dataset.src;
  imagem.removeAttribute("data-src");
}

function criarCartaoObra(obra, indice) {
  const titulo = obra[idiomaAtual];
  const legenda = titulo || obra.ano
    ? `
      <span class="legenda-cartao-obra">
        <span>
          <span class="titulo-cartao-obra">${titulo}</span>
          <span class="rotulo-secao texto-suave">${obra.ano}</span>
        </span>
      </span>
    `
    : "";
  return `
    <a href="obra.html?id=${indice + 1}&lang=${idiomaAtual}" class="cartao-obra cartao-obra-${indice + 1}" aria-label="Abrir obra ${indice + 1}" target="_blank" rel="noopener noreferrer">
      <img src="assets/${obra.imagem}" alt="${titulo || `Obra ${String(indice + 1).padStart(2, "0")}`}" loading="lazy" />
      ${legenda}
    </a>
  `;
}

function criarItemLista(item) {
  const tag = item.url ? "a" : "div";
  const atributos = item.url ? ` href="${item.url}" target="_blank" rel="noreferrer"` : "";
  return `
    <${tag} class="item-lista"${atributos}>
      <span class="rotulo-secao ano-item-lista">${item.ano}</span>
      <span>
        <span class="titulo-item-lista">${item[idiomaAtual]}</span>
        <span class="rotulo-secao detalhe-item-lista">${item[idiomaAtual === "pt" ? "detalhePt" : "detalheEn"]}</span>
      </span>
    </${tag}>
  `;
}

function criarItemPesquisa(pesquisa) {
  return `
    <article class="item-pesquisa">
      <h2>${pesquisa.titulo}</h2>
      <div class="texto-pesquisa">
        ${pesquisa.paragrafos.map((paragrafo) => `<p>${paragrafo}</p>`).join("")}
      </div>
    </article>
  `;
}

function renderizarConteudo() {
  const gradeObrasDestaque = document.querySelector("#gradeObrasDestaque");
  if (gradeObrasDestaque) {
    gradeObrasDestaque.innerHTML = obras.slice(0, 6).map(criarCartaoObra).join("");
  }
  document.querySelector("#gradeCatalogoObras").innerHTML = `
    <div class="linha-comparacao-obras linha-cinco-obras">
      ${obras.map(criarCartaoObra).join("")}
    </div>
  `;
  document.querySelector("#listaExposicoes").innerHTML = exposicoes.map(criarItemLista).join("");
  document.querySelector("#listaTextos").innerHTML = textos.map(criarItemLista).join("");
  document.querySelector("#listaPublicacoes").innerHTML = publicacoes.map(criarItemLista).join("");
  document.querySelector("#listaAulas").innerHTML = aulas.map(criarItemLista).join("");
  document.querySelector("#listaPesquisas").innerHTML = pesquisas.map(criarItemPesquisa).join("");
}

function traduzirTextos() {
  document.documentElement.lang = idiomaAtual === "pt" ? "pt-BR" : "en";
  document.querySelectorAll("[data-texto]").forEach((element) => {
    element.textContent = textosPorIdioma[idiomaAtual][element.dataset.texto] || element.textContent;
  });
  document.querySelectorAll("[data-html-traduzido]").forEach((element) => {
    element.innerHTML = textosPorIdioma[idiomaAtual][element.dataset.htmlTraduzido] || element.innerHTML;
  });
  document.querySelectorAll(".botao-idioma").forEach((button) => {
    button.classList.toggle("ativo", button.dataset.idioma === idiomaAtual);
  });
}

function definirIdioma(idioma) {
  idiomaAtual = idioma;
  localStorage.setItem("telma-language", idioma);
  traduzirTextos();
  renderizarConteudo();
}

function definirPagina(paginaDestino) {
  const paginaResolvida = paginasPadrao[paginaDestino] || paginaDestino;
  const paginaSegura = paginas.includes(paginaResolvida) ? paginaResolvida : "home";
  document.body.classList.toggle("rota-inicial", paginaSegura === "home");
  document.querySelectorAll(".pagina").forEach((pagina) => {
    pagina.classList.toggle("ativo", pagina.dataset.pagina === paginaSegura);
  });
  document.querySelectorAll("[data-pagina-destino]").forEach((link) => {
    const linkAcademico = link.dataset.paginaDestino === "academic" && paginasAcademicas.includes(paginaSegura);
    const linkArte = link.dataset.paginaDestino === "artGroup" && paginasArte.includes(paginaSegura);
    link.classList.toggle("ativo", link.dataset.paginaDestino === paginaSegura || linkAcademico || linkArte);
  });
  window.scrollTo({ top: 0, behavior: "auto" });
}

function atualizarPaginaPeloHash() {
  definirPagina(location.hash.replace("#", "") || "home");
}

function definirMenuLateralAberto(menuAberto) {
  document.body.classList.toggle("menu-lateral-aberto", menuAberto);
  botaoMenuMobile?.setAttribute("aria-expanded", String(menuAberto));
}

function avancarHero() {
  imagensHero[imagemHeroAtual].classList.remove("ativo");
  botoesHero[imagemHeroAtual]?.classList.remove("ativo");
  imagemHeroAtual = (imagemHeroAtual + 1) % imagensHero.length;
  carregarImagemHero(imagemHeroAtual);
  imagensHero[imagemHeroAtual].classList.add("ativo");
  botoesHero[imagemHeroAtual]?.classList.add("ativo");
  carregarImagemHero((imagemHeroAtual + 1) % imagensHero.length);
}

traduzirTextos();
renderizarConteudo();
atualizarPaginaPeloHash();
window.addEventListener("hashchange", atualizarPaginaPeloHash);
document.querySelectorAll(".botao-idioma[data-idioma]").forEach((button) => {
  button.addEventListener("click", () => definirIdioma(button.dataset.idioma));
});
botaoMenuMobile?.addEventListener("click", () => {
  definirMenuLateralAberto(!document.body.classList.contains("menu-lateral-aberto"));
});
fundoMenuLateral?.addEventListener("click", () => definirMenuLateralAberto(false));
document.querySelectorAll(".menu-lateral a").forEach((link) => {
  link.addEventListener("click", () => definirMenuLateralAberto(false));
});
carregarImagemHero(1);
setInterval(avancarHero, 5200);
