import makeElement from "../../utils/makeElement";
import button from "../ui/button";
import header from "../ui/header";
import brandingHeader from "../brandingHeader";
import todoList from "../todoList";
import addToDo from "../addToDo";

const newFragment = document.createDocumentFragment();
const pageHeader = document.createElement("header");
const main = document.createElement(`main`);
const appBar = document.createElement("div");
const footer = document.createElement("footer");

const todoContainer = function () {
  appBar.className = "app-bar";

  pageHeader.appendChild(makeElement(header("h1", "Current To-Do List")));
  pageHeader.appendChild(brandingHeader());

  const todos = todoList();
  const clearContainer = clearToDos();
  const todoInput = addToDo();

  appBar.appendChild(todoInput);

  main.appendChild(clearContainer);
  main.appendChild(todos);
  main.appendChild(appBar);

  newFragment.appendChild(pageHeader);
  newFragment.appendChild(main);
  newFragment.appendChild(footer);

  return newFragment;
};

export default todoContainer;

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
