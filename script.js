
const player = document.getElementById("player")

// document.addEventListener("keypress", function () {
//     player.classList.add("playerJump");
// })


document.body.onkeyup = function (e) {

    if (e.key == " " || e.code == "Space" || e.keyCode == 32) {
         player.classList.add("playerJump");

     }
 }

player.addEventListener("animationend", () => { 
    player.classList.remove("playerJump");
})

