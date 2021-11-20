import makeElement from "../../utils/makeElement";
import button from "../ui/button";
import header from "../ui/header";
import brandingHeader from "../brandingHeader";
import {todoItem} from "../todos/todoItem"
import {getStore} from "../../redux";
import {Router} from "../../routes/router";

const newFragment = document.createDocumentFragment();

const pageHeader = document.createElement("header");
const main = document.createElement(`main`);
const appBar = document.createElement("div");
const todoData = document.createElement("ul");
const footer = document.createElement("footer");

const todos = function () {
  appBar.className = "app-bar";

  pageHeader.appendChild(makeElement(header("h1", "Current To-Do List")));
  pageHeader.appendChild(brandingHeader());

  const storedToDo = getStore()
  const clearContainer = clearToDos();
  const addBtn = button("add todo", "test");
  addBtn.addEventListener("click", addToDo);


  appBar.appendChild(addBtn);
  
  main.appendChild(clearContainer);
  main.appendChild(appBar);

  newFragment.appendChild(pageHeader);
  newFragment.appendChild(main);
  newFragment.appendChild(footer);
  todoList(storedToDo)

  return newFragment;
};

export default todos;

function todoList(storedToDo) {

  if (storedToDo !== null) {
    const newToDoItems = storedToDo.map(todo => todoItem(todo));

    newToDoItems.forEach(todo => {
      todo.querySelector('.edit-icon').addEventListener('click', editToDo);
      todo.querySelector('.remove-icon').addEventListener('click', deleteToDo);
  
      todoData.appendChild(todo);
    });
    main.appendChild(todoData);
    };
}

const clearToDos = function () {
  const container = document.createElement("div");
  const inProgress = document.createElement("p");
  const clearAllBtn = button("Remove All", "remove-todos");
  container.className = "clear-todos";
  inProgress.textContent = `You have 3 Todos currently in progress`;

  container.appendChild(inProgress);
  container.appendChild(clearAllBtn);

  return container;
};


const addToDo = function(){
  Router("/add-todo")
}

function editToDo(e){
  const currentId = e.currentTarget.parentElement.dataset.key;
  const currentToDo = getStore().find((todo) => todo.id === currentId)
  Router("/edit-todo", currentToDo)
}

function deleteToDo(e){
  const currentId = e.currentTarget.parentElement.dataset.key;
  const currentToDo = getStore().find((todo) => todo.id === currentId)
  Router("/remove-todo", currentToDo)
}

const toggleToDo = function(){
}
