import makeElement from "../../utils/makeElement";
import button from "../ui/button";
import header from "../ui/header";
import brandingHeader from "../brandingHeader";
import tagline from "../ui/tagline";
import todoEdit from "../todos/todoForm/todoEdit";
import reducers from "../../redux/reducers";
import { editToDo } from "../../redux/actions";
import { Router } from "../../routes/router";


const editToDoContainer = function (todo) {

  const newFragment = document.createDocumentFragment();
  const layoutContainer = document.createElement(`div`);
  const pageHeader = document.createElement("header");
  const main = document.createElement(`main`);
  const h2 = document.createElement('h2');
  const buttonsContainer = document.createElement("div")
  const editToDo = button('Edit', 'submit', 'edit-todo', 'edit-button')
  const cancelToDo = button('Cancel', 'cancel', 'cancel-todo', 'cancel-button')
  const footer = document.createElement("footer");

  layoutContainer.className = "container"
  main.className = "container__todos"
  h2.textContent = "Edit To Do Item"

  pageHeader.append(brandingHeader());
  const title = pageHeader.querySelector('.container__headings');
  title.append(makeElement(header("span", "container__headings--title", "Austin's To Dos")));
  title.append(makeElement(tagline()));

 
  buttonsContainer.className = "buttons"
  editToDo.addEventListener("click", onClick_Edit);
  cancelToDo.addEventListener("click", onClick_Cancel)
  buttonsContainer.append(editToDo)
  buttonsContainer.append(cancelToDo)

  const todoContainer = todoEdit(todo)
  todoContainer.querySelector('#category').value = todo.category;
  todoContainer.querySelector('#complete').checked = todo.isComplete;

  main.append(h2)
  main.append(todoContainer)
  main.append(buttonsContainer)
  
  layoutContainer.append(pageHeader);
  layoutContainer.append(main);
  layoutContainer.append(footer);

  newFragment.append(layoutContainer);

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
          id: document.querySelector('#id').textContent,
          category: document.querySelector('#category').value,
          title: document.querySelector('#title').value,
          isComplete: document.querySelector('#complete').checked,
          startDate: document.querySelector('#startdate').value,
          startTime: document.querySelector('#starttime').value,
          endDate: document.querySelector('#enddate').value,
          endTime: document.querySelector('#endtime').value
        }})
}