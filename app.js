function toggleItemComplete(event) {
  const paragraph = event.target.nextSibling;
  paragraph.classList.toggle("todo");
  paragraph.classList.toggle("done");
}

function removeItem(event) {
  event.target.parentElement.remove();
}

function createCheckbox() {
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.addEventListener("change", toggleItemComplete);
  return checkbox;
}

function createContent(text) {
  const content = document.createElement("p");
  content.classList.add("todo");
  content.textContent = "👉 " + text;
  content.addEventListener("click", toggleItemComplete);
  return content;
}

function createDeleteButton() {
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "🚮";
  deleteButton.addEventListener("click", removeItem);
  return deleteButton;
}

function addItemToList() {
  const textbox = document.querySelector("input[type=text]");

  if (!textbox.value) {
    return;
  }

  const item = document.createElement("li");

  const checkbox = createCheckbox();
  item.appendChild(checkbox);

  const content = createContent(textbox.value);
  item.appendChild(content);

  const deleteButton = createDeleteButton();
  item.appendChild(deleteButton);

  const items = document.querySelector("ul");
  items.appendChild(item);

  textbox.value = "";
}

const addButton = document.querySelector("button");
addButton.addEventListener("click", addItemToList);
