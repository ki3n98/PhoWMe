/*----------Carosel----------*/

const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
    button.addEventListener("click", ()=>{
        const offset = button.dataset.carouselButton ==="next"? 1:-1; 
        moveSlide(offset); 
        clearInterval(interval); 
    })
})

const interval = setInterval(autoSlider, 4000);

function moveSlide(offset) {
    const slides = document.querySelector(".carousel-slides"); 

    const activeSlide = slides.querySelector("[data-active]"); 
    let newIndex = [...slides.children].indexOf(activeSlide) + offset; 

    if (newIndex < 0)
        newIndex = slides.children.length - 1; 
    if (newIndex >= slides.children.length)
        newIndex = 0; 

    slides.children[newIndex].dataset.active = true; 
    delete activeSlide.dataset.active; 

}

function autoSlider() {
    const offset = 1
    moveSlide(1); 
}