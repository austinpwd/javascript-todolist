import makeElement from "../../utils/makeElement";
import button from "../ui/button";
import header from "../ui/header";
import tagline from "../ui/tagline"
import brandingHeader from "../brandingHeader";
import {todoItem} from "../todos/todoItem"
import {getStore} from "../../redux";
import {Router} from "../../routes/router";


const todos = function () {

  const newFragment = document.createDocumentFragment();
  const layoutContainer = document.createElement(`div`);
  const pageHeader = document.createElement("header");
  const main = document.createElement(`main`);
  const appBar = document.createElement("div");
  const footer = document.createElement("footer");

  layoutContainer.className = "container"
  main.className = "container__todos"
  appBar.className = "app-bar";
  
  pageHeader.append(brandingHeader());
  const title = pageHeader.querySelector('.container__headings');
  title.append(makeElement(header("span", "container__headings--title", "Austin's To Dos")));
  title.append(makeElement(tagline()));

  const storedToDo = getStore()
  const clearContainer = clearToDos();
  const addBtn = button("add todo", "test");
  addBtn.addEventListener("click", addToDo);


  appBar.append(addBtn);
  
  main.append(clearContainer);
  main.append(appBar);

  layoutContainer.append(pageHeader);
  layoutContainer.append(main);
  layoutContainer.append(footer);

  newFragment.append(layoutContainer);

  todoList(storedToDo, main)

  return newFragment;
};

export default todos;

function todoList(storedToDo, main) {

  if (storedToDo !== null) {
    const newToDoItems = storedToDo.map(todo => todoItem(todo));

    newToDoItems.forEach(todo => {
      todo.querySelector('.edit-icon').addEventListener('click', editToDo);
      todo.querySelector('.remove-icon').addEventListener('click', deleteToDo);
  
      main.append(todo);
    });
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
