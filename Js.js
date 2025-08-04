let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let msgContainer = document.querySelector(".msg-container");
let newGame = document.querySelector("#new-btn");
let msg = document.querySelector(".msg");

let turnO = true;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", (e) => {
    console.log("box was clicked");
    if (turnO) {
      box.innerText = "O";
      turnO = false;
      box.style.color = "rgb(219, 69, 192)";
    } else {
      box.innerText = "X";
      turnO = true;
      box.style.color = "#ca1765"
    }
    box.disabled = true;

    checkWinner();
  });
});

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        console.log("winner", pos1Val);
        showWinner(pos1Val);
      }
    }
  }
};

const showWinner = (winner) => {
  msg.innerText = `Congratulation, winner is ${winner}`;
  msg - msgContainer.classList.remove("hide");
  disabledBoxes();
};

const disabledBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
const enabledBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const resetGame = () => {
  turnO = true;
  enabledBoxes();
  msgContainer.classList.add("hide");
}
newGame.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);