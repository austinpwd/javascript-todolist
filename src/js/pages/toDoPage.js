import makeElement from '../utils/makeElement';
import header from '../components/ui/header';
import brandingHeader from '../components/brandingHeader'
import todoList from '../components/todoList';

const pageHeader = document.createElement('header')
const main = document.createElement(`main`)
const container = document.createElement(`div`)
const appBar = document.createElement('div')



const toDoPage = function(){

    pageHeader.appendChild(makeElement((header("h1", "Current To-Do List"))))
    pageHeader.appendChild(brandingHeader())
    container.className = 'container'
    appBar.className = 'app-bar'

    const todoData = todoList()
    
    container.appendChild(todoData)
    main.appendChild(pageHeader)
    main.appendChild(container)
    main.appendChild(appBar)

    return main;
      
 }
 
 export default toDoPage

