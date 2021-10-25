import makeElement from '../../utils/makeElement';
import addIcon from '../../icons/addIcon';
import editIcon from '../../icons/editIcon';
import trashIcon from '../../icons/trashIcon';

function renderCategory(category) {
    switch(category) {
        case 'School':
            return 'School';
        case 'Home':
            return 'Home';
        case 'Social':
            return 'Social';
        case 'Work':
            return 'Work';
        default:
            return 'Health';
    }
}

const todoItem = (id=``, title = ``, category =``, isCompleted = false,  startDate = ``, startTime =``, endDate = ``, endTime = ``) => {

    return makeElement((`<li class="todo-item" data-key="${id}">
                <div class="content">
                <img src="${renderCategory(category)}" alt="${renderCategory(category)}"">
                    <h3 class="title">${title}</h3>
                    <p class="category">${category}</p>
                    <p class="time">${startTime} - ${endTime}</p>
                    <p class="date">Due: ${endDate} (Started on ${startDate})</p>
                    <p class="is-completed">${isCompleted ? "Completed" : "In Progress"}</p>
                </div>
            <div class="icons">
            <i class="add-todo">${addIcon()}</i>
            <i class="edit-todo">${editIcon()}</i>
            <i class="trash-todo">${trashIcon()}</i>
            </div>
        </li>`));
}

export {todoItem};