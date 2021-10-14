import dataFetcher from "../../utils/dataFetcher";
import todoItem from "../todoItem";

const newFragment = document.createDocumentFragment();

async function renderToDos() {
    const data = await dataFetcher('./data/todos.json')
    const listContainer = document.createElement(`ul`)
    listContainer.className = 'todo-list'
    newFragment.appendChild(listContainer)

    data.forEach(todo => {
        const isCompleted = !!todo.isComplete;
        const newToDoItem = todoItem(todo.id, todo.title, todo.category, isCompleted, todo.startDate, todo.startTime, todo.endDate, todo.endTime)
        listContainer.appendChild(newToDoItem)
    })

    return newFragment
}

const todoList = function() {
    renderToDos()

    return newFragment
}

export default todoList
