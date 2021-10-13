import {dataFetcher} from "../../utils/dataFetcher";
import makeElement from "../../utils/makeElement";
import todoItem from "../todoItem";

const todoList = function() {
    const newFragment = document.createDocumentFragment();
    const listContainer = newFragment.appendChild(makeElement(`<ul className="todo-list">`))

    let todoItems = dataFetcher(`../../data/todos.json`);
    todoItems.forEach(todo => {
        const isCompleted = !!todo.isComplete;
        const newToDoItem = todoItem(todo.id, todo.title, todo.category, isCompleted, todo.startDate, todo.startTime, todo.endDate, todo.endTime)
        listContainer.appendChild(newToDoItem)
    })

    newFragment.appendChild(makeElement(`</ul>`))

}

export default todoList
