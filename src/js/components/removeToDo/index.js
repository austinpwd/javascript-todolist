import makeElement from "../../utils/makeElement";
import button from "../ui/button";
import header from "../ui/header";
import brandingHeader from "../brandingHeader";
import todoRemove from "../todos/todoForm/todoRemove";
import { deleteToDo } from "../../redux/actions";
import { Router } from "../../routes/router";
import reducers from "../../redux/reducers";


const removeToDoContainer = function(todo) {

  const newFragment = document.createDocumentFragment();
  const pageHeader = document.createElement("header");
  const main = document.createElement(`main`);
  const deleteContainer = document.createElement(`div`);
  const buttonsContainer = document.createElement("div")
  const removeToDo = button('Remove', 'submit', 'remove-todo', 'remove-button')
  const cancelToDo = button('Cancel', 'cancel', 'cancel-todo', 'cancel-button')
  const footer = document.createElement("footer");

  pageHeader.append(makeElement(header("h1", "Delete To Do")));
  pageHeader.append(brandingHeader());

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

  main.append(todoRemove(todo))
  main.append(buttonsContainer)
  
  deleteContainer.append(pageHeader);
  deleteContainer.append(main);
  deleteContainer.append(footer);

  newFragment.append(deleteContainer);

  return newFragment;
};

export default removeToDoContainer;

const onClick_Cancel = function() {
  Router("/todo")
}
