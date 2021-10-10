import {Router} from '../../router/routes'
import {makeElement} from '../../utils/makeElement'
 
const link = function ( {title,  path, ...params} ){ 
    
    function clickHandler (e){
        e.preventDefault()
        Router(e.currentTarget.dataset.path)
        return false;
    }
    
  
     let element = makeElement( `<a class="link" href="${path}" data-path="${path}"">${title}</button>`)
     element.addEventListener('click', clickHandler)
    return  element
}


export default link