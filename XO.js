let playerText = document.getElementById("player-text");
let restartButton = document.getElementById("reset-btn");
let boxes = Array.from(document.getElementsByClassName("btn"));
let container = document.getElementsByClassName("container")
let winnerdisplay = document.getElementById("winnerdisplay");
let nameOfTheWinner = document.querySelector(".winner  span");
let resetbtn = document.getElementById("resetbtn");
let spaces = [];
spaces.length = 9;
const O_TEXT = "O";
const X_TEXT = "X";
let currentPalyer = X_TEXT;
let winning = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
];

function reloadpage() {
    resetbtn.addEventListener("click", () => {
        location.reload();
    })
};
reloadpage();
function chekTheWinner() {
    let cheking = "";
    for (let e of winning) {
        if (spaces[e[0]] == spaces[e[1]] && spaces[e[0]] == spaces[e[2]] && spaces[e[0]] !== undefined) {
            winnerdisplay.style.display = "flex";
            container[0].classList.add("eventnone")
            nameOfTheWinner.innerText += spaces[e[0]]
        }
    }
};

function marqueXAndO() {
    boxes.forEach((e) => {
        e.addEventListener(("click"), () => {
            e.innerText = currentPalyer;
            currentPalyer = currentPalyer == X_TEXT ? O_TEXT : X_TEXT;
            spaces[+e.id] = e.innerText;
            console.log(spaces[e.id]);
            console.log(spaces);
            chekTheWinner();
        })
    });
};
marqueXAndO();