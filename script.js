


document.getElementById("themeToggle")
.addEventListener("click",()=>{

document.body.classList.toggle("light")

})

function toggleMenu(){

const menu = document.getElementById("sidebar")
const overlay = document.getElementById("overlay")

menu.classList.toggle("open")
overlay.classList.toggle("active")

}
