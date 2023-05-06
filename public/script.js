function logar() {
  var login = document.getElementById("login").value;
  var senha = document.getElementById("senha").value;

  if (login == "admin" && senha == "admin") {
    alert("Login realizado com sucesso");
  } else {
    alert("Login está incorreto, verifique a usuário e senha");
  }
}
