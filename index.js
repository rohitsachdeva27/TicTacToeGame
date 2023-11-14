console.log("hey Welcome to the game");
let turn = 'X';
isGameOver = false;
let user1Name = "";
let user2Name = ""

window.onload = function(){
    user1Name = prompt("Enter user 1 name - you will start first with (X)");
    user2Name = prompt("Enter user 2 name - your symbol will be 0");
    changeTurnContent()
}

document.querySelector('.box-container')?.addEventListener('click',(event)=>{

    const targetELement = event?.target;
    if(event?.target?.textContent === '' && !isGameOver){
        event.target.textContent = turn;
        changeTurn();
        checkWinner();
        !isGameOver && changeTurnContent();
    }

})


function changeTurnContent(){
    if(!user1Name || !user2Name) return
    const ele = document?.getElementById("text");
    ele.textContent = turn === 'X' ? `${user1Name} Turn` : `${user2Name} Turn`;
}

const changeTurn = () => turn =  turn === 'X' ? '0' : 'X';

function checkWinner(){
    const wins = [
        [0,1,2],  // first row
        [3,4,5], // second row
        [6,7,8], // third row
        [0,3,6], // first column
        [1,4,7], // second column
        [2,5,8], // third column
        [0,4,8], // first diaognal
        [2,4,6] // secnd diagonal
    ];
    const boxes = Array.from(document?.getElementsByClassName("box"));
    for(let ele of wins){        
        if((boxes[ele[0]]?.textContent !='' && boxes[ele[1]].textContent!='' && boxes[ele[2]].textContent!='') && (boxes[ele[0]].textContent === boxes[ele[1]].textContent) && (boxes[ele[2]].textContent=== boxes[ele[1]]?.textContent)){
            isGameOver = true;
            document.querySelector("#text").textContent = `${boxes[ele[0]].textContent === 'X' ? user1Name :user2Name}  Won`;
            break;
        }

    }
}

document?.querySelector('.resetButton').addEventListener('click',()=>{
    const boxes = Array.from(document?.getElementsByClassName("box"));
    boxes?.forEach(box=>box.textContent ='')

})

