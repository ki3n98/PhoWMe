/*----------Carosel----------*/
var currentSlide = 1; 

showSlide(0); 

function showSlide(currentSlide) {
    var slides = $(".slides"); 

    slides[currentSlide].style.display = "block";  
    
}

