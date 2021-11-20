import {Router} from "./routes/router";
import {dataFetcher} from "./utils/dataFetcher";
import {createStore} from "./redux";

const onAppInit = async function(e){
    let todos = await dataFetcher('../data/todos.json')

    if(todos[0].id === undefined){
        todos = [...keyGenerator(todos)]
    }

    createStore(todos)
    Router(window.location.pathname)
   
}

window.addEventListener('load', onAppInit)
