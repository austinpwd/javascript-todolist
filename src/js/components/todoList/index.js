import dataFetcher from "../../utils/dataFetcher";
import todoItem from "../todoItem";

async function renderToDos() {
    const data = await dataFetcher('./data/todos.json')
    const newFragment = document.createDocumentFragment()
    const listContainer = document.createElement(`ul`)
    listContainer.className = 'todo-list'

    data.forEach(todo => {
        const isCompleted = !!todo.isComplete;
        const newToDoItem = todoItem(todo.id, todo.title, todo.category, isCompleted, todo.startDate, todo.startTime, todo.endDate, todo.endTime)
        listContainer.appendChild(newToDoItem)
    })

    newFragment.appendChild(listContainer)

    return newFragment
}

const todoList = function() {
    const loadList = renderToDos()

    return loadList
}

export default todoList
