import header from '../components/ui/header'
import error from '../icons/error'
import makeElement from '../utils/makeElement'
import link from '../components/ui/link'

const pageNotFound = function() {
    const newFragment = document.createDocumentFragment()
    const pageHeader = document.createElement('header')
    const main = document.createElement(`main`)

    pageHeader.appendChild(makeElement((header("h1", "404 Not Found"))))

    main.appendChild(makeElement(error()))
    main.appendChild(link("take me back", "/"))

    newFragment.appendChild(pageHeader)
    newFragment.appendChild(main)

    return newFragment
}

export default pageNotFound