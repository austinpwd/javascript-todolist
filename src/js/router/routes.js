import homePage from '../pages/home'
import toDoPage from '../pages/toDoPage'


const Router = (pathname) => {
    const routes = {
        "/":homePage(),
        "/todo":toDoPage()
    }

    const app = document.querySelector('#app');
    app.innerHTML = ''
    window.history.pushState(
      {},
      pathname,
      window.location.origin + pathname
    )
    
    const validRoute = Object.keys(routes).find(path=> path===pathname)
     
 
    app.appendChild(routes[window.location.pathname]);
  }

export default routes
export {Router}
 
