function toggleMenu(){

const menu = document.getElementById("sidebar")
const overlay = document.getElementById("overlay")

menu.classList.toggle("open")
overlay.classList.toggle("active")

}


// MODO CLARO

const themeButton = document.getElementById("themeToggle")

themeButton.addEventListener("click", function(){

document.body.classList.toggle("light")

})
