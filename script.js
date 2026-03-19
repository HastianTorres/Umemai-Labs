function toggleMenu(){

let menu = document.getElementById("sidebar")

if(menu.style.left === "0px"){

menu.style.left = "-220px"

}else{

menu.style.left = "0px"

}

}


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
