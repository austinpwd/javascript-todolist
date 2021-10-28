import makeElement from '../../utils/makeElement';

const todoItem = (id=``, title = ``, category =``, isCompleted = false,  startDate = ``, startTime =``, endDate = ``, endTime = ``) => {
    return makeElement((`<li class="todo-item" data-key="${id}">
                    <h3 class="title"><b>Title</b>: ${title}</h3>
                    <p class="category"><b>Category</b>: ${category}</p>
                    <p class="time"><b>Time</b>: ${startTime} - ${endTime}</p>
                    <p class="date"><b>Due</b>: ${endDate}</p>
                    <p class="is-completed"><b>Status</b>: ${isCompleted ? `Completed <i class="fas fa-check-square"></i>` 
                    : `In Progress <i class="fas fa-spinner"></i>`}</p>
                    <span class="icon"><i class="far fa-edit"><p>Edit</p></i></span>
                    <span class="icon"><i class="far fa-trash-alt"><p>Remove</p></i></span>
        </li>`));
}

export {todoItem};