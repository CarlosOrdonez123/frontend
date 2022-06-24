const myModule = (() => {
  "use strict";
  let h = document.getElementById("result"),
    a = document.querySelector("#btnPerimSquare"),
    b = document.querySelector("#btnAreaSquare"),
    c = document.querySelector("#btnPerimTriangle"),
    d = document.querySelector("#btnAreaTriangle"),
    e = document.querySelector("#btnDiameCircle"),
    f = document.querySelector("#btnPerimCircle"),
    g = document.querySelector("#btnAreaCircle"),
    i = (a) => 4 * a,
    j = (a) => a * a,
    k = (a, b, c) => a + b + c,
    l = (a, b) => (a * b) / 2,
    m = (a) => 2 * a,
    n = (a) => 3.1416 * (2 * a),
    o = (a) => 3.1416 * Math.pow(a, 2);
  e.addEventListener("click", () => {
    let a = Number(document.getElementById("sideC").value),
      b = `El diametro del Circulo es: ${m(a)} cm`;
    h.innerText = b;
  }),
    f.addEventListener("click", () => {
      let a = Number(document.getElementById("sideC").value),
        b = `El per\xedmetro del Circulo es: ${n(a)} cm`;
      h.innerText = b;
    }),
    g.addEventListener("click", () => {
      let a = Number(document.getElementById("sideC").value),
        b = `El area del Circulo es: ${o(a)} cm2`;
      h.innerText = b;
    }),
    a.addEventListener("click", () => {
      let a = Number(document.getElementById("inputSide").value),
        b = `El per\xedmetro de Cuadrado es: ${i(a)} cm2`;
      h.innerText = b;
    }),
    b.addEventListener("click", () => {
      let a = Number(document.getElementById("inputSide").value),
        b = `El per\xedmetro de Cuadrado es: ${j(a)} cm`;
      h.innerText = b;
    }),
    c.addEventListener("click", () => {
      let a = Number(document.getElementById("side1").value),
        b = document.getElementById("side2"),
        c = Number(b.value),
        d = document.getElementById("side3"),
        e = Number(d.value),
        f = `El per\xedmetro del Triangulo es: ${k(a, c, e)} cm`;
      h.innerText = f;
    }),
    d.addEventListener("click", () => {
      let a = Number(document.getElementById("sideT1").value),
        b = document.getElementById("sideT2"),
        c = Number(b.value),
        d = `El \xe1rea del Triangulo es: ${l(a, c)} cm`;
      h.innerText = d;
    });
})();
