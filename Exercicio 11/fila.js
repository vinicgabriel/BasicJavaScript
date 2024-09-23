let ListadeEspera = [];
let opcao = " ";

do {
  let pacientes = " ";
  for (let i = 0; i < ListadeEspera.length; i++) {
    pacientes += i + 1 + "° - " + ListadeEspera[i] + "\n";
  }
  opcao = prompt(
    "Pacientes:\n" +
      pacientes +
      "\nEscolha uma ação:\n1 - Novo paciente\n2 - Consultar paciente\n3 - Sair"
  );
  switch (opcao) {
    case "1":
      const novoPaciente = prompt("Insira o nome do novo paciente");
      ListadeEspera.push(novoPaciente);
      break;
    case "2":
      const atenderPaciente = ListadeEspera.shift();
      if (!atenderPaciente) {
        alert("Paciente não encontrado");
      } else {
        alert(atenderPaciente + " foi atendido");
      }
      break;
    case "3":
      alert("Encerrando...");
      break;
    default:
      alert("Nenhuma opção é correta");
      break;
  }
} while (opcao !== 3);
