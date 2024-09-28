document.write("Pontos: ");

let pontos = 10
document.write(pontos);
if (pontos >= 1) {
    pontos = pontos + 20;
} else if (pontos !== 50) {
    pontos = pontos - 50;
} else if (pontos <= 30) {
    pontos = 0;
} else {
    pontos = "Batatas";
}

if (pontos != 25) {
    console.log("Ganhaste");
}

console.log(pontos)