function makeElement (array=[]) {  
    let newElements;

    if (array.length === 0){
        throw new Error("Empty array")
    }

    newElements = array.map((templateStrings) => {
        
        const currentElement = document.createRange().createContextualFragment(templateStrings).children[0]
        
        return currentElement
    })    
    
    return newElements
}
export default makeElement