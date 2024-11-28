const board = document.getElementById("board");
const bar = document.getElementById("bar");
//grilla
for (let i = 0; i < 10; i++) {
  const div = document.createElement("div");
  div.classList.add("list");
  board.appendChild(div);
  for (let j = 9; j <= 10; j--);
  {
    const item = document.createElement("a");
    item.classList.add("item");
    item.style.backgroundColor = "#" + j + j + j;
    div.appendChild(item);
  }
}
//tono
for (let i = 0; i < 24; i++) {
  const item = document.createElement("a");
  item.classList.add("item");
  item.style.backgroundColor = "hsl(" + i * 15 + ", 100%, 50%)";
  item.addEventListener("click", () => {
    modifyHUE(i * 15);
  });
  bar.appendChild(item);
}

function modifyHUE(hue) {}
