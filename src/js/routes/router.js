import homePage from '../pages/index'
import toDoPage from '../pages/toDoPage'
import pageNotFound from '../pages/pageNotFound'

const routes = {
  "/":homePage(),
  "/todo":toDoPage()
}



const Router = (pathname) => {

  const isValidRoute = Object.keys(routes).find(key => key === pathname);

  const app = document.querySelector('#app');
  app.innerHTML = '';
  window.history.pushState(
      {},
      pathname,
      window.location.origin + pathname
  )
  
  // If path doesn't exist -> load the error page
  if (isValidRoute === undefined) {
      app.appendChild(pageNotFound())
  }
  else {
      app.appendChild(routes[isValidRoute])
  }
}

export default Router;

 
