import brandingHeader from '../components/brandingHeader'
import todoList from '../components/todoList';
import todoItem from '../components/todoItem';

const app = document.querySelector('#app');
const pageHeader = document.createElement('header')
const h1 = document.createElement(`h1`)
const main = document.createElement(`main`)
const container =document.createElement(`div`)

const toDoPage = function(){
    h1.textContent = 'Current To-Do List'
    container.className = "container"


    pageHeader.appendChild(h1)
    pageHeader.appendChild((brandingHeader()))
    app.appendChild(main)
    main.appendChild(container)
    container.appendChild(todoList(todoItem()))

    return main;
      
 }
 
 export default toDoPage