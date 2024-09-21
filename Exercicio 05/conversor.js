const metros = parseFloat(prompt("Coloque o valor em Metros: "));

const opcao = parseFloat(
  prompt(
    "Escolha uma das opções para utilizar o conversor\n1 - Milimetro (mm)\n" +
      "2 - centimetro (cm)\n" +
      "3 - Décimetro(dm) \n" +
      "4 - Decâmetro (dam\n" +
      "5 - Hectômetro(hm)\n" +
      "6 - quilômetro (km)\n"
  )
);

switch (opcao) {
  case 1:
    milimetros = metros * 1000;
    alert("O Valor convertido em milimetros é " + milimetros);
    break;
  case 2:
    centimetros = metros * 100;
    alert("O Valor convertido em Centimetro é " + centimetros);
    break;
  case 3:
    decimetro = metros * 10;
    alert("O Valor convertido em decimetro é " + decimetro);
    break;
  case 4:
    decametro = metros / 10;
    alert("O Valor convertido em decametro é " + decametro);
    break;
  case 5:
    hectometro = metros / 100;
    alert("O Valor convertido em hectometro é " + hectometro);
    break;
  case 6:
    km = metros / 1000;
    alert("O Valor convertido em Km é " + km);
    break;
  default:
    alert("Opção inválida");
}
