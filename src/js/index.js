import {createStore} from "./redux/store";
import {dataFetcher}  from "./utils/dataFetcher";
import {Router} from "./routes/router";

const app = document.querySelector("#app");

Router(window.location.pathname);

const init = async function() {
    let data = await dataFetcher("./data/todos.json");
    createStore(data);
}

window.addEventListener('load', init)