import dataFetcher from "../../utils/dataFetcher"

const addToDo = function (title='ui-button'){ 
    function clickHandler(){
        const newToDoItem = {
            id: new Date().getTime(),
            text: todo,
            completed: false,
        };
        setTodos([...todos].concat(newTodo));
        setTodo("");
      }
    
     let element = makeElement(`<button class="${className}">${title}</button>`)
     element.addEventListener('click', clickHandler)
    return  element
}

export default addToDo