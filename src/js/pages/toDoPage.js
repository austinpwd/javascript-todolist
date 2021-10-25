import makeElement from '../utils/makeElement';
import header from '../components/ui/header';
import brandingHeader from '../components/brandingHeader'
import todoList from '../components/todoList';
import {dataFetcher} from '../utils/dataFetcher';
import {todoItem} from '../components/todoItem';
import {getStore} from '../redux/store';

const pageHeader = document.createElement('header')
const main = document.createElement(`main`)
const container = document.createElement(`div`)
const appBar = document.createElement('div')
const todoData = todoList()

const toDoPage = function(){
    const todos = getStore()
    pageHeader.appendChild(makeElement((header("h1", "Current To-Do List"))))
    pageHeader.appendChild(brandingHeader())
    container.className = 'container'
    appBar.className = 'app-bar'
    container.appendChild(todoData)
    
    main.appendChild(pageHeader)
    main.appendChild(container)
    main.appendChild(appBar)

    return main;
      
 }
 
 export default toDoPage

