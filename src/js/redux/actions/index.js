import { v4 as uuidv4} from 'uuid'

export const addToDo = {
    type: 'ADD',
    id: uuidv4().substr(0,8)
}

export const editToDo = {
    type: 'EDIT',
    id:"D00D2BAD"
}

export const deleteToDo = {
    type: 'DELETE',
    id:"D00D2BAD"
}