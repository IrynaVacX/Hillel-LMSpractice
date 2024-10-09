document.addEventListener("DOMContentLoaded", () => {
  const inputTodoList = document.getElementById("inputTodoList");
  inputTodoList.style.borderColor = "gray";
  inputTodoList.addEventListener("click", () => {
      inputTodoList.style.borderColor = "gray";
  });

  const addToTodoListButton = document.getElementById("addToTodoListButton");
  addToTodoListButton.addEventListener("click", (e) => {
      const inputTodoList = document.getElementById("inputTodoList");
      const textTodo = inputTodoList.value;
      if(textTodo.trim().length === 0) {
          inputTodoList.style.borderColor = "red";
      }
      else {
          const list = document.getElementById("todoList");
          const newTodo = document.createElement("div");
          const newLi = document.createElement("li");
          const newBtn = document.createElement("button");

          newLi.textContent = textTodo;
          newBtn.textContent = "Delete";
          newBtn.addEventListener("click", () => {
              newTodo.remove();
          });
          inputTodoList.value = "";

          newTodo.style.display = "flex";
          newTodo.style.gap = "4px";
          newTodo.style.marginBottom = "4px";
          newTodo.appendChild(newLi);
          newTodo.appendChild(newBtn);
          list.appendChild(newTodo);
      }
  });
});
