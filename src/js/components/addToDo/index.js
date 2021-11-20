import makeElement from "../../utils/makeElement";
import button from "../ui/button";
import header from "../ui/header";
import brandingHeader from "../brandingHeader";
import todoAdd from "../todos/todoForm/todoAdd";
import reducers from "../../redux/reducers";
import { addToDo } from "../../redux/actions"; 
import { Router } from "../../routes/router";

const newFragment = document.createDocumentFragment();
const addContainer = document.createElement("div");
const pageHeader = document.createElement("header");
const main = document.createElement(`main`);
const buttonsContainer = document.createElement("div")
const submitToDo = button('Submit', 'submit', 'submit-todo', 'submit-button')
const cancelToDo = button('Cancel', 'cancel', 'cancel-todo', 'cancel-button')
const footer = document.createElement("footer");




const addToDoContainer = function () {
  addContainer.className = "todo-add";

  pageHeader.appendChild(makeElement(header("h1", "Add")));
  pageHeader.appendChild(brandingHeader());

  main.appendChild(todoAdd())
  
  buttonsContainer.className = "buttons"
  submitToDo.addEventListener("click", onClick_Add);
  cancelToDo.addEventListener("click", onClick_Cancel)
  buttonsContainer.appendChild(submitToDo)
  buttonsContainer.appendChild(cancelToDo)

  main.appendChild(buttonsContainer)

  addContainer.appendChild(pageHeader);
  addContainer.appendChild(main);
  addContainer.appendChild(footer);

  newFragment.appendChild(addContainer);

  return newFragment;
};

const onClick_Add = function () {
  reducers({
    ...addToDo,
    payload: {
      id: document.querySelector('#todoId').value,
      category: document.querySelector('#category').value,
      title: document.querySelector('#Title').value,
      isComplete: document.querySelector('#Status').checked,
      startDate: document.querySelector('#StartDate').value,
      startTime: document.querySelector('#StartTime').value,
      endDate: document.querySelector('#EndDate').value,
      endTime: document.querySelector('#EndTime').value
    }})
  }
  

export default addToDoContainer;

const onClick_Cancel = () => {
  Router("/todo")
}


