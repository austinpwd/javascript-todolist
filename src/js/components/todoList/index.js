import todoItem from "../todoItem"

const todoList = function (elementType="ul", className="todo-list", title=todoItem()){
    const element = `<${elementType} class="${className}">${title}</${elementType}>`

    return element

    
}

export default todoList
