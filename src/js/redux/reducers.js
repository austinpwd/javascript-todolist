import {getStore} from './store'


function reducers ({action}){
    data.forEach(todo => {
        const isCompleted = !!todo.isComplete;
        const newToDoItem = todoItem(todo.id, todo.title, todo.category, isCompleted, todo.startDate, todo.startTime, todo.endDate, todo.endTime)
        listContainer.appendChild(newToDoItem)
    })
    
    switch(action.type){
        case "edit": return "edit employee";
        case "delete": return "remove employe with an id";
        case "add": return "create a new employee";
        default: return store
    }

}


export default reducers