import makeElement from "../../utils/makeElement";

const newFragment = document.createDocumentFragment();
const inputForm = document.createElement("input");
const addBtn = document.createElement("button");

const addToDo = function () {
  inputForm.type = "text";
  inputForm.placeholder = "Add New To-Do Item";

  addBtn.title = "Add To-Do";
  addBtn.appendChild(makeElement(`<i class="fa fa-plus fa-2x"></i>`));

  newFragment.appendChild(inputForm);
  newFragment.appendChild(addBtn);

  return newFragment;
};

export default addToDo;
