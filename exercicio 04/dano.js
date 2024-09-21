const personagem1 = prompt("Insira o nome do seu personagem");
const atk1 = parseFloat(prompt("Insira o poder de ataque dele ")); // Convertendo para número

const personagem2 = prompt("Insira o nome do seu segundo personagem");
const life = parseFloat(prompt("Insira a vida máxima do seu personagem ")); // Convertendo para número
const defesa = parseFloat(prompt("Insira a defesa máxima do seu personagem ")); // Convertendo para número
let escudo = window.confirm(
  "Se o seu personagem tiver um escudo: CLIQUE EM OK "
);

let danoCausado = 0; // Inicializando a variável

if (atk1 > defesa && escudo == false) {
  danoCausado = atk1 - defesa;
} else if (atk1 > defesa && escudo == true) {
  danoCausado = (atk1 - defesa) / 2;
} else if (atk1 <= defesa) {
  danoCausado = 0;
}

const vidaRestante = life - danoCausado; // Calculando a vida restante corretamente

alert(
  personagem1 +
    "\nPoder de ataque: " +
    atk1 +
    "\nPersonagem 2: " +
    personagem2 +
    "\nVida restante: " +
    vidaRestante +
    "\nDano sofrido: " +
    danoCausado
);
