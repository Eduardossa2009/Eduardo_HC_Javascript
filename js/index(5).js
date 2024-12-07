let alunos = [
    { nome: "Alice", nota: 89 },
    { nome: "Bob", nota: 92 },
    { nome: "Charlie", nota: 78 },
    { nome: "Chris", nota: 50 }
];
 
function calculaMediaNotas() {
    let totalNotas = 0
    
    for (let position = 0; position < alunos.length; position++) {
        totalNotas = alunos[position].nota + totalNotas
    }
    
    return totalNotas / alunos.length
}
 
function updateTable(alunos) {
    const tbody = document.querySelector(".tableBody");
    const average = document.querySelector(".averageScore")
 
    while (tbody.firstChild) {
        tbody.removeChild(tbody.firstChild);
    }
 
    let tr;
    let tdName;
    let tdScore;
    for (let position = 0; position < alunos.length; position++) {
        tr = document.createElement("tr");
        tdName = document.createElement("td");
        tdScore = document.createElement("td");
        tdName.appendChild(document.createTextNode(alunos[position].nome));
        tdScore.appendChild(document.createTextNode(alunos[position].nota));
        tbody.appendChild(tr);
        tr.appendChild(tdName);
        tr.appendChild(tdScore);
    }
    average.textContent = calculaMediaNotas(alunos);
}
 
 
function adicionaAluno(aluno, nota) {
    alunos.push({ nome: aluno, nota: nota })
}
 
function removerAluno(nomeAluno) {
    let index = alunos.findIndex((aluno) => aluno.nome === nomeAluno)
    if (index !== -1) {
        alunos.splice(index, 1)
    }
}
 
removerAluno("Charlie");
adicionaAluno("Kyle", 57);
updateTable(alunos);
 
const addStudentButton = document.querySelector("#addStudentButton");
const studentName = document.querySelector("#newStudentName");
const studentScore = document.querySelector("#newStudentScore");

const removeStudentButton = document.querySelector("#removeStudentButton");
const removeStudentName = document.querySelector("#removeStudentName");

addStudentButton.addEventListener("click", function (event) {
    if (studentName.value !== "" && studentScore.value !== "") {
        adicionaAluno(studentName.value, Number(studentScore.value));
        updateTable(alunos);
    }
});

removeStudentButton.addEventListener("click", function (event) {
    if (removeStudentName.value !== "") {
        removerAluno(removeStudentName.value)
        updateTable(alunos);
    }
});