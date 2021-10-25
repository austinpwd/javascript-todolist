import header from '../components/ui/header'
import brandingHeader from '../components/brandingHeader'
import makeElement from '../utils/makeElement'
import link from '../components/ui/link'
import tagline from '../components/ui/tagline'

const pageNotFound = function() {
    const newFragment = document.createDocumentFragment()
    const pageHeader = document.createElement('header')
    const main = document.createElement(`main`)

    pageHeader.appendChild(makeElement((header())))

    main.appendChild((brandingHeader()))
    main.appendChild(link(tagline("h2", "take me back", "ui-redirect"), "/"))

    newFragment.appendChild(pageHeader)
    newFragment.appendChild(main)

    return newFragment
}

export default pageNotFound