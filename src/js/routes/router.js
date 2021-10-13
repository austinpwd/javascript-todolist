import homePage from '../pages/home'
import toDoPage from '../pages/toDoPage'
import pageNotFound from '../pages/pageNotFound'

let validRoute = ''

const routes = {
  "/":homePage(),
  "/todo":toDoPage()
}



const Router = (pathname) => {
    const app = document.querySelector('#app');
    app.innerHTML = ''
    window.history.pushState(
      {},
      pathname,
      window.location.origin + pathname
    )
    
    validRoute = Object.keys(routes).find(path=> path===pathname)
    
    validRoute != ''? app.appendChild(routes[window.location.pathname]) : app.appendChild(pageNotFound) 
  }

export default routes
export {Router}

 
