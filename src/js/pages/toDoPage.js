import brandingHeader from '../components/brandingHeader'
import makeElement from '../utils/makeElement'
import link from '../components/ui/link'

const toDoPage = function(){

    const pageHeader = document.createElement('header')
    pageHeader.appendChild((brandingHeader()))
    pageHeader.appendChild(link("Go to To-Do List app", "/todo", ))

    return pageHeader
      
 }
 
 export default toDoPage