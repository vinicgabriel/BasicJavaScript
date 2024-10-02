let opcao = "";
const vagasDisponiveis = [];
const inscritos = [];

function criarVaga() {
  const nomeVaga = prompt("Coloque nome da vaga");
  const description = prompt("Adicione uma descrição: ");
  const limitDate = prompt("Adicione uma data limite: ");
  return {
    nome: nomeVaga,
    descricao: description,
    dataLimite: limitDate,
    inscritos: [], // Adiciona o array de inscritos dentro de cada vaga
  };
}

function exibirVaga() {
  let indiceVaga = prompt("Insira o índice da vaga"); // Captura o índice da vaga

  indiceVaga = parseInt(indiceVaga) - 1; // Ajusta o índice para começar de 1

  if (indiceVaga >= 0 && indiceVaga < vagasDisponiveis.length) {
    // Verifica se o índice é válido
    const vaga = vagasDisponiveis[indiceVaga]; // Captura os dados da vaga
    alert(
      "Nome: " +
        vaga.nome +
        "\n" +
        "Descrição: " +
        vaga.descricao +
        "\n" +
        "Data Limite: " +
        vaga.dataLimite +
        "\n" +
        "Inscritos: " +
        (vaga.inscritos.length > 0 ? vaga.inscritos.join(", ") : "Nenhum")
    );
  } else {
    alert("Índice inválido!"); // Caso o índice não exista
  }
}

function inscreverCandidato() {
  let nomeCandidato = prompt("Insira seu nome");
  let indiceVaga = prompt("Insira o índice da vaga");

  indiceVaga = parseInt(indiceVaga) - 1; // Ajuste o índice para começar de 1

  if (indiceVaga >= 0 && indiceVaga < vagasDisponiveis.length) {
    const vaga = vagasDisponiveis[indiceVaga]; // Captura os dados da vaga
    let confirmacao = confirm(
      "Você está se inscrevendo na seguinte vaga:\n" +
        "Nome: " +
        vaga.nome +
        "\n" +
        "Descrição: " +
        vaga.descricao +
        "\n" +
        "Data Limite: " +
        vaga.dataLimite +
        "\n\n" +
        "Deseja confirmar sua inscrição?"
    );

    // Se o candidato confirmar
    if (confirmacao) {
      vaga.inscritos.push(nomeCandidato); // Inscreve o candidato na vaga
      alert(
        "Candidato " +
          nomeCandidato +
          " inscrito com sucesso na vaga " +
          vaga.nome
      );
    }
  } else {
    alert("Índice de vaga inválido!"); // Caso o índice seja inválido
  }
}

do {
  opcao = prompt(
    "1 - Listar vagas Disponiveis\n" +
      "2 - Criar uma nova vaga\n" +
      "3 - Exibir uma vaga\n" + // Adicionando a opção de exibir uma vaga
      "4 - Inscrever Candidato\n" +
      "6 - Sair\n"
  );

  switch (opcao) {
    case "1":
      let vagas = ""; // Limpa as vagas a cada iteração
      if (vagasDisponiveis.length === 0) {
        alert("Nenhuma vaga disponível.");
      } else {
        for (let i = 0; i < vagasDisponiveis.length; i++) {
          // Exibe os detalhes de cada vaga
          vagas +=
            "Vaga " +
            (i + 1) +
            ":\n" +
            "Nome: " +
            vagasDisponiveis[i].nome +
            "\n" +
            "Descrição: " +
            vagasDisponiveis[i].descricao +
            "\n" +
            "Data Limite: " +
            vagasDisponiveis[i].dataLimite +
            "\n\n";
        }
        alert(vagas); // Mostra as vagas em um alerta
      }
      break;
    case "2":
      const novaVaga = criarVaga();
      vagasDisponiveis.push(novaVaga);
      break;
    case "3":
      exibirVaga(); // Chama a função diretamente
      break;
    case "4":
      inscreverCandidato(); // Chama a função diretamente
      break;
  }
} while (opcao !== "6");
