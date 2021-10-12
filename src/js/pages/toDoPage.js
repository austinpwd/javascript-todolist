import brandingHeader from '../components/brandingHeader'
import makeElement from '../utils/makeElement'
import link from '../components/ui/link'
import todoList from '../components/todoList';
import todoItem from '../components/todoItem';

const app = document.querySelector('#app');
const pageHeader = document.createElement('header')

const toDoPage = function(){

    pageHeader.appendChild((brandingHeader()))
    app.appendChild(makeElement(todoList(todoItem())))

      
 }
 
 export default toDoPage