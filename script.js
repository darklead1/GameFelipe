const player = document.getElementById("player")
const tvRetro = document.getElementById("tvRetro")
const land = document.getElementById("land")
const alien = document.getElementById("alien")
const dino = document.getElementById ("dino")
let score = document.getElementById("score")
let scoreCount = 0;

const counterInterval = setInterval(() => { 
    scoreCount++;
    score.innerText = scoreCount;
}, 1000)

function loadGame() {
    
}





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





let isAlive = setInterval(function () {

    //get player y position
    let playerTop = parseInt(window.getComputedStyle(player).getPropertyValue("bottom"));

    //get obstacle x position
    let obstacleOne = parseInt(window.getComputedStyle(tvRetro).getPropertyValue("left"));
    let obstacleTwo = parseInt(window.getComputedStyle(alien).getPropertyValue("left"));
    let obstacleThree = parseInt(window.getComputedStyle(dino).getPropertyValue("left"));
    //detect colition

    if (obstacleOne < 200 && obstacleOne > 0 && playerTop < obstacleOne) {
        console.log("chocasteee")

    
        
        land.classList.remove("landMove");
        player.classList.remove("player_running");
        tvRetro.classList.remove("obstacle1-move");
        alien.classList.remove("obstacle2-move");
        ghost.classList.remove("obstacle3-move");
        ghost2.classList.remove("obstacle4-move");
        dino.classList.remove("obstacle5-move");
        printModal(`<div></div>`);
        stop();
    } 


    if (obstacleTwo < 200 && obstacleTwo > 0 && playerTop < obstacleTwo) {
    console.log("chocasteee")    
        land.classList.remove("landMove");
        player.classList.remove("player_running");
        tvRetro.classList.remove("obstacle1-move");
        alien.classList.remove("obstacle2-move");
        ghost.classList.remove("obstacle3-move");
        ghost2.classList.remove("obstacle4-move");
        dino.classList.remove("obstacle5-move");
       printModal(`<div></div>`);
        stop();
    }

    if (obstacleThree < 200 && obstacleThree > 0 && playerTop < obstacleThree) {
    console.log("chocasteee")    
        land.classList.remove("landMove");
        player.classList.remove("player_running");
        tvRetro.classList.remove("obstacle1-move");
        alien.classList.remove("obstacle2-move");
        ghost.classList.remove("obstacle3-move");
        ghost2.classList.remove("obstacle4-move");
        dino.classList.remove("obstacle5-move");
        printModal(`<div></div>`);
        stop();
    }


}, 10)


// Añadir un objeto de atributos a un elemento
 const addAttributes = (element, attrObj) => {
  for (let attr in attrObj) {
    if (attrObj.hasOwnProperty(attr)) element.setAttribute(attr,attrObj[attr])
  }
};


// Crear elementos con atributos e hijo
 const createCustomElement = (element,attributes,children) => {
  let customElement = document.createElement(element);
  if (children !== undefined) children.forEach(el => {
    if (el.nodeType) {
      if (el.nodeType === 1 || el.nodeType === 11) customElement.appendChild(el);
    } else {
      customElement.innerHTML += el;
    }
  });
  addAttributes(customElement,attributes);
  return customElement;
};


//imprimir modal

const printModal = content => { 
    //crar contenedor interno
    const modalContentEl = createCustomElement("div", {
        id: "ed-modal-content",
        class:"ed-modal-content"
    }, [content])

    //crear contenedor principal
    const modalContainerEl = createCustomElement("div", {
        id: "ed-modal-container",
        class: "ed-modal-container"
    }, [modalContentEl]);

    //imprimir el modal
    document.body.appendChild(modalContainerEl);
    //remover el modal
    const removeModal = () => document.body.removeChild(modalContainerEl);

    modalContainerEl.addEventListener("click", e => { 
        
        console.log(e.target)
        if (e.target === modalContainerEl)

        { removeModal() };
    });


 }



function restart() {
    
    window.location.reload();
} 

function stop() {
        clearInterval(counterInterval);
}
    






document.getElementById("button_restart").addEventListener("click", restart)



window.addEventListener("load", loadGame)