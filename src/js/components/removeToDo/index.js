import makeElement from "../../utils/makeElement";
import button from "../ui/button";
import header from "../ui/header";
import brandingHeader from "../brandingHeader";
import todoRemove from "../todos/todoForm/todoRemove";
import { deleteToDo } from "../../redux/actions";
import { Router } from "../../routes/router";
import reducers from "../../redux/reducers";

const newFragment = document.createDocumentFragment();
const pageHeader = document.createElement("header");
const deleteContainer = document.createElement(`div`);
const formContainer = document.createElement(`div`);
const buttonsContainer = document.createElement("div")
const submitToDo = button('Submit', 'submit', 'submit-todo', 'submit-button')
const cancelToDo = button('Cancel', 'cancel', 'cancel-todo', 'cancel-button')
const footer = document.createElement("footer");


const removeToDoContainer = function(todo) {

  pageHeader.appendChild(makeElement(header("h1", "Delete To Do")));
  pageHeader.appendChild(brandingHeader());

  function onClick_Remove(e) {
    e.preventDefault();
        reducers({
          ...deleteToDo,
          payload: {
            id:  todo.id
          }})
        }

  buttonsContainer.className = "buttons"
  submitToDo.addEventListener("click", onClick_Remove);
  cancelToDo.addEventListener("click", onClick_Cancel)
  buttonsContainer.appendChild(submitToDo)
  buttonsContainer.appendChild(cancelToDo)

  formContainer.appendChild(todoRemove(todo))
  formContainer.appendChild(buttonsContainer)
  
  deleteContainer.appendChild(pageHeader);
  deleteContainer.appendChild(formContainer);
  deleteContainer.appendChild(footer);

  newFragment.appendChild(pageHeader);
  newFragment.appendChild(deleteContainer);
  newFragment.appendChild(footer);

  return newFragment;
};

export default removeToDoContainer;

const onClick_Cancel = function() {
  Router("/todo")
}
