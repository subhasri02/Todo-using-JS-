// Select DOM elements
const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

// Handle form submission
todoForm.addEventListener("submit", function (e) {
  e.preventDefault(); // used for refreshing the page
  const taskText = todoInput.value.trim();

  if (taskText !== "") {
    addTask(taskText);
    todoInput.value = "";
  }
});

// Add a task to the list
function addTask(text) {
  const li = document.createElement("li");
// span is used for wrapping the text seperately from other elements used for independent actions
  const span = document.createElement("span");
  span.textContent = text;

  // Toggle completed state
  span.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "delete";
  deleteBtn.addEventListener("click", () => {
    li.remove();
  });

  // Edit button to change task text

  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.addEventListener("click", () => {
    if (editBtn.textContent === "Edit") {
      // Turn span into input for editing
      const input = document.createElement("input");
      input.type = "text";
      input.value = span.textContent; // Set input value to current text
      li.replaceChild(input, span);
      editBtn.textContent = "Save";
    } else {
      // Save edited text and turn input back to span
      const input = li.querySelector("input");
      span.textContent = input.value.trim() || "Unnamed task";
      li.replaceChild(span, input);
      editBtn.textContent = "Edit";
    }
  });

  li.appendChild(span);
  li.appendChild(editBtn);
  li.appendChild(deleteBtn);
  todoList.appendChild(li);
}
