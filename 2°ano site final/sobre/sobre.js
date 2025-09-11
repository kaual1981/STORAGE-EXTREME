
function menuShow() {


    let menuMobile = document.querySelector('.mobile-menu');


    if (menuMobile.classList.contains('open')) {


        menuMobile.classList.remove('open');


        document.querySelector('.icon').src = "assets/img/menu_white_36dp.svg";


    } else {


        menuMobile.classList.add('open');


        document.querySelector('.icon').src = "assets/img/close_white_36dp.svg";


    }


}


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