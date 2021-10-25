import makeElement from '../utils/makeElement';
import header from '../components/ui/header';
import brandingHeader from '../components/brandingHeader'
import todoList from '../components/todoList';
import addToDo from '../components/addToDo';

const newFragment = document.createDocumentFragment()
const pageHeader = document.createElement('header')
const main = document.createElement(`main`)
const appBar = document.createElement('div')
const footer = document.createElement('footer')



const toDoPage = function(){
    
    appBar.className = 'app-bar'
    
    pageHeader.appendChild(makeElement((header("h1", "Current To-Do List"))))
    pageHeader.appendChild(brandingHeader())
    
    const todoData = todoList()
    const todoInput = addToDo()
    appBar.appendChild(todoInput)
    main.appendChild(appBar)

    newFragment.appendChild(pageHeader)
    newFragment.appendChild(main)
    newFragment.appendChild(footer)


    return newFragment;
      
 }
 
 export default toDoPage

