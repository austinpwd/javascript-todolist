import homePage from "../pages/homePage";
import toDoPage from "../pages/toDoPage";
import addToDoPage from "../pages/addToDoPage";
import editToDoPage from "../pages/editToDoPage";
import removeToDoPage from "../pages/removeToDoPage";
import pageNotFound from "../pages/pageNotFound";

const routes = {
  "/": homePage(),
  "/todo": toDoPage(),
  "/add-todo": addToDoPage(),
  "/edit-todo": editToDoPage(),
  "/remove-todo": removeToDoPage()
};

function Router(pathname) {
  const validRoute = Object.keys(routes).find((path) => path === pathname);

  const app = document.querySelector("#app");
  app.innerHTML = "";
  window.history.pushState({}, pathname, window.location.origin + pathname);

  validRoute !== undefined
    ? app.appendChild(routes[window.location.pathname])
    : app.appendChild(pageNotFound());
}

export default Router;
