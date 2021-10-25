import {todoItem} from "../todoItem";


function todoList(todos) {
    const todoData = document.createElement(`ul`);
    todoData.className = 'todo-list';

    todos.forEach(todo => {
        const isCompleted = !!todo.isComplete;
        const newToDoItem = todoItem(todo.id, todo.title, todo.category, isCompleted, todo.startDate, todo.startTime, todo.endDate, todo.endTime);
        todoData.appendChild(newToDoItem);
    });

    return todoData
}

export {todoList}
