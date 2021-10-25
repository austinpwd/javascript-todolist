const newFragment = document.createDocumentFragment()
const inputForm = document.createElement('input')
const addBtn = document.createElement('button')

const addToDo = function(){

    inputForm.type = 'text'
    inputForm.placeholder = 'Add New To-Do Item'
    addBtn.innerHTML = `<i class="fas fa-plus"></i>`
    
    newFragment.appendChild(inputForm)
    newFragment.appendChild(addBtn)

    return newFragment
}

export default addToDo