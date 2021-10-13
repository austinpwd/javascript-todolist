import dataFetcher from "../../utils/dataFetcher";
import makeElement from "../../utils/makeElement";
import todoItem from "../todoItem";

function renderToDos(data) {
    const newFragment = document.createDocumentFragment();
    const listContainer = newFragment.appendChild(makeElement(`<ul className="todo-list">`))

    data.forEach(todo => {
        const isCompleted = !!todo.isComplete;
        const newToDoItem = todoItem(todo.id, todo.title, todo.category, isCompleted, todo.startDate, todo.startTime, todo.endDate, todo.endTime)
        listContainer.appendChild(newToDoItem)
    })

    newFragment.appendChild(makeElement(`</ul>`))
}

const todoList = function() {
    dataFetcher('../../data/todos.json')
    .then((data) => {
      console.log("resolved", data);
      renderToDos(data);
    })
    .catch((err) => console.log("rejected", err));

}

export default todoList
