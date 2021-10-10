import {Router} from "./router/routes";
import link from "./components/ui/link";
import homePage from "./pages/home";


const app = document.querySelector("#app");

window.addEventListener('load', function(evt){
    console.log(app)
    Router('/')
    app.appendChild("test");
    console.log(app)
})