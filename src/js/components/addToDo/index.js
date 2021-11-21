import makeElement from "../../utils/makeElement";
import button from "../ui/button";
import header from "../ui/header";
import tagline from "../ui/tagline";
import brandingHeader from "../brandingHeader";
import todoAdd from "../todos/todoForm/todoAdd";
import reducers from "../../redux/reducers";
import { addToDo } from "../../redux/actions"; 
import { Router } from "../../routes/router";

const addToDoContainer = function () {

  const newFragment = document.createDocumentFragment();
  const pageHeader = document.createElement("header");
  const main = document.createElement(`main`);
  const h2 = document.createElement('h2');
  const layoutContainer = document.createElement("div");
  const buttonsContainer = document.createElement("div")
  const addToDo = button('Add', 'submit', 'add-todo', 'add-button')
  const cancelToDo = button('Cancel', 'cancel', 'cancel-todo', 'cancel-button')
  const footer = document.createElement("footer");

  layoutContainer.className = "container"
  main.className = "container__todos"
  h2.textContent = "Add To Do Item"

  pageHeader.append(brandingHeader());
  const title = pageHeader.querySelector('.container__headings');
  title.append(makeElement(header("span", "container__headings--title", "Austin's To Dos")));
  title.append(makeElement(tagline()));

  main.append(h2)
  main.append(todoAdd())
  
  buttonsContainer.className = "buttons"
  addToDo.addEventListener("click", onClick_Add);
  cancelToDo.addEventListener("click", onClick_Cancel)
  buttonsContainer.append(addToDo)
  buttonsContainer.append(cancelToDo)

  main.append(buttonsContainer)

  layoutContainer.append(pageHeader);
  layoutContainer.append(main);
  layoutContainer.append(footer);

  newFragment.append(layoutContainer);

  return newFragment;
};

const onClick_Add = function () {
  reducers({
    ...addToDo,
    payload: {
      id: document.querySelector('#id').value,
      category: document.querySelector('#category').value,
      title: document.querySelector('#title').value,
      isComplete: document.querySelector('#complete').checked,
      startDate: document.querySelector('#startdate').value,
      startTime: document.querySelector('#starttime').value,
      endDate: document.querySelector('#enddate').value,
      endTime: document.querySelector('#endtime').value
    }})
  }
  

export default addToDoContainer;

const onClick_Cancel = () => {
  Router("/todo")
}


