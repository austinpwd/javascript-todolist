import header from '../components/ui/header'
import brandingHeader from '../components/brandingHeader'
import makeElement from '../utils/makeElement'
import link from '../components/ui/link'

const homePage = function(){
    const newFragment = document.createDocumentFragment()
    const pageHeader = document.createElement('header')
    const main = document.createElement(`main`)

    pageHeader.appendChild(makeElement((header())))

    main.appendChild((brandingHeader()))
    main.appendChild(link("Go to To-Do List app", "/todo"))

    newFragment.appendChild(pageHeader)
    newFragment.appendChild(main)

    return newFragment
      
 }
 
 export default homePage