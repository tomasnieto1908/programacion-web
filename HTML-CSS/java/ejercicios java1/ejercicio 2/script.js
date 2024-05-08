function num1() {
  const num1 = document.getElementById("num1");
  console.log(num1.value);
  return num1.value;
}

function num2() {
  const num2 = document.getElementById("num2");
  console.log(num2.value);
  return num2.value;
}

function calcular() {
  const resultado = parseInt(num1()) + parseInt(num2());
  console.log(resultado);
  document.getElementById("resultado").textContent = resultado;
}
