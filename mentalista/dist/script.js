var numeroSecreto = parseInt(Math.random() * 11);
var tentativa = 0;

function Chutar() {
  var resultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);
  console.log(chute);
  if (chute == numeroSecreto) {
    resultado.innerHTML = "Yaaay acertou!!";
  } else if (chute < 0 || chute > 10) {
    resultado.innerHTML = "Você deve digitar um número de 0 a 10";
  } else if (chute < numeroSecreto) {
    resultado.innerHTML = "Digite um número maior";
  } else if (chute > numeroSecreto) {
    resultado.innerHTML = "Digite um número menor";
  }
}