$(document).ready(function () {

  var name = localStorage.getItem("name-55d7").key;
  var email = localStorage.getItem("email-55d7").key;
  var mensagem = localStorage.getItem("message-55d7").key;

  if (name !== null) {
    $("#name-55d7").val(name);
  }
  if (email !== null) {
    $("#email-55d7").val(email);
  }
  if (mensagem !== null) {
    $("#message-55d7").val(mensagem);
  }
});

function salvar() {


  localStorage.setItem("nome", $("#name-55d7").val());
  localStorage.setItem("email", $("#email-55d7").val());
  localStorage.setItem("mensagem", $("#message-55d7").val());
}