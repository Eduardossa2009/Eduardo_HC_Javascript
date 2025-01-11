const tablebody = document.querySelector(".table")

setInterval(function () {
    tablebody.classList.add("moveLeft");
}, 1000);

const menu = document.querySelector(".menu");
const dropdown = document.querySelector(".dropdown-menu");
const square = document.querySelector(".square");

menu.addEventListener("mouseover", function (e) {
    dropdown.classList.add("open_menu");
    square.classList.add("open_menu");
});

menu.addEventListener("mouseout", event => {
    dropdown.classList.remove("open_menu");
    square.classList.remove("open_menu");
})