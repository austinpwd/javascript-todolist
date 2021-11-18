let store = null

function createStore (data=[]){
     if(store === null){
         store = [...data]
     }
     return store
}

function getStore(){
    return store
}

function updateStore(state){
    return store = [...state]
}

export {createStore, getStore, updateStore}


 
