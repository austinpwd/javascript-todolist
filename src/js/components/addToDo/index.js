import makeElement from "../../utils/makeElement";
import button from "../ui/button";
import header from "../ui/header";
import brandingHeader from "../brandingHeader";
import todoAdd from "../todos/todoForm/todoAdd";
import reducers from "../../redux/reducers";
import { addToDo } from "../../redux/actions"; 
import { Router } from "../../routes/router";

const addToDoContainer = function () {

  const newFragment = document.createDocumentFragment();
  const addContainer = document.createElement("div");
  const pageHeader = document.createElement("header");
  const main = document.createElement(`main`);
  const buttonsContainer = document.createElement("div")
  const addToDo = button('Add', 'submit', 'add-todo', 'add-button')
  const cancelToDo = button('Cancel', 'cancel', 'cancel-todo', 'cancel-button')
  const footer = document.createElement("footer");

  addContainer.className = "todo-add";

  pageHeader.append(makeElement(header("h1", "Add")));
  pageHeader.append(brandingHeader());

  main.append(todoAdd())
  
  buttonsContainer.className = "buttons"
  addToDo.addEventListener("click", onClick_Add);
  cancelToDo.addEventListener("click", onClick_Cancel)
  buttonsContainer.append(addToDo)
  buttonsContainer.append(cancelToDo)

  main.append(buttonsContainer)

  addContainer.append(pageHeader);
  addContainer.append(main);
  addContainer.append(footer);

  newFragment.append(addContainer);

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


