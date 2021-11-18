import makeElement from "../../utils/makeElement";
import header from "../ui/header";

const todoItem = (
  id = ``,
  title = ``,
  category = ``,
  isComplete = false,
  startDate = ``,
  startTime = ``,
  endDate = ``,
  endTime = ``
) => {
  return makeElement(`<li class="todo-item" data-key="${id}">
                    ${header(`h3`, `<b>Title</b>: ${title}`, "title")}
                    <p class="category"><b>Category</b>: ${category}</p>
                    <p class="time"><b>Time</b>: ${startTime} - ${endTime}</p>
                    <p class="date"><b>Due</b>: ${endDate}</p>
                    <p class="is-completed"><b>Status</b>: ${
                      isComplete
                        ? `Completed <i class="fas fa-check-square fa-2x"></i>`
                        : `In Progress <i class="fas fa-spinner fa-2x"></i>`
                    }</p>
                    <span class="icon"><i class="fas fa-edit fa-2x"></i></span>
                    <span class="icon"><i class="fas fa-trash-alt fa-2x"></i></span>
        </li>`);
};

export { todoItem };
