const myModule = (() => {
  "use strict";
  const valueResult = document.getElementById("result");
  //Calcular área y perímetro de cuadrado

  const btnPerimSquare = document.querySelector("#btnPerimSquare"),
    btnAreaSquare = document.querySelector("#btnAreaSquare"),
    btnPerimTriangle = document.querySelector("#btnPerimTriangle"),
    btnAreaTriangle = document.querySelector("#btnAreaTriangle"),
    btnDiameCircle = document.querySelector("#btnDiameCircle"),
    btnPerimCircle = document.querySelector("#btnPerimCircle"),
    btnAreaCircle = document.querySelector("#btnAreaCircle");

  const perimSquare = (side) => side * 4;
  const areaSquare = (side) => side * side;
  const triangleSquare = (side1, side2, side3) => side1 + side2 + side3;
  const areaTriangle = (side1, side2) => (side1 * side2) / 2;
  const diametroCircle = (side) => side * 2;
  const perimCircle = (side) => 3.1416 * (side * 2);
  const areaCircle = (side) => 3.1416 * Math.pow(side, 2);

  btnDiameCircle.addEventListener("click", () => {
    let inputSide = document.getElementById("sideC");
    let value = Number(inputSide.value);

    const result = `El diametro del Circulo es: ${diametroCircle(value)} cm`;
    valueResult.innerText = result;
  });

  btnPerimCircle.addEventListener("click", () => {
    let inputSide = document.getElementById("sideC");
    let value = Number(inputSide.value);

    const result = `El perímetro del Circulo es: ${perimCircle(value)} cm`;
    valueResult.innerText = result;
  });

  btnAreaCircle.addEventListener("click", () => {
    let inputSide = document.getElementById("sideC");
    let value = Number(inputSide.value);

    const result = `El area del Circulo es: ${areaCircle(value)} cm2`;
    valueResult.innerText = result;
  });

  btnPerimSquare.addEventListener("click", () => {
    let inputSide = document.getElementById("inputSide");
    let value = Number(inputSide.value);

    const result = `El perímetro de Cuadrado es: ${perimSquare(value)} cm2`;
    valueResult.innerText = result;
  });

  btnAreaSquare.addEventListener("click", () => {
    let inputSide = document.getElementById("inputSide");
    let value = Number(inputSide.value);

    const result = `El perímetro de Cuadrado es: ${areaSquare(value)} cm`;
    valueResult.innerText = result;
  });

  btnPerimTriangle.addEventListener("click", () => {
    let inputSide1 = document.getElementById("side1");
    let value1 = Number(inputSide1.value);
    let inputSide2 = document.getElementById("side2");
    let value2 = Number(inputSide2.value);
    let inputSide3 = document.getElementById("side3");
    let value3 = Number(inputSide3.value);
    const result = `El perímetro del Triangulo es: ${triangleSquare(
      value1,
      value2,
      value3
    )} cm`;

    valueResult.innerText = result;
  });

  btnAreaTriangle.addEventListener("click", () => {
    let inputSide1 = document.getElementById("sideT1");
    let value1 = Number(inputSide1.value);
    let inputSide2 = document.getElementById("sideT2");
    let value2 = Number(inputSide2.value);
    const result = `El área del Triangulo es: ${areaTriangle(
      value1,
      value2
    )} cm`;

    valueResult.innerText = result;
  });

  /*return {
    cpq: calculatePerimSquare,
    caq: calculateAreaSquare,
  };*/
})();
