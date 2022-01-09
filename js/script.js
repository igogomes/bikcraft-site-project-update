//Ativação de link no menu quando a página for correspondente ao mesmo
const links = document.querySelectorAll(".header-menu a");

function ativarLink(link) {
    const url = location.href;
    const href = link.href;
    
    if(url.includes(href)) {
        link.classList.add("ativo");
    }
}

links.forEach(ativarLink);

//Ativar itens do orçamento
const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
    const elemento = document.getElementById(parametro);
    if(elemento) {
        elemento.checked = true;
    }
}

parametros.forEach(ativarProduto);

//Exibição / omissão de blocos de perguntas frequentes
const perguntas = document.querySelectorAll(".perguntas button");

function ativarPergunta(e) {
    const pergunta = e.currentTarget;
    const controls = pergunta.getAttribute('aria-controls'); 
    const resposta = document.getElementById(controls);
    resposta.classList.toggle("ativa");
   const ativa = resposta.classList.contains("ativa");
    pergunta.setAttribute('aria-expanded', ativa);
    console.log(resposta);
}

function eventosPerguntas(pergunta) {
    pergunta.addEventListener("click", ativarPergunta);
}

perguntas.forEach(eventosPerguntas);

//Galeria de imagens
const galeria = document.querySelectorAll(".bicicleta-imagens img");
const galeriaContainer = document.querySelector(".bicicleta-imagens");

function trocarImagem(e) {
    const img = e.currentTarget;
    const media = matchMedia("(min-width: 1000px)").matches;
    if(media) {
        galeriaContainer.prepend(img);
    }
}

function eventosGaleria(img) {
    img.addEventListener("click", trocarImagem);
}

galeria.forEach(eventosGaleria);

//Animação
if(window.SimpleAnime) {
    new SimpleAnime();
}