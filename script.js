// ======================
// DADOS DO SITE
// ======================

const diagnostico = [

{
icone:"🌱",
titulo:"Produção Local",
descricao:"Fornece alimentos frescos próximos ao consumidor."
},

{
icone:"💧",
titulo:"Gestão da Água",
descricao:"Uso eficiente dos recursos hídricos."
},

{
icone:"🚜",
titulo:"Tecnologia Rural",
descricao:"Modernização da produção agrícola."
},

{
icone:"👨‍🌾",
titulo:"Mão de Obra Familiar",
descricao:"Base produtiva da agricultura familiar."
}

];

const solucoes = [

{
icone:"♻️",
titulo:"Agroecologia",
descricao:"Produção com equilíbrio ambiental."
},

{
icone:"💦",
titulo:"Irrigação Inteligente",
descricao:"Redução do desperdício de água."
},

{
icone:"🤝",
titulo:"Cooperativas",
descricao:"Fortalecimento dos produtores."
},

{
icone:"📚",
titulo:"Educação Rural",
descricao:"Capacitação para inovação sustentável."
}

];

const indicadores = [

{
numero:77,
titulo:"Produção Familiar",
texto:"Participação da agricultura familiar."
},

{
numero:5,
titulo:"Milhões de Propriedades",
texto:"Espalhadas pelo Brasil."
},

{
numero:10,
titulo:"Milhões de Empregos",
texto:"Gerados pelo setor."
}

];

// ======================
// RENDERIZAÇÃO
// ======================

function renderCards(data, containerId){

const container =
document.getElementById(containerId);

container.innerHTML = data.map(item => `

<div class="card reveal">

<h3>
${item.icone || ""}
${item.titulo}
</h3>

<p>
${item.descricao || item.texto}
</p>

${item.numero ?

`<div class="stat-number"
data-target="${item.numero}">
0
</div>`

: ""}

</div>

`).join("");

}

renderCards(
diagnostico,
"diagnosticCards"
);

renderCards(
solucoes,
"solutionsGrid"
);

renderCards(
indicadores,
"statsGrid"
);

// ======================
// CONTADORES
// ======================

function animateCounter(el){

const target =
parseInt(el.dataset.target);

let current = 0;

const increment =
Math.ceil(target / 50);

const timer = setInterval(()=>{

current += increment;

if(current >= target){

current = target;
clearInterval(timer);

}

el.textContent = current;

},30);

}

document
.querySelectorAll(".stat-number")
.forEach(counter=>{

animateCounter(counter);

});

// ======================
// QUIZ
// ======================

const perguntas = [

{
pergunta:
"Qual prática reduz impactos ambientais?",

respostas:[
"Queimadas",
"Agroecologia",
"Desmatamento"
],

correta:1
},

{
pergunta:
"A agricultura familiar contribui para:",

respostas:[
"Produção local",
"Poluição",
"Desperdício"
],

correta:0
},

{
pergunta:
"Qual recurso deve ser usado com eficiência?",

respostas:[
"Água",
"Plástico",
"Poluição"
],

correta:0
},

{
pergunta:
"Qual ação fortalece produtores?",

respostas:[
"Cooperativas",
"Desmatamento",
"Queimadas"
],

correta:0
}

];

let atual = 0;
let score = 0;

const question =
document.getElementById("question");

const answers =
document.getElementById("answers");

const feedback =
document.getElementById("feedback");

const scoreDisplay =
document.getElementById("scoreDisplay");

const progress =
document.getElementById("progress");

function atualizarBarra(){

const porcentagem =
((atual + 1) / perguntas.length) * 100;

progress.style.width =
porcentagem + "%";

}

function carregarPergunta(){

question.textContent =
perguntas[atual].pergunta;

answers.innerHTML = "";

perguntas[atual].respostas
.forEach((resposta,i)=>{

const btn =
document.createElement("button");

btn.textContent = resposta;

btn.addEventListener("click",()=>{

if(i === perguntas[atual].correta){

feedback.innerHTML =
"✅ Resposta correta!";

score++;

scoreDisplay.textContent =
`Pontuação: ${score}`;

}else{

feedback.innerHTML =
"❌ Resposta incorreta.";

}

});

answers.appendChild(btn);

});

atualizarBarra();

}

carregarPergunta();

document
.getElementById("nextQuestion")
.addEventListener("click",()=>{

atual++;

feedback.textContent = "";

if(atual >= perguntas.length){

question.innerHTML =
"Quiz Finalizado!";

answers.innerHTML = "";

document
.getElementById("nextQuestion")
.style.display = "none";

if(score >= 3){

document
.getElementById(
"certificateSection"
)
.classList.remove("hidden");

}

return;

}

carregarPergunta();

});

// ======================
// TABS
// ======================

const tabData = {

social:
"Fortalece comunidades rurais.",

economico:
"Gera renda e empregos.",

ambiental:
"Preserva recursos naturais.",

cultural:
"Valoriza saberes tradicionais.",

tecnologico:
"Estimula inovação sustentável."

};

const tabContent =
document.getElementById("tabContent");

tabContent.textContent =
tabData.social;

document
.querySelectorAll(".tab-btn")
.forEach(btn=>{

btn.addEventListener("click",()=>{

document
.querySelectorAll(".tab-btn")
.forEach(b=>{

b.classList.remove("active");

});

btn.classList.add("active");

tabContent.textContent =
tabData[btn.dataset.tab];

});

});

// ======================
// CARROSSEL
// ======================

const slides = [

{
img:"familia.png",
titulo:"Produção Familiar",
desc:"Alimentos produzidos por famílias rurais."
},

{
img:"agro.png",
titulo:"Agroecologia",
desc:"Integração entre produção e natureza."
},

{
img:"sol.png",
titulo:"Sustentabilidade",
desc:"Preservação ambiental e produtividade."
}

];

let slideAtual = 0;

function mostrarSlide(){

carouselImage.src =
slides[slideAtual].img;

carouselTitle.textContent =
slides[slideAtual].titulo;

carouselDescription.textContent =
slides[slideAtual].desc;

renderDots();

}

function renderDots(){

dots.innerHTML = "";

slides.forEach((_,i)=>{

const dot =
document.createElement("span");

dot.className =
`dot ${
i===slideAtual
? "active"
: ""
}`;

dot.onclick = ()=>{

slideAtual = i;
mostrarSlide();

};

dots.appendChild(dot);

});

}

next.onclick = ()=>{

slideAtual =
(slideAtual + 1)
% slides.length;

mostrarSlide();

};

prev.onclick = ()=>{

slideAtual =
(slideAtual - 1 + slides.length)
% slides.length;

mostrarSlide();

};

setInterval(()=>{

slideAtual =
(slideAtual + 1)
% slides.length;

mostrarSlide();

},5000);

mostrarSlide();

// ======================
// FAQ
// ======================

const faq = [

{
q:"O que é agricultura familiar?",
a:"Produção realizada principalmente pela família."
},

{
q:"O que é agricultura sustentável?",
a:"Produção que respeita o meio ambiente."
},

{
q:"Por que é importante?",
a:"Garante alimentos e preserva recursos."
}

];

const faqContainer =
document.getElementById("faqContainer");

faq.forEach(item=>{

const div =
document.createElement("div");

div.className = "faq-item";

div.innerHTML = `

<button class="faq-question">
${item.q}
</button>

<div class="faq-answer">
<p>${item.a}</p>
</div>

`;

faqContainer.appendChild(div);

});

document
.querySelectorAll(".faq-question")
.forEach(btn=>{

btn.addEventListener("click",()=>{

document
.querySelectorAll(".faq-answer")
.forEach(a=>{

if(a !== btn.nextElementSibling){

a.style.maxHeight = null;

}

});

const answer =
btn.nextElementSibling;

answer.style.maxHeight =
answer.style.maxHeight
? null
: answer.scrollHeight + "px";

});

});

// ======================
// PESQUISA
// ======================

const searchInput =
document.getElementById("searchInput");

searchInput.addEventListener("input",()=>{

const termo =
searchInput.value.toLowerCase();

document
.querySelectorAll(".card")
.forEach(card=>{

card.style.display =
card.textContent
.toLowerCase()
.includes(termo)
? "block"
: "none";

});

});

// ======================
// ACESSIBILIDADE
// ======================

let fontSize =
localStorage.getItem("fontSize")
|| 16;

document.documentElement.style.fontSize =
fontSize + "px";

increaseFont.onclick = ()=>{

fontSize++;

document.documentElement.style.fontSize =
fontSize + "px";

localStorage.setItem(
"fontSize",
fontSize
);

};

decreaseFont.onclick = ()=>{

fontSize--;

document.documentElement.style.fontSize =
fontSize + "px";

localStorage.setItem(
"fontSize",
fontSize
);

};

contrastBtn.onclick = ()=>{

document.body.classList.toggle(
"high-contrast"
);

};

// ======================
// DARK MODE
// ======================

const themeBtn =
document.getElementById("themeBtn");

if(localStorage.getItem("theme")
=== "dark"){

document.body.classList.add(
"dark-mode"
);

}

themeBtn.onclick = ()=>{

document.body.classList.toggle(
"dark-mode"
);

localStorage.setItem(
"theme",
document.body.classList.contains(
"dark-mode"
)
? "dark"
: "light"
);

};

// ======================
// BOTÃO TOPO
// ======================

const topBtn =
document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

topBtn.style.display =
window.scrollY > 300
? "block"
: "none";

});

topBtn.onclick = ()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

// ======================
// SCROLL REVEAL
// ======================

const observer =
new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add(
"active"
);

}

});

});

document
.querySelectorAll(".reveal")
.forEach(el=>{

observer.observe(el);

});