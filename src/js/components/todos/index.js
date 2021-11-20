import makeElement from "../../utils/makeElement";
import button from "../ui/button";
import header from "../ui/header";
import brandingHeader from "../brandingHeader";
import {todoItem} from "../todos/todoItem"
import {getStore} from "../../redux";
import {Router} from "../../routes/router";


const todos = function () {

  const newFragment = document.createDocumentFragment();

  const pageHeader = document.createElement("header");
  const main = document.createElement(`main`);
  const appBar = document.createElement("div");
  const todoData = document.createElement("ul");
  const footer = document.createElement("footer");

  appBar.className = "app-bar";

  pageHeader.append(makeElement(header("h1", "Current To-Do List")));
  pageHeader.append(brandingHeader());

  const storedToDo = getStore()
  const clearContainer = clearToDos();
  const addBtn = button("add todo", "test");
  addBtn.addEventListener("click", addToDo);


  appBar.append(addBtn);
  
  main.append(clearContainer);
  main.append(appBar);

  newFragment.append(pageHeader);
  newFragment.append(main);
  newFragment.append(footer);
  todoList(storedToDo, todoData, main)

  return newFragment;
};

export default todos;

function todoList(storedToDo, todoData, main) {

  if (storedToDo !== null) {
    const newToDoItems = storedToDo.map(todo => todoItem(todo));

    newToDoItems.forEach(todo => {
      todo.querySelector('.edit-icon').addEventListener('click', editToDo);
      todo.querySelector('.remove-icon').addEventListener('click', deleteToDo);
  
      todoData.append(todo);
    });
    main.append(todoData);
    };
}

const clearToDos = function () {
  const container = document.createElement("div");
  const inProgress = document.createElement("p");
  const clearAllBtn = button("Remove All", "remove-todos");
  container.className = "clear-todos";
  inProgress.textContent = `You have 3 Todos currently in progress`;

  container.append(inProgress);
  container.append(clearAllBtn);

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
