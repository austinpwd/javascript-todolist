
import {Router} from './../../router/routes' 
import { toElement } from '../../utils/toElement'
 
const link = function ( {title,  path, ...params} ){ 
    
    function clickHandler (e){
        e.preventDefault()
        Router(e.currentTarget.dataset.path)
        return false;
    }
    
  
     let element = toElement( `<a class="link" href="${path}" data-path="${path}"">${title}</button>`)
     element.addEventListener('click', clickHandler)
    return  element
}


export default link