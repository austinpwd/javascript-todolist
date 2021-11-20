import makeElement from "../../utils/makeElement";
import button from "../ui/button";
import header from "../ui/header";
import brandingHeader from "../brandingHeader";
import todoEdit from "../todos/todoForm/todoEdit";
import { editToDo } from "../../redux/actions";
import { Router } from "../../routes/router";

const newFragment = document.createDocumentFragment();
const editContainer = document.createElement("div");
const pageHeader = document.createElement("header");
const formContainer = document.createElement(`div`);
const buttonsContainer = document.createElement("div")
const submitToDo = button('Submit', 'submit', 'submit-todo', 'submit-button')
const cancelToDo = button('Cancel', 'cancel', 'cancel-todo', 'cancel-button')
const footer = document.createElement("footer");


const editToDoContainer = function (todo) {
  editContainer.className = "todo-edit";

  pageHeader.appendChild(makeElement(header("h1", "Edit To Do")));
  pageHeader.appendChild(brandingHeader());

 
  buttonsContainer.className = "buttons"
  submitToDo.addEventListener("click", onClick_Edit);
  cancelToDo.addEventListener("click", onClick_Cancel)
  buttonsContainer.appendChild(submitToDo)
  buttonsContainer.appendChild(cancelToDo)

  formContainer.appendChild(todoEdit(todo))
  formContainer.appendChild(buttonsContainer)
  
  editContainer.appendChild(pageHeader);
  editContainer.appendChild(formContainer);
  editContainer.appendChild(footer);

  newFragment.appendChild(editContainer);

  return newFragment;
};

export default editToDoContainer;

const onClick_Cancel = function() {
  Router("/todo")
}

const onClick_Edit = function(e) {
  e.preventDefault();
  if (todo !== null) {

      reducers({
        ...editToDo,
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
}