import logo from '../icons/logo'
import header from '../components/brandingHeader'

function homePage(data) {
    const markup = data.map((boilerplate, index) =>{

        const img = logo();
        const head = header();
        console.log(markup)
    
        return boilerplate
    })
    return markup
}

export default homePage