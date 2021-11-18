import makeElement from "../../utils/makeElement";
import header from "../ui/header";
import brandingHeader from "../brandingHeader";

const newFragment = document.createDocumentFragment();
const pageHeader = document.createElement("header");
const main = document.createElement(`main`);
const appBar = document.createElement("div");
const footer = document.createElement("footer");

const onClick = function(e) {
  e.preventDefault();
  Router("/add-todo");
  return false
}

const removeToDoContainer = function () {
  appBar.className = "app-bar";

  pageHeader.appendChild(makeElement(header("h1", "Current To-Do List")));
  pageHeader.appendChild(brandingHeader());


  main.appendChild(appBar);

  newFragment.appendChild(pageHeader);
  newFragment.appendChild(main);
  newFragment.appendChild(footer);

  return newFragment;
};

export default removeToDoContainer;
