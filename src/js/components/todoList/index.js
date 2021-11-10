import { dataFetcher } from "../../utils/dataFetcher";
import { todoItem } from "../todoItem";

function todoList() {
  const todoData = document.createElement(`ul`);

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
        
        todo.category == "Social" ? todoData.className = "todo-list social-container" : 
        todo.category == "Work" ? todoData.className = "todo-list work-container" : 
        todo.category == "Health" ? todoData.className = "todo-list health-container" : 
        todo.category == "School" ? todoData.className = "todo-list school-container" : 
        todo.category == "Home" ? todoData.className = "todo-list home-container" : 
        "todo-list philosophy-container";

        todoData.appendChild(newToDoItem);
        
      });
    }
  });
  return todoData;
}

export default todoList;
