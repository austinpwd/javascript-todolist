import dataFetcher from "../../utils/dataFetcher"

const button = function (title='ui-button'){ 
    function clickHandler(){
       
    }
    
     let element = makeElement(`<button class="${className}">${title}</button>`)
     element.addEventListener('click', clickHandler)
    return  element
}

export default button