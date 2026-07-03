let idiomaAtual = localStorage.getItem("telma-language") || "pt";

const textosPorIdioma = {
  pt: {
    "rodape.direitos": "© 2026 Telma Hoyler.<br />Todos os direitos reservados.",
    "menu.sobre": "Sobre",
    "menu.arte": "Arte",
    "menu.academico": "Acadêmico",
    "menu.filmes": "Filmes",
    "menu.contato": "Contato",
    "submenu.apresentacao": "Apresentação",
    "submenu.exposicoes": "Exposições",
    "submenu.midia": "Mídia",
    "submenu.publicacoes": "Publicações",
    "submenu.aulas": "Aulas",
    "inicio.legendaImagem": "Imagem de referência",
    "inicio.obrasDestaque": "Obras selecionadas",
    "inicio.verTodasObras": "Ver todas as obras →",
    "secao.sobre.numero": "Sobre",
    "secao.sobre.titulo": "Entre política e poética",
    "secao.sobre.texto1": "Telma Hoyler (São Paulo, 1988) é artista visual e cientista social, tendo concluído em 2022 seu doutorado em ciência política pela Universidade de São Paulo. Transita entre a cidade e a floresta, entre a política e a poética, entre o mundo “de dentro” e o “de fora”. Ao invés de dualidades e oposições, procura cerzir os pontos de contato entre essas categorias, desgastadas pela forma binária como insistimos em categorizar o mundo.",
    "secao.sobre.texto2": "Desde 2018, busca traduzir para o universo visual reflexões e sensações despertadas ao longo da sua extensa pesquisa etnográfica junto a burocratas, políticos e lideranças comunitárias. Cria a partir de múltiplas linguagens, incluindo escrita, costura, colagem, desenho e procedimentos de apropriação de imagens e sons para produção de vídeos e instalações sonoras.",
    "secao.sobre.exposicoes": "Exposições",
    "secao.sobre.midia": "Mídia",
    "secao.arte.numero": "Arte",
    "secao.arte.titulo": "Catálogo.",
    "secao.arte.introducao": "Catálogo visual em atualização — imagens provisórias até a substituição pelas obras finais.",
    "academico.publicacoes": "Publicações",
    "academico.aulas": "Aulas",
    "secao.contato.numero": "Contato",
    "secao.contato.titulo": "Vamos conversar",
    "secao.contato.introducao": "Para obras, exposições, encomendas, residências, parcerias acadêmicas e imprensa.",
    "contato.email": "Email",
    "contato.lattes.titulo": "Currículo Lattes",
    "contato.lattes.descricao": "Plataforma de currículos acadêmicos do CNPq.",
    "contato.atelier": "Atelier",
    "contato.cidade": "São Paulo, Brasil"
  },
  en: {
    "rodape.direitos": "© 2026 Telma Hoyler.<br />All rights reserved.",
    "menu.sobre": "About",
    "menu.arte": "Visual art",
    "menu.academico": "Academic",
    "menu.filmes": "Films",
    "menu.contato": "Contact",
    "submenu.apresentacao": "Presentation",
    "submenu.exposicoes": "Exhibitions",
    "submenu.midia": "Media",
    "submenu.publicacoes": "Publications",
    "submenu.aulas": "Classes",
    "inicio.legendaImagem": "Reference image",
    "inicio.obrasDestaque": "Selected works",
    "inicio.verTodasObras": "View all works →",
    "secao.sobre.numero": "About",
    "secao.sobre.titulo": "Between politics and poetics.",
    "secao.sobre.texto1": "Telma Hoyler (São Paulo, 1988) is a visual artist and academic researcher. Holds a PhD in political science at the University of São Paulo (2017-2022) with exchange periods in Sciences Po (Paris, 2019-2020) and the University College London (Londres, 2023).",
    "secao.sobre.texto2": "She researches human interactions considering their multiple possibilities: in time, in space, between humans and non-humans. In the field of political sociology, she studies the topic by focusing on representation and democracy. Since 2017, the artist seeks to translate into the visual universe reflections and sensations aroused throughout her extensive ethnographic research with bureaucrats, politicians and territorial mobilizers.",
    "secao.sobre.exposicoes": "Exhibitions",
    "secao.sobre.midia": "Media",
    "secao.arte.numero": "Visual art",
    "secao.arte.titulo": "Catalogue.",
    "secao.arte.introducao": "Visual catalogue in progress — temporary images until the final works are added.",
    "academico.publicacoes": "Publications",
    "academico.aulas": "Classes",
    "secao.contato.numero": "Contact",
    "secao.contato.titulo": "Let's talk.",
    "secao.contato.introducao": "For works, exhibitions, commissions, residencies, academic partnerships and press.",
    "contato.email": "Email",
    "contato.lattes.titulo": "Lattes CV",
    "contato.lattes.descricao": "CNPq academic CV platform.",
    "contato.atelier": "Studio",
    "contato.cidade": "São Paulo, Brazil"
  }
};

const obras = [
  { imagem: "work-01-DuHw-eJp.jpg", ano: "2023", pt: "Rede vermelha", en: "Red net" },
  { imagem: "work-02-C0LLo0Nh.jpg", ano: "2022", pt: "Renda azul", en: "Blue lace" },
  { imagem: "work-03-CKEm1NS-.jpg", ano: "2021", pt: "Barcos", en: "Boats" },
  { imagem: "work-04-CBFwcts7.jpg", ano: "2020", pt: "Escrita azul", en: "Blue writing" },
  { imagem: "work-05-B2Ep6u1v.jpg", ano: "2022", pt: "Cidade amarela", en: "Yellow city" },
  { imagem: "work-06-u_eBZYgy.jpg", ano: "2019", pt: "Tubos", en: "Tubes" },
  { imagem: "work-07-DZwS_mQM.jpg", ano: "2018", pt: "Fios", en: "Threads" },
  { imagem: "work-08--x5uXQpe.jpg", ano: "2017", pt: "Repetição", en: "Repetition" },
  { imagem: "work-09-hb7boNr0.jpg", ano: "2016", pt: "Esfera de papel", en: "Paper sphere" },
  { imagem: "work-10-CJYxq5eT.jpg", ano: "2015", pt: "Estufa", en: "Greenhouse" },
  { imagem: "work-11-D1TvYo0W.jpg", ano: "2014", pt: "Linha vertical", en: "Vertical line" },
  { imagem: "work-12-BYFJgm7u.jpg", ano: "2013", pt: "Atelier", en: "Studio" }
];

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

const midia = [
  { ano: "2023", pt: "A conversation about political art", en: "A conversation about political art", detalhePt: "EOPP/ERC — Londres", detalheEn: "EOPP/ERC — London" },
  { ano: "2023", pt: "Mobilização política em territórios de São Paulo", en: "Political Mobilization in São Paulo: ethnographic notes", detalhePt: "Jornal da USP — São Paulo", detalheEn: "Jornal da USP — São Paulo" },
  { ano: "2023", pt: "Mobilização política e métodos qualitativos", en: "Political mobilization and qualitative methods", detalhePt: "Urbanidades, Cebrap — São Paulo", detalheEn: "Urbanidades, Cebrap — São Paulo" },
  { ano: "2020", pt: "Sobre a artista", en: "About the artist", detalhePt: "Livraria Feminista Confraria Vermelha — Cidade do Porto", detalheEn: "Livraria Feminista Confraria Vermelha — Cidade do Porto" }
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
  { ano: "2022", pt: "Laboratório Método sem Método", en: "Laboratório Método sem Método", detalhePt: "Bruno Novaes, Instituto Adelina — outubro-novembro", detalheEn: "Bruno Novaes, Instituto Adelina — October-November" },
  { ano: "2022", pt: "Textos e Têxteis", en: "Textos e Têxteis", detalhePt: "Estefânia Lima e Salma Dória, Instituto Adelina — outubro-novembro", detalheEn: "Estefânia Lima and Salma Dória, Instituto Adelina — October-November" },
  { ano: "2022", pt: "Acompanhamento artístico individual", en: "Individual artistic mentoring", detalhePt: "André Komatsu", detalheEn: "André Komatsu" },
  { ano: "2022", pt: "Casero Residência", en: "Casero Residency", detalhePt: "Parque Itatiaia, Patricia Stagi — edição de inverno", detalheEn: "Parque Itatiaia, Patricia Stagi — winter edition" },
  { ano: "2022", pt: "Acompanhamento artístico", en: "Artistic mentoring", detalhePt: "Julie Belfer", detalheEn: "Julie Belfer" },
  { ano: "2021", pt: "A linha e seus papeis", en: "A linha e seus papeis", detalhePt: "Edith Derdyk, A Casa Tombada — março", detalheEn: "Edith Derdyk, A Casa Tombada — March" },
  { ano: "2021", pt: "O que conta a história da arte?", en: "O que conta a história da arte?", detalhePt: "Maria Helena Bernardes, ESPAI — setembro", detalheEn: "Maria Helena Bernardes, ESPAI — September" },
  { ano: "2019", pt: "Acompanhamento artístico", en: "Artistic mentoring", detalhePt: "Julia Demeter", detalheEn: "Julia Demeter" }
];

const paginas = ["home", "about", "presentation", "exhibitions", "media", "art", "publications", "classes", "films", "contact"];
const paginasPadrao = { academic: "publications" };
const paginasAcademicas = ["publications", "classes"];
const paginasArte = ["art", "exhibitions", "media"];
const imagensHero = document.querySelectorAll(".imagem-hero");
const botoesHero = document.querySelectorAll(".pontos-hero button");
const botaoMenuMobile = document.querySelector(".botao-menu-mobile");
const fundoMenuLateral = document.querySelector(".fundo-menu-lateral");
let imagemHeroAtual = 0;

function criarCartaoObra(obra) {
  const titulo = obra[idiomaAtual];
  return `
    <a href="#art" class="cartao-obra">
      <img src="assets/imagens/${obra.imagem}" alt="${titulo}" loading="lazy" />
      <span class="legenda-cartao-obra">
        <span>
          <span class="titulo-cartao-obra">${titulo}</span>
          <span class="rotulo-secao texto-suave">${obra.ano}</span>
        </span>
      </span>
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

function renderizarConteudo() {
  const gradeObrasDestaque = document.querySelector("#gradeObrasDestaque");
  if (gradeObrasDestaque) {
    gradeObrasDestaque.innerHTML = obras.slice(0, 6).map(criarCartaoObra).join("");
  }
  document.querySelector("#gradeCatalogoObras").innerHTML = `
    <div class="linha-comparacao-obras linha-cinco-obras">
      ${obras.slice(0, 5).map(criarCartaoObra).join("")}
    </div>
    <div class="linha-comparacao-obras linha-quatro-obras">
      ${obras.slice(5, 9).map(criarCartaoObra).join("")}
    </div>
  `;
  document.querySelector("#listaExposicoes").innerHTML = exposicoes.map(criarItemLista).join("");
  document.querySelector("#listaMidia").innerHTML = midia.map(criarItemLista).join("");
  document.querySelector("#listaPublicacoes").innerHTML = publicacoes.map(criarItemLista).join("");
  document.querySelector("#listaAulas").innerHTML = aulas.map(criarItemLista).join("");
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
    const linkArte = link.dataset.paginaDestino === "art" && paginasArte.includes(paginaSegura);
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
  imagensHero[imagemHeroAtual].classList.add("ativo");
  botoesHero[imagemHeroAtual]?.classList.add("ativo");
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
setInterval(avancarHero, 5200);
