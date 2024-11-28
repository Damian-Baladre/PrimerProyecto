const input = document.getElementById("taskInput");
const buttons = document.getElementById("addTaskButton");
const list = document.getElementById("taskList");

buttons.addEventListener("click", () => {
  let data = input.value;

  let item = document.createElement("li");
  item.classList.add("item");
  list.appendChild(item);

  let text = document.createElement("p");
  text.classList.add("item-text");
  text.textContent = data;
  list.appendChild(text);

  let conteiner = document.createElement("div");
  conteiner.classList.add("conteiner");
  item.appendChild(conteiner);

  let correct = document.createElement("a");
  correct.classList.add("correct");
  correct.textContent = "✔";
  conteiner.appendChild(correct);

  let deleted = document.createElement("a");
  deleted.classList.add("deleted");
  deleted.textContent = "❌";
  conteiner.appendChild(deleted);
});
