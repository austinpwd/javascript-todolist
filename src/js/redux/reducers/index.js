function reducers ({action, todos = []}){
    switch(action.type){
        case 'ADD':
            return [
                ...todos,
                {

                }
            ]
        case 'EDIT':
            return "remove employe with an id";
        case 'DELETE':
            return "create a new employee";
        case 'TODO_STATUS':
            return 
        default:
            return store
    }

}


export default reducers