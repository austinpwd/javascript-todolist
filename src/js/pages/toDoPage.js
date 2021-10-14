import brandingHeader from '../components/brandingHeader'
import todoList from '../components/todoList';

const newFragment = document.createDocumentFragment();
const pageHeader = document.createElement('header')
const h1 = document.createElement(`h1`)
const main = document.createElement(`main`)
const container = document.createElement(`div`)
const appBar = document.createElement('div')

const toDoPage = function(){
    h1.textContent = 'Current To-Do List'
    container.className = 'container'
    appBar.className = 'app-bar'

    pageHeader.appendChild(h1)
    pageHeader.appendChild((brandingHeader()))
    container.appendChild(todoList())
    main.appendChild(container)
    main.appendChild(appBar)


    newFragment.appendChild(pageHeader)
    newFragment.appendChild(main)

    return newFragment;
      
 }
 
 export default toDoPage