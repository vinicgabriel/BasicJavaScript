function areaDoTriangulo(baseT, alturaT) {
  let areaT = (baseT * alturaT) / 2; // Calcula a área
  return alert("Area do Triangulo é " + areaT); // Retorna o valor calculado
}

function areaDoRetangulo(baseR, alturaR) {
  let areaR = baseR * alturaR;
  return alert("Area do Retangulo é " + areaR);
}

function areaDoQuadrado(lado) {
  let areaQ = lado * lado;
  return alert("Area do quadrado é " + areaQ);
}

function areaDoTrapezio(baseM, baseMenor, alturaT) {
  let areaTrapezio = ((baseM + baseMenor) * alturaT) / 2;
  return alert("Area do Trapezio é " + areaTrapezio);
}

function areaCirculo(raio) {
  let areaCirculo1 = 3.14 * Math.pow(raio, 2);
  return alert("Area do Circulo é " + areaCirculo1);
}

let opcao = "";

do {
  opcao = prompt(
    "Calculadora Geometrica\n" +
      "1 - Area do Triangulo\n" +
      "2 - Calcular Area do Retangulo\n" +
      "3 - Calcular Area do Quadrado\n" +
      "4 - Calcular Area do Trapezio\n" +
      "5 - Calcular Area do circulo\n" +
      "6 - Sair"
  );

  switch (opcao) {
    case "1":
      let baseAt = parseFloat(prompt("Insira o valor da Base do Triangulo"));
      let alturaAt = parseFloat(
        prompt("Insira o valor da Altura do Triangulo")
      );
      areaDoTriangulo(baseAt, alturaAt);

      break;
    case "2":
      let baseRetangulo = parseFloat(
        prompt("Insira o valor da Base do Triangulo")
      );
      let alturaRetangulo = parseFloat(
        prompt("Insira o valor da Altura do Triangulo")
      );
      areaDoRetangulo(baseRetangulo, alturaRetangulo);
      break;
    case "3":
      let basedoQuadrado = parseFloat(
        prompt("Insira o valor da Base do Triangulo")
      );

      areaDoQuadrado(basedoQuadrado);
      break;
    case "4":
      let bMaior = parseFloat(prompt("Insira a base maior do Trapezio: "));
      let bMenor = parseFloat(prompt("Insira a base menor do Trapezio: "));
      let alturaTrapezio = parseFloat(prompt("Insira a altura do Trapezio: "));
      areaDoTrapezio(bMaior, bMenor, alturaTrapezio);
      break;
    case "5":
      let raioC = parseFloat(prompt("Insira o valor do raio do Circulo:  "));
      areaCirculo(raioC);
      break;
    case "6":
      alert("Encerrando");
      break;
    default:
      alert("Insira uma opção válida");
      break;
  }
} while (opcao !== "6");
