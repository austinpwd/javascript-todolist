function makeMarkup(wrapper, wrapperClass, elementsArry){

    const container = document.createElement(wrapper)
    container.classList.add(wrapperClass)
    
    elementsArry.forEach(element=>{container.append(element)})
    
    return container
    
    }
    
    export default makeMarkup