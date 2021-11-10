function todoItem ({action, payload, ...rest}){

    switch(action.type){
        case "edit": return "edit employee";
        case "delete": return "remove employe with an id";
        case "add": return "create a new employee";
        default: return store
    }

}


export default reducers