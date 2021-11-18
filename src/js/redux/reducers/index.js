import { getStore, updateStore } from "..";
import pageNotFound from "../../pages/pageNotFound";

function reducers ({state, action}){
    const state = getStore()

    switch(action.type){
        case 'TODO_ADDED':
            return [
                ...state,
                {
                    id = uuidv4().substr(0,8),
                    category = action.payload.category,
                    title = action.payload.title,
                    isComplete = action.payload.isComplete,
                    startDate = action.payload.startDate,
                    startTime = action.payload.startTime,
                    endDate = action.payload.endDate,
                    endTime = action.payload.endTime

                }
            ]
        case 'TODO_EDITED':
            return "remove employe with an id";
        case 'TODO_DELETED':
            return state.filter(todo => todo.id !== action.payload.id)
        case 'TODO_TOGGLED':
             return state.filter(todo => todo.id === action.payload.id)
        default:
            return state
    }

}


export default reducers