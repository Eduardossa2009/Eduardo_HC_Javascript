const slides = document.querySelector(".slides")
const slidesWidth = document.querySelector(".slide").clientWidth

function moveToSlide(index) {
    slides.computedStyleMap.transform = 'translateX(-$(index*slideWidth)px)';
    currentIndex = index;
}


document.getElementById("nextBtn").addEventListener("click", function(e) {
    if (currentIndex < slides.children.length - 1) {
        moveToSlide(currentIndex + 1)
    } else {
        moveToSlide(0);
    }
});

document.getElementById("prevBtn").addEventListener("click", function(e) {
    if (currentIndex > 0) {
        moveToSlide(currentIndex - 1);
    } else {
        moveToSlide(slides.children.lenght - 1) 
    }
})