function Dolar() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorDolar = parseFloat(valor);

  var valorReal = valorDolar * 5.08;
  console.log(valorReal);

  var valorConvertidoFinal = document.getElementById("valorConvertido");
  var valorConvertido = "O valor em real é R$" + valorReal;
  valorConvertidoFinal.innerHTML = valorConvertido;
}

function Euro() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEuro = parseFloat(valor);

  var valorReal = valorEuro * 5.54;
  console.log(valorReal);

  var valorConvertidoFinal = document.getElementById("valorConvertido");
  var valorConvertido = "O valor em real é R$" + valorReal;
  valorConvertidoFinal.innerHTML = valorConvertido;
}

function Libra() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorLibra = parseFloat(valor);

  var valorReal = valorLibra * 6.62;
  console.log(valorReal);

  var valorConvertidoFinal = document.getElementById("valorConvertido");
  var valorConvertido = "O valor em real é R$" + valorReal;
  valorConvertidoFinal.innerHTML = valorConvertido;
}

function Yen() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorYen = parseFloat(valor);

  var valorReal = valorYen * 0.04;
  console.log(valorReal);

  var valorConvertidoFinal = document.getElementById("valorConvertido");
  var valorConvertido = "O valor em real é R$" + valorReal;
  valorConvertidoFinal.innerHTML = valorConvertido;
}