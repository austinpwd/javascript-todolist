import makeElement from "../../utils/makeElement";
import button from "../ui/button";
import header from "../ui/header";
import brandingHeader from "../brandingHeader";
import todoList from "./todoList";
import Router from "../../routes/router";

const newFragment = document.createDocumentFragment();
const pageHeader = document.createElement("header");
const main = document.createElement(`main`);
const appBar = document.createElement("div");
const footer = document.createElement("footer");

const todos = function () {
  appBar.className = "app-bar";

  pageHeader.appendChild(makeElement(header("h1", "Current To-Do List")));
  pageHeader.appendChild(brandingHeader());

  const list = todoList()
  const clearContainer = clearToDos();
  const addBtn = button("add todo", "test");
  addBtn.addEventListener("click", addToDo);


  appBar.appendChild(addBtn);
  
  main.appendChild(clearContainer);
  main.appendChild(list);
  main.appendChild(appBar);

  newFragment.appendChild(pageHeader);
  newFragment.appendChild(main);
  newFragment.appendChild(footer);

  return newFragment;
};

export default todos;

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
