const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-bar");

hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    amburger.classList.remove("active");
    navMenu.classList.remove("active");
}))