import * as actions from "../actionTypes"
import {getStore, updateStore} from ".."
import { Router } from "../../routes/router"
import { update } from "lodash"

function reducers(action) {
    const state = getStore()
    let modifiedState = null
    let i = state.findIndex(todo => todo.id === action.payload.id)

    switch(action.type) {
        case actions.TODO_ADDED:
            updateStore([...state, action.payload])
            action.cb()
            return actions.TODO_ADDED
        case actions.TODO_EDITED:
            modifiedState =  [...state.slice(0, i), Object.assign({}, state[i], action.payload), ...state.slice(i+1)];
            updateStore(modifiedState)
            action.cb()
            return actions.TODO_EDITED
        case actions.TODO_DELETED:
            modifiedState = [...state.slice(0, i), ...state.slice(i+1)]
            updateStore(modifiedState);
            action.cb()
            return actions.TODO_DELETED
        case actions.TODO_TOGGLED:
             state.filter(todo => todo.id === action.payload.id) ? updateStore({...todo, isComplete: !todo.isComplete}) : todo
             action.cb()
             return actions.TODO_TOGGLED
        default:
            return state
    }

}


export default reducers