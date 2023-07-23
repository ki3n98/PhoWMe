//NAV MENU
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-bar");

hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))
//NAV MENU END

//STICKY
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

window.onscroll = function() {stick()};
function stick() {
  if (window.scrollY >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
//STICKY END