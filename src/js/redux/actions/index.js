export const addToDo = {
    type: 'TODO_ADDED',
    payload: {
        category:"",
        title:"",
        isComplete:true,
        startDate:"",
        startTime:"",
        endDate:"",
        endTime:""
    }
}

export const editToDo = {
    type: 'TODO_EDITED',
    payload: {
        id: "",
        category:"",
        title:"",
        isComplete:true,
        startDate:"",
        startTime:"",
        endDate:"",
        endTime:""
    }
}

export const deleteToDo = {
    type: 'TODO_DELETED',
    payload: {
        id: ""
    }
}

export const toggleStatus = {
    type: 'TODO_TOGGLED',
    payload: {
        id: "",
        isComplete = true
    }
}