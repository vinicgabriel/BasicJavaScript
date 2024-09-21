selecione = " ";
let saldo = parseFloat(prompt("Quantidade de saldo disponivel: "));

do {
  selecione = prompt(
    "Saldo: " +
      saldo +
      "\n 01 - Remover Dinheiro: \n" +
      "02 - Adicionar Dinheiro: \n03 - Sair"
  );

  switch (selecione) {
    case "1":
      saldo -= parseFloat(prompt("Qual a quantidade a ser Removida? "));
      break;
    case "2":
      saldo += parseFloat(prompt("Qual a quantidade a ser Removida? "));
      break;
    case "3":
      alert("Encerrando...");
      break;
    default:
      alert("Nenhuma opção é valida");
      break;
  }
} while (selecione !== "3");
