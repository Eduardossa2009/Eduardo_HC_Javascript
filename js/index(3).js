function rectArea() {
    let num1 = parseInt(prompt("Diga a altura:"));
    let num2 = parseInt(prompt("Diga a largura:"));

    let area = num1*num2;
    return area;
}

function circleArea() {
    let num1 = parseInt(prompt("Diga o raio:"));

    let area = num1*num1*Math.PI;
    return area;
}
    
function triangleArea() {
    console.log(rectArea()/2);
}
let figura; 
while ((figura = prompt("Escolha uma figura: (C-Círculo, R-Retângulo, T-Triângulo, Q-Sair)")) != "Q") {
    console.log(figura);
    if (figura == "C") {
        console.log(circleArea());
    } else if (figura == "R") {
        console.log(rectArea());
    } else if (figura == "T") {
        console.log(triangleArea());
    } else {
        console.log("Erro");
    }
}