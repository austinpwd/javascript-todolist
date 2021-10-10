import brandingHeader from '../components/brandingHeader'
import link from '../components/ui/link'

const pageNotFound = function(){

    const pageHeader = document.createElement('header')
    pageHeader.appendChild((brandingHeader()))
    pageHeader.appendChild(link("Go to To-Do List app", "/pageNotFound", ))

    return pageHeader
      
 }
 
 export default pageNotFound