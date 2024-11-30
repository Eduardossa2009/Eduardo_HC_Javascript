let alunos = [
    { nome: "Alice", nota: 89},
    { nome: "Bob", nota: 92},
    { nome: "Charlie", nota: 78},
    { nome: "Chris", nota: 50},
];

function calcularMediaNotas(alunosNotas) {
    let totalNotas = 0
    for(let position = 0; position < alunosNotas.length; position++) {
        
        totalNotas = alunosNotas[position].nota + totalNotas
    }
    return totalNotas / alunosNotas.length
}

function adicionaAluno (estudantes, aluno, nota) {
    estudantes.push({ nome: aluno, nota: nota })
}

adicionaAluno(alunos, "Kyle", 57)

let counter = 0
while (counter < alunos.length) {
    document.write(alunos[counter].nome + ' ' + alunos[counter].nota + "<br>");
    counter++;
}

document.write("A média da turma é de: ");
document.write(calcularMediaNotas(alunos).toString());