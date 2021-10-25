import homePage from '../pages/home'
import toDoPage from '../pages/toDoPage'
import pageNotFound from '../pages/pageNotFound'

const routes = {
  "/":homePage(),
  "/todo":toDoPage()
}



function Router(pathname) {

  const validRoute = Object.keys(routes).find(key => key===pathname)

  const app = document.querySelector('#app')
  app.innerHTML = ''
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname
  )

  validRoute !== undefined ? app.appendChild(routes[validRoute]) : app.appendChild(pageNotFound())


}


export {Router}

 
