import {createStore} from "./redux/store";
import {dataFetcher}  from "./utils/dataFetcher";
import Router from "./routes/router";

const onAppInit = async function() {
    let data = await dataFetcher("./data/todos.json");
    createStore(data);
    Router(window.location.pathname);
}

window.addEventListener('load', onAppInit)
