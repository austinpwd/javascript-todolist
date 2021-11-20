import makeElement from "../../utils/makeElement";
import button from "../ui/button";
import header from "../ui/header";
import brandingHeader from "../brandingHeader";
import todoEdit from "../todos/todoForm/todoEdit";
import reducers from "../../redux/reducers";
import { editToDo } from "../../redux/actions";
import { Router } from "../../routes/router";


const editToDoContainer = function (todo) {

  const newFragment = document.createDocumentFragment();
  const editContainer = document.createElement("div");
  const pageHeader = document.createElement("header");
  const main = document.createElement(`main`);
  const buttonsContainer = document.createElement("div")
  const editToDo = button('Edit', 'submit', 'edit-todo', 'edit-button')
  const cancelToDo = button('Cancel', 'cancel', 'cancel-todo', 'cancel-button')
  const footer = document.createElement("footer");

  editContainer.className = "todo-edit";

  pageHeader.append(makeElement(header("h1", "Edit To Do")));
  pageHeader.append(brandingHeader());

 
  buttonsContainer.className = "buttons"
  editToDo.addEventListener("click", onClick_Edit);
  cancelToDo.addEventListener("click", onClick_Cancel)
  buttonsContainer.append(editToDo)
  buttonsContainer.append(cancelToDo)

  const todoContainer = todoEdit(todo)
  todoContainer.querySelector('#category').value = todo.category;
  todoContainer.querySelector('#complete').checked = todo.isComplete;

  main.append(todoContainer)
  main.append(buttonsContainer)
  
  editContainer.append(pageHeader);
  editContainer.append(main);
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
 
      reducers({
        ...editToDo,
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