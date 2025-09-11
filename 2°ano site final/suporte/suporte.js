function menuShow() { // Define a função chamada menuShow, usada para abrir/fechar o menu mobile

    let menuMobile = document.querySelector('.mobile-menu'); // Pega o elemento com a classe .mobile-menu

    if (menuMobile.classList.contains('open')) { // Verifica se o menu tem a classe 'open' (ou seja, está visível)

        menuMobile.classList.remove('open'); // Se estiver aberto, remove a classe 'open' para esconder o menu

        document.querySelector('.icon').src = "assets/img/menu_white_36dp.svg"; // Troca o ícone para o ícone de "menu" (hambúrguer)

    } else { // Caso o menu não esteja aberto

        menuMobile.classList.add('open'); // Adiciona a classe 'open' para mostrar o menu

        document.querySelector('.icon').src = "assets/img/close_white_36dp.svg"; // Troca o ícone para o ícone de "fechar" (X)

    }
}


document.addEventListener("DOMContentLoaded", () => { // Espera o carregamento completo do HTML antes de executar o código
    const perguntas = document.querySelectorAll(".accordion-item"); // Seleciona todos os elementos com a classe .accordion-item e guarda em uma lista

    perguntas.forEach((pergunta, index) => { // Percorre cada elemento da lista com seu respectivo índice
        setTimeout(() => { 
            pergunta.classList.add("mostrar"); // Adiciona a classe 'mostrar' a cada item com um pequeno atraso
        }, index * 170); // O atraso é multiplicado pelo índice (170ms entre cada item) criando um efeito de "aparecer em sequência"
    });
});


const button = document.getElementById('toggle-theme'); // Pega o botão com o ID 'toggle-theme'
const body = document.body; // Pega o elemento <body> da página

button.addEventListener('click', () => { // Adiciona um ouvinte de evento de clique no botão
  body.classList.toggle('dark-theme'); // Ao clicar, alterna (adiciona ou remove) a classe 'dark-theme' no body
});


//Selecionar o Menu
var menuItem = document.querySelectorAll('.item-menu')

function selectlink(){
    menuItem.forEach((item)=>
        item.classList.remove('ativo')
    )
    this.classList.add('ativo')
}

menuItem.forEach((item)=>
    item.addEventListener('click', selectlink)



)

//Expandir Menu

var btnExp = document.querySelector('#btn-exp')
var menusite = document.querySelector('.menu-lateral')


btnExp.addEventListener('click', function(){
    menusite.classList.toggle('expandir')
    
    
})

document.querySelector('.submenu-toggle-mesa').addEventListener('click', function (e) {
    // Impede que o clique no ícone "123" acione o redirecionamento do <a>
    e.preventDefault();
    e.stopPropagation();

    const submenu = document.querySelector(".submenu-mesa");

    if (submenu.classList.contains("open")) {
        submenu.style.maxHeight = submenu.scrollHeight + "px";
        submenu.offsetHeight;
        submenu.style.maxHeight = "0";
        submenu.classList.remove("open");
    } else {
        submenu.style.maxHeight = submenu.scrollHeight + "px";
        submenu.classList.add("open");

        submenu.addEventListener("transitionend", function tidy(e) {
            if (e.propertyName === "max-height" && submenu.classList.contains("open")) {
                submenu.style.maxHeight = "none";
                submenu.removeEventListener("transitionend", tidy);
            }
        });
    }
});

document.querySelector('.submenu-toggle-tcc').addEventListener('click', function (e) {
  // Impede redirecionamento
  e.preventDefault();
  e.stopPropagation();

  const submenu = document.querySelector(".submenu-tcc");

  if (submenu.classList.contains("open")) {
    submenu.style.maxHeight = submenu.scrollHeight + "px"; // Força cálculo
    submenu.offsetHeight; // Força reflow
    submenu.style.maxHeight = "0";
    submenu.classList.remove("open");
  } else {
    submenu.style.maxHeight = submenu.scrollHeight + "px";
    submenu.classList.add("open");

    submenu.addEventListener("transitionend", function tidy(ev) {
      if (ev.propertyName === "max-height" && submenu.classList.contains("open")) {
        submenu.style.maxHeight = "none";
        submenu.removeEventListener("transitionend", tidy);
      }
    });
  }
});


 function toggleDarkMode() {
    const isDark = document.body.classList.toggle('dark-mode');

    // Salvar tema no localStorage
    localStorage.setItem('theme', isDark ? 'dark' : 'light');

    // Atualizar ícone
    const icon = document.getElementById('theme-icon');
    icon.className = isDark ? 'bi bi-sun-fill' : 'bi bi-moon-fill';
  }

  // Aplicar tema salvo ao carregar a página
  window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    const icon = document.getElementById('theme-icon');

    if (savedTheme === 'dark') {
      document.body.classList.add('dark-mode');
      icon.className = 'bi bi-sun-fill';
    } else {
      icon.className = 'bi bi-moon-fill';
    }
  });
  
  document.addEventListener("DOMContentLoaded", () => { // Espera o carregamento completo do HTML antes de executar o código
    const perguntas = document.querySelectorAll(".accordion-item"); // Seleciona todos os elementos com a classe .accordion-item e guarda em uma lista

    perguntas.forEach((pergunta, index) => { // Percorre cada elemento da lista com seu respectivo índice
        setTimeout(() => { 
            pergunta.classList.add("mostrar"); // Adiciona a classe 'mostrar' a cada item com um pequeno atraso
        }, index * 170); // O atraso é multiplicado pelo índice (170ms entre cada item) criando um efeito de "aparecer em sequência"
    });
});