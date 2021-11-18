
import { createStore } from "../../../redux";
import { dataFetcher } from "../../../utils/dataFetcher";
import { todoItem } from "../todoItem";

function todoList() {
  const todoData = document.createElement(`ul`);

  dataFetcher("./data/todos.json").then((todos) => {
    if(todos[0].id === undefined){
      todos = [...keyGenerator(todos)]
 };
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
        createStore(todos)
        todoData.appendChild(newToDoItem);
        
      });
    }
  });
  return todoData;
}

export default todoList;