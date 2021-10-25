import brandingHeader from '../components/brandingHeader'
import {todoList} from '../components/todoList';
import {getStore} from '../redux/store';

const pageHeader = document.createElement('header')
const h1 = document.createElement(`h1`)
const main = document.createElement(`main`)
const container = document.createElement(`div`)
const appBar = document.createElement('div')


const toDoPage = function(){
    h1.textContent = "Current To-Dos"
    pageHeader.appendChild(h1)
    pageHeader.appendChild(brandingHeader())
    container.className = 'container'
    appBar.className = 'app-bar'
    const todos = getStore()

    if (todos !== null) {
        const todoData = todoList(todos)
        container.appendChild(todoData)
    }
    main.appendChild(pageHeader)
    main.appendChild(container)
    main.appendChild(appBar)

    return main;
      
 }
 
 export default toDoPage

