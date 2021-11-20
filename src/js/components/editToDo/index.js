import makeElement from "../../utils/makeElement";
import button from "../ui/button";
import header from "../ui/header";
import brandingHeader from "../brandingHeader";
import todoEdit from "../todos/todoForm/todoEdit";
import { editToDo } from "../../redux/actions";
import { Router } from "../../routes/router";


const editToDoContainer = function (todo) {

  const newFragment = document.createDocumentFragment();
  const editContainer = document.createElement("div");
  const pageHeader = document.createElement("header");
  const formContainer = document.createElement(`div`);
  const buttonsContainer = document.createElement("div")
  const submitToDo = button('Submit', 'submit', 'submit-todo', 'submit-button')
  const cancelToDo = button('Cancel', 'cancel', 'cancel-todo', 'cancel-button')
  const footer = document.createElement("footer");

  editContainer.className = "todo-edit";

  pageHeader.append(makeElement(header("h1", "Edit To Do")));
  pageHeader.append(brandingHeader());

 
  buttonsContainer.className = "buttons"
  submitToDo.addEventListener("click", onClick_Edit);
  cancelToDo.addEventListener("click", onClick_Cancel)
  buttonsContainer.append(submitToDo)
  buttonsContainer.append(cancelToDo)

  formContainer.append(todoEdit(todo))
  formContainer.append(buttonsContainer)
  
  editContainer.append(pageHeader);
  editContainer.append(formContainer);
  editContainer.append(footer);

  newFragment.append(editContainer);

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