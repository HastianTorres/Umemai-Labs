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