function createTodoListItem() {
  const input = document.querySelector("input[type=text]");

  if (input.value === "") {
    return;
  }

  const li = document.createElement("li");
  li.textContent = input.value;

  const ul = document.querySelector("ul");
  ul.appendChild(li);

  input.value = "";
}

const addButton = document.querySelector("button");
addButton.addEventListener("click", createTodoListItem);
