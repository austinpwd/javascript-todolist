import {Router} from "./router/routes";
import link from "./components/ui/link";

const homePage = link({title: "Test", path: "/"});
const toDoPage = link({ title: "todo page", path: "/todo"});

const app = document.querySelector("#app");
Router('/')
app.appendChild(homePage);
app.appendChild(toDoPage);