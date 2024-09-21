const nome = prompt("Insira seu nome: ");
let viagens = prompt("Já visitou alguma cidade? sim/não");

let cidades = " ";
let visitadas = 0;

while (viagens === "sim") {
  let qCidade = prompt("Qual nome da cidade visitada? ");
  cidades += " - " + qCidade + "\n";
  visitadas++;
  viagens = prompt("Visitou alguma outra cidade? sim/não");

  if (viagens == "não") {
    break;
  }
}

alert(
  "nome: " +
    nome +
    "\n Cidades visitadas: \n" +
    cidades +
    "\nQuantidade de cidades visitadas: " +
    visitadas
);
