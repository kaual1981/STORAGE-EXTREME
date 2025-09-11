// Armazenar dados de usuário simuladamente (em localStorage)
function cadastrar(e) {
    e.preventDefault();
    const user = document.getElementById("cadUser").value;
    const pass = document.getElementById("cadPass").value;
    localStorage.setItem("usuario", user);
    localStorage.setItem("senha", pass);
    alert("Cadastro realizado!");
    window.location.href = "login.html";
    return false;
  }
  
  function login(e) {
    e.preventDefault();
    const user = document.getElementById("loginUser").value;
    const pass = document.getElementById("loginPass").value;
  
    const userSalvo = localStorage.getItem("usuario");
    const passSalvo = localStorage.getItem("senha");
  
    if (user === userSalvo && pass === passSalvo) {
      window.location.href = "index.html";
    } else {
      alert("Usuário ou senha incorretos!");
    }
    return false;
  }
  