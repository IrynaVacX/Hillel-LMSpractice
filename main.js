"use strict";
document.addEventListener("DOMContentLoaded", () => {
    const addToTodoListButton = document.querySelector(".form__btn");
    addToTodoListButton.addEventListener("click", () => {
        const inputTodoList = document.getElementById("inputTodoList");
        const textTodo = inputTodoList.value;
        if(textTodo.trim().length !== 0) {
            const list = document.getElementById("todoList");
            const newNote = createNote(textTodo);
            list.appendChild(newNote);
            saveList();
        }
    });

    loadTodo();
});

function createNote(text, checked = false) {
    const newNote = document.createElement("li");
    const newInp = document.createElement("input");
    const newSpan = document.createElement("span");
    const newBtn = document.createElement("button");

    newNote.classList.add("todo-item");
    newInp.type = "checkbox";
    newSpan.classList.add("todo-item__description");
    newSpan.textContent = text;
    newBtn.classList.add("todo-item__delete");
    newBtn.textContent = "Delete";

    newInp.addEventListener("input", (e) => {
        const value = e.target.checked;
        if(value) {
            newNote.classList.add("todo-item--checked");
        }
        else {
            newNote.classList.remove();
        }
        saveList();
    });

    newBtn.addEventListener("click", () => {
      newNote.remove();
      saveList();
    });

    newNote.classList.toggle("todo-item--checked", checked);
    newInp.checked = checked;

    inputTodoList.value = "";
    newNote.appendChild(newInp);
    newNote.appendChild(newSpan);
    newNote.appendChild(newBtn);
    return newNote;
}

function loadTodo() {
    const list = document.getElementById("todoList");
    const data = localStorage.getItem("todoList");
    if(data) {
        const fromJson = JSON.parse(data);
        Array.from(fromJson).forEach((el) => {
            const newNote = createNote(el.text, el.checked);
            list.appendChild(newNote);
        });
    }
}

function saveList() {
    const list = document.querySelectorAll("#todoList li");
    const listArr = [];
    Array.from(list).forEach((el) => {
        listArr.push({
            text: el.querySelector("span").textContent,
            checked: el.querySelector("input").checked
        });
    });
    const toJson = JSON.stringify(listArr);
    localStorage.setItem("todoList", toJson);
}
