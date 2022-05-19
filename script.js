const dino = document.getElementById("dino")
const cactus = document.getElementById("cactus")

document.addEventListener("keydown", function(event){
    jump();
})

function jump(){
    if(dino.classList != "jump"){
        dino.classList.add("jump");
        setTimeout(() => dino.classList.remove("jump"), 500)
    }
}

let isAlive = setInterval(function(){
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

    if ((cactusLeft < 45 && cactusLeft > 0 && dinoTop >= 140) ||
    (cactusLeft < 25 && cactusLeft > 0 && dinoTop >= 110)||
    (cactusLeft < 15 && cactusLeft > 0 && dinoTop >= 130)||
    (cactusLeft < 10 && cactusLeft > 0 && dinoTop >= 150)){
        alert("Game over!")
    }
}, 10)