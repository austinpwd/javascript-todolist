import dataFetcher from "../../utils/dataFetcher";
import makeElement from "../../utils/makeElement";
import todoItem from "../todoItem";

const newFragment = document.createDocumentFragment();

function renderToDos(data) {
    const listContainer = newFragment.appendChild(makeElement(`<ul className="todo-list">`))

    data.forEach(todo => {
        const isCompleted = !!todo.isComplete;
        const newToDoItem = todoItem(todo.id, todo.title, todo.category, isCompleted, todo.startDate, todo.startTime, todo.endDate, todo.endTime)
        listContainer.appendChild(newToDoItem)
    })

    newFragment.appendChild(makeElement(`</ul>`))
    return newFragment
}

const todoList = function() {
    dataFetcher(`data/todos.json`)
    .then((data) => {
      console.log("resolved", data);
      renderToDos(data);
    })
    .catch((err) => console.log("rejected", err));

    return newFragment
}

export default todoList
