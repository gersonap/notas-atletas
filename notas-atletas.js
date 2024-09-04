/*
Projeto de certificação 1 - Pontuação dos atletas
-------------------------------------------------
Curso de Lógica de Programação
DEVStart SENAI-Londrina/Brazil
Aluno: Gerson Pereira
*/
// Matriz de Objetos

let atletas = [
  {
    nome: "Cesar Abascal",
    notas: [10, 9.34, 8.42, 10, 7.88]
  },
  {
    nome: "Fernando Puntel",
    notas:  [8, 10, 10, 7, 9.33]
  },
  {
    nome: "Daiane Jelinsky",
    notas: [7, 10, 9.5, 9.5, 8]
  },
  {
    nome: "Bruno Castro",
    notas: [10, 10, 10, 9, 9.5]
  }
];


// Exibindo dados dos atletas
atletas.forEach(function(atleta){
console.log("\n");
console.log("Atleta: ", atleta.nome + "\nNotas Obtidas: " + atleta.notas);
mediaDasNotas(atleta.notas);
});

function mediaDasNotas(notas) {
  // Ordena 
  const notasParcias = notas.sort((a, b) => a - b);
  //console.log(notasParcias);

  // Novo Array sem as extremidades
  notas.shift();
  notas.pop();
  
  // Soma das notas
  const somaDasNotas = (notas.reduce((acc, nota) => acc + nota,0));
  
  // Média
  const media = somaDasNotas/3;

  console.log(`Média: ${media.toFixed(2)}`);
}

 


