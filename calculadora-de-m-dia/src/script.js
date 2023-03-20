document.getElementById("bnt").onclick = function (e) {
  var valorNotaDoPrimeiroBimestre = parseFloat(document.getElementById ("nota1").value);
  var valorNotaDoSegundoBimestre = parseFloat(document.getElementById ("nota2").value);
  var valorNotaDoTerceiroBimestre = parseFloat(document.getElementById ("nota3").value);
  var valorNotaDoQuartoBimestre = parseFloat(document.getElementById ("nota4").value);
  
  var notaFinal = ((valorNotaDoPrimeiroBimestre + valorNotaDoSegundoBimestre + valorNotaDoTerceiroBimestre + valorNotaDoQuartoBimestre) / 4).toFixed(1);
  
  let resultado;
  
  if (notaFinal >=7){
      resultado = "Aprovado";
    }
 
  else{
    resultado = "Reprovado"
    }
  
  document.getElementById("resultado").innerHTML = `Nota final deu <em>${notaFinal} </em> - <em>${resultado}</em>`
 }
 
