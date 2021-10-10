import logo from './../icons/logo'
import header from '../components/brandingHeader'
import makeElement from '../utils/makeElement';
import makeMarkup from '../utils/makeMarkup';

const landingPage = function(params) {

    const img = logo();
    const head = header();
    const markup = img - head;
    console.log(markup)

    return null
} 

export default landingPage