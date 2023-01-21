const player = document.getElementById("player")

// document.addEventListener("keypress", function () {
//     player.classList.add("playerJump");
// })

document.body.onkeyup = function (e) {

    console.log('====================================');
    console.log(e.key, e.code);
    console.log('====================================');

    if (e.key == " " || e.code == "Space" || e.keyCode == 32) {
        player.classList.add("playerJump");
    }
    
    if (e.key == "ArrowUp" || e.code == "ArrowUp" || e.keyCode == 38) {
        player.classList.add("playerJump");
    }
 }

player.addEventListener("animationend", () => { 
    player.classList.remove("playerJump");
})
