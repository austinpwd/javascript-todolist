import logo from '../icons/logo'
import header from '../components/brandingHeader'
import makeElement from '../utils/makeElement'

const homePage = function (params){

    const pageHeader = document.createElement('header')
    pageHeader.appendChild(makeElement(logo()))
    pageHeader.appendChild(makeElement(header()))

    return pageHeader
      
 }
 
 export default homePage