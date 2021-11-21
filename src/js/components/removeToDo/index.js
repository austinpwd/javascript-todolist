import makeElement from "../../utils/makeElement";
import button from "../ui/button";
import header from "../ui/header";
import tagline from "../ui/tagline";
import brandingHeader from "../brandingHeader";
import todoRemove from "../todos/todoForm/todoRemove";
import { deleteToDo } from "../../redux/actions";
import { Router } from "../../routes/router";
import reducers from "../../redux/reducers";


const removeToDoContainer = function(todo) {

  const newFragment = document.createDocumentFragment();
  const pageHeader = document.createElement("header");
  const main = document.createElement(`main`);
  const h2 = document.createElement('h2');
  const layoutContainer = document.createElement("div")
  const buttonsContainer = document.createElement("div")
  const removeToDo = button('Remove', 'submit', 'remove-todo', 'remove-button')
  const cancelToDo = button('Cancel', 'cancel', 'cancel-todo', 'cancel-button')
  const footer = document.createElement("footer");

  layoutContainer.className = "container"
  main.className = "container__todos"
  h2.textContent = "Remove To Do Item"

  pageHeader.append(brandingHeader());
  const title = pageHeader.querySelector('.container__headings');
  title.append(makeElement(header("span", "container__headings--title", "Austin's To Dos")));
  title.append(makeElement(tagline()));


  function onClick_Remove(e) {
    e.preventDefault();
        reducers({
          ...deleteToDo,
          payload: {
            id:  todo.id
          }})
        }

  buttonsContainer.className = "buttons"
  removeToDo.addEventListener("click", onClick_Remove);
  cancelToDo.addEventListener("click", onClick_Cancel)
  buttonsContainer.append(removeToDo)
  buttonsContainer.append(cancelToDo)

  main.append(h2)
  main.append(todoRemove(todo))
  main.append(buttonsContainer)
  
  layoutContainer.append(pageHeader);
  layoutContainer.append(main);
  layoutContainer.append(footer);

  newFragment.append(layoutContainer);

  return newFragment;
};

export default removeToDoContainer;

const onClick_Cancel = function() {
  Router("/todo")
}
