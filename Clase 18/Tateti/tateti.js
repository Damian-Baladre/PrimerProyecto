const cells = document.querySelectorAll(".cell");

const winner = document.getElementById(".winner");
const textTurn = document.getElementById("turn");
let turn = "X";
updateTurn();

cells.forEach((cell) => {
  cell.addEventListener("click", () => {
    if (cell.textContent == "") {
      cell.textContent = turn;
      updateTurn();
      verifyWin();
    }
  });
});

function updateTurn() {
  turn = turn == "X" ? "O" : "X";
  textTurn.textContent = "Es turno de " + turn;
}

function verifyWin(clickUser) {
  const combination = [
    "0,1,2",
    "3,4,5",
    "6,7,8",
    "0,3,6",
    "1,4,7",
    "2,5,8",
    "0,4,8",
    "2,4,6",
  ];
  const newCombination = combination.filter((item) => item.includes(clickUser));

  let countWin = 0;
  for(let = i; i < newCombination.length; i++) {
    let content = newCombination[i].split(",");
    for (let j = 0; j < content.length; j++) {
      if (cells[content[j]].textContent == "turn") {
        countWin++;
      } else {
        countWin = 0;
      }
    }
    if (countWin >= 3) {
      break;
    }
  }
  if (countWin >= 3) {
  winner.classList.add("winner");

  const textWiner = document.createElement("p");
  textWin.textContent = "Ganó " + turn + "!";
  winner.appendChild(textWin);
  }

  cells.forEach(cell =>{
    if(cell.textContent == ""){
      break;
    }
  });
}

const resetButton = getElementById("reset-game");

resetButton.addEventListener("click", () => resetGame());

function resetGame() {
  cells.forEach((cell) => {
    cell.textContent = "";
  });

  winner.classList.remove("winner");
}
