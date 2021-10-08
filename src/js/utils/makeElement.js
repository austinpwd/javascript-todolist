const makeElement = function(templateContainer=[], _templateString=``){

    templateElements =  templateContainer.map((templateString) => {
        const documentFragment = document.createRange().createContextualFragment(templateString).children[0]
    return documentFragment
    })
}


export default makeElement