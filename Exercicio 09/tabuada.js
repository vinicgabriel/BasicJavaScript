let numero = parseFloat(prompt("Insira  um Número"));

let resultado = " ";
for (let indice = 1; indice <= 20; indice++) {
  resultado += "->" + numero + " * " + indice + " = " + numero * indice + "\n";
}

alert("Resultado da tabuade de " + numero + ":\n\n" + resultado);
