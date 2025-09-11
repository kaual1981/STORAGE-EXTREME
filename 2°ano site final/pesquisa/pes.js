
    function buscarTCC() {
      const input = document.getElementById('searchInput');
      const filtro = input.value.toLowerCase();
      const lista = document.getElementById('listaTCCs');
      const itens = lista.getElementsByTagName('li');

      for (let i = 0; i < itens.length; i++) {
        const texto = itens[i].textContent || itens[i].innerText;
        if (texto.toLowerCase().indexOf(filtro) > -1) {
          itens[i].style.display = "";
        }
         else {
          itens[i].style.display = "none";
        }
      }
    }

     document.getElementById("searchInput").addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        buscarTCC();
      }
    });