import makeElement from "../../utils/makeElement";
import button from "../ui/button";

const newFragment = document.createDocumentFragment();
const inputForm = document.createElement("input");
const addBtn = button('', 'add-todo')

const addToDo = function () {
  inputForm.type = "text";
  inputForm.placeholder = "Add New To-Do Item";

  addBtn.appendChild(makeElement(`<i class="fa fa-plus fa-2x"></i>`));

  newFragment.appendChild(inputForm);
  newFragment.appendChild(addBtn);

  return newFragment;
};

export default addToDo;
