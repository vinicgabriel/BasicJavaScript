let selecione = " ";

do {
  selecione = prompt(
    "Selecione uma das opções abaixo:\n1 - Opção 1\n2 - Opção 2\n3 - Opção 3\n4 - Opção 4\n5 - Caso queira encerrar\n"
  );

  switch (selecione) {
    case "1":
      alert("A Opção 1 foi selecionada");
      break;
    case "2":
      alert("A Opção 2 foi selecionada");
      break;
    case "3":
      alert("A Opção 3 foi selecionada");
      break;
    case "4":
      alert("A Opção 4 foi selecionada");
      break;
    case "5":
      alert("Você encerrou");
      break;
    default:
      alert("Opção Inválida");
      break;
  }
} while (selecione !== "5");
