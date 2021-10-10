import makeElement from "../../utils/makeElement"

const tagline = function (elementType='h2', label="ui tagline", className="ui-tagline"){
     const template = `<${elementType} class="${className}"> ${label} </ ${elementType}>`
     const element = makeElement(template)

     return element
}

export default tagline