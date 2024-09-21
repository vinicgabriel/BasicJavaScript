const primeironome = prompt("Informe o primeiro nome: ");
const sobrenome = prompt("Informe o sobrenome do recruta: ");
const campoDoEstudo = prompt("Qual o campo de estudo do recruta?: ");
const anoDeNascimento = prompt("Qual é o ano de nascimento do recruta? ");

alert(
  "Recruta cadastrado com sucesso!\n" +
    "\nNome completo: " +
    primeironome +
    " " +
    sobrenome +
    "\nCampo de estudo: " +
    campoDoEstudo +
    " \n" +
    "Idade: " +
    (2022 - anoDeNascimento)
);
