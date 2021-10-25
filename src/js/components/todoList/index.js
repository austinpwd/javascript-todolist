import { getStore } from "../../redux/store";
import {todoItem} from "../todoItem";


function todoList() {
    const todos = getStore()
    const todoData = document.createElement(`ul`);
    todoData.className = 'todo-list';
    if (todos !== null) {
        todos.forEach(todo => {
            const isCompleted = !!todo.isComplete;
            const newToDoItem = todoItem(todo.id, todo.title, todo.category, isCompleted, todo.startDate, todo.startTime, todo.endDate, todo.endTime);
            todoData.appendChild(newToDoItem);
        })
    }
    return todoData
}

export default todoList
