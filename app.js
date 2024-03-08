let presentPlayer = "O";
let count = 0;
let msg_Display = document.getElementById("msg");
let finalResult = document.getElementById("play_again");

const grids = document.querySelectorAll(".grid_item");

for (let i = 0; i < grids.length; i++) {
  grids[i].addEventListener("click", handleClicks);
}

function handleClicks(e) {
  if (!e.target.innerText) {
    presentPlayer = presentPlayer === "O" ? "X" : "O";
    e.target.innerHTML = `<div class="tic-tac ${presentPlayer === 'X' ? 'x' : 'o'}">${presentPlayer}</div>`;
    count++;
  }
  if (count === 9) {
    displayResult("It's a DRAW!");
  }
  Winner();
}

function Winner() {
  const winCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];

  for (const combination of winCombos) {
    const [a, b, c] = combination;
    if (grids[a].innerText + grids[b].innerText + grids[c].innerText === "XXX") {
      displayResult("'X' Won the game!");
      return;
    } else if (grids[a].innerText + grids[b].innerText + grids[c].innerText === "OOO") {
      displayResult("'O' Won the game!");
      return;
    }
  }
}

function displayResult(message) {
  msg_Display.innerText = message;
  finalResult.style.visibility = "visible";
}
