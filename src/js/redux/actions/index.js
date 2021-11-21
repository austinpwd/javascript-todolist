import * as types from "../actionTypes"
import { Router } from "../../routes/router"

export const addToDo = {
    type: types.TODO_ADDED,
    payload: {
        id: "",
        category: "",
        title: "",
        isComplete: false,
        startDate: "",
        startTime: "",
        endDate: "",
        endTime: ""
    },
    cb: () => Router('/todo') 

    
}

export const editToDo = {
    type: types.TODO_EDITED,
    payload: {
        id: "",
        category: "",
        title: "",
        isComplete: "",
        startDate: "",
        startTime: "",
        endDate: "",
        endTime: ""
    },
    cb: () => Router('/todo')
}

export const deleteToDo = {
    type: types.TODO_DELETED,
    payload: {
        id: ""
    },
    cb: () => Router('/todo')
}
