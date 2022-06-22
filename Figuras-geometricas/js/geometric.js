//Calcular área y perímetro de cuadrado

const perimSquare = (side) => side * 4;
const areaSquare = (side) => side * side;

function calculatePerimSquare() {
  let inputSide = document.getElementById("inputSide");
  let value = Number(inputSide.value);

  const result = `El perímetro de Cuadrado es: ${perimSquare(value)} cm`;
  document.getElementById("result").innerText = result;
}

function calculateAreaSquare() {
  let inputSide = document.getElementById("inputSide");
  let value = Number(inputSide.value);

  const result = `El perímetro de Cuadrado es: ${areaSquare(value)} cm`;
  document.getElementById("result").innerText = result;
}
