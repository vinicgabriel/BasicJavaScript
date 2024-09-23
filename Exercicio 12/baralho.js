let baralho = [];
let opcao = "";

do {
  opcao = prompt(
    "Cartas no baralho: " +
      baralho.length +
      "\n 1 - Adicionar carta\n" +
      "2 - Remover carta\n" +
      "3 - Sair"
  );
  switch (opcao) {
    case "1":
      const novaCarta = prompt("Qual nome da nova carta?");
      baralho.push(novaCarta);
      break;
    case "2":
      const cartaPuxada = baralho.pop();
      if (!baralho) {
        alert("Não há nenhuma carta no baralho");
      } else {
        alert("A sua carta é: " + cartaPuxada);
      }
      break;
    case "3":
      alert("Encerrando...");
      break;
    default:
      alert("Insira uma opção válida");
      break;
  }
} while (opcao !== "3");
