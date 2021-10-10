const makeElement = function(htmlString){
    const frag = document.createRange().createContextualFragment(htmlString)
    const elem = frag.children[0]
    return elem
}

export {makeElement}