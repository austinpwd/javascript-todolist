import homePage from "../pages/homePage";
import toDoPage from "../pages/toDoPage";
import addToDoPage from "../pages/addToDoPage";
import editToDoPage from "../pages/editToDoPage";
import removeToDoPage from "../pages/removeToDoPage";
import pageNotFound from "../pages/pageNotFound";

const routes = {
  "/": homePage,
  "/todo": toDoPage,
  "/add-todo": addToDoPage,
  "/edit-todo": editToDoPage,
  "/remove-todo": removeToDoPage
};

const Router = (pathname, params=null) => {

  const validRoute = Object.keys(routes).find((path) => path === pathname);

  const app = document.querySelector("#app");
  app.innerHTML = "";
  window.history.pushState({}, pathname, window.location.origin + pathname);

  validRoute !== undefined
    ? app.appendChild(routes[validRoute](params))
    : app.appendChild(pageNotFound());
}

export {Router};
