const velocidade1 = prompt("Insira a velocidade do veículo 01");
const velocidade2 = prompt("Insira a velocidade do veículo 02");

const x = parseFloat(velocidade1);
const y = parseFloat(velocidade2);

if (x > y) {
  alert("O veiculo 01 é mais rápido");
} else if (x == y) {
  alert("Ambos tem a mesma velocidade");
} else {
  alert("Veiculo 02 é mais rápido");
}
