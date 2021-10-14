import brandingHeader from '../components/brandingHeader'
import link from '../components/ui/link'

const newFragment = document.createDocumentFragment();
const pageHeader = document.createElement('header')
const h1 = document.createElement(`h1`)
const main = document.createElement(`main`)
const container =document.createElement(`div`)

const pageNotFound = function(){
    h1.textContent = '404 Not Found'
    container.className = "container"

    pageHeader.appendChild(h1)
    pageHeader.appendChild((brandingHeader()))
    main.appendChild(container)
    container.appendChild(link("take me back", "/"))

    newFragment.appendChild(pageHeader)
    newFragment.appendChild(main)

    return newFragment;
      
 }
 
 export default pageNotFound