let playerText = document.getElementById("player-text");
let restartButton = document.getElementById("reset-btn");
let boxes = Array.from(document.getElementsByClassName("btn"));
let container = document.getElementsByClassName("container");
let winnerdisplay = document.getElementById("winnerdisplay");
let nameOfTheWinner = document.querySelector(".winner  span");
let resetbtn = document.getElementById("resetbtn");
class xAndO {
  marks = [];
  winCases = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
  ];
  currentPlayer = "X";

  constructor() {
    console.log("running");
    this.marks.length = 9;
    boxes.forEach((box) => {
      box.addEventListener("click", () => {
        const boxId = +box.id;
        this.currentPalyer = this.currentPalyer === "X" ? "O" : "X";
        box.innerText = this.currentPalyer;
        this.marks[boxId] = this.currentPalyer;
        this.validateBoard();
      });
    });
    resetbtn.addEventListener("click", () => {
      this.currentPalyer = "X";
      this.marks = this.marks.map((mark) => undefined);
      winnerdisplay.style.display = "none";
      container[0].classList.remove("eventnone");
    });
  }

  validateBoard() {
    for (let i = 0; i < this.winCases.length; i++) {
      let currentWinCase = this.winCases[i];
      if (
        this.marks[currentWinCase[0]] !== undefined &&
        this.marks[currentWinCase[0]] === this.marks[currentWinCase[1]] &&
        this.marks[currentWinCase[0]] === this.marks[currentWinCase[2]]
      ) {
        winnerdisplay.style.display = "flex";
        nameOfTheWinner.innerText === this.marks[currentWinCase[0]];
        container[0].classList.add("eventnone");
        break;
      }
    }
  }
}
const startGame = new xAndO();
