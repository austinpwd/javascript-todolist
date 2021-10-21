import dataFetcher from "../../utils/dataFetcher";
import {createStore, getStore} from "../../redux/store";
import keyGenerator from '../../utils/keyGenerator';
import todoItem from "../todoItem";

async function renderToDos() {
    const newFragment = document.createDocumentFragment()
    const listContainer = document.createElement(`ul`)
    listContainer.className = 'todo-list'

    let data = await dataFetcher('./data/todos.json')

    data[0].id === undefined ? data = [...keyGenerator(data)] :

    createStore(data)

    newFragment.appendChild(listContainer)

    return newFragment
}

const todoList = function() {
    const loadList = renderToDos()

    return loadList
}

export default todoList
