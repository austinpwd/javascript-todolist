import logo from './../icons/logo'
import header from './../components/header'

const landingPage = function(params) {

    const img = logo();
    const head = header();
    const markup = img - head;
    console.log(markup)

    return null
} 

export default landingPage