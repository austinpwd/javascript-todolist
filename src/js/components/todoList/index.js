import { dataFetcher } from "../../utils/dataFetcher";
import { todoItem } from "../todoItem";

function todoList() {
  const todoData = document.createElement(`ul`);
  todoData.className = "todo-list";

  dataFetcher("./data/todos.json").then((todos) => {
    if (todos !== null) {
      todos.forEach((todo) => {
        const newToDoItem = todoItem(
          todo.id,
          todo.title,
          todo.category,
          todo.isComplete,
          todo.startDate,
          todo.startTime,
          todo.endDate,
          todo.endTime
        );
        todoData.appendChild(newToDoItem);
      });
    }
  });
  return todoData;
}

export default todoList;
