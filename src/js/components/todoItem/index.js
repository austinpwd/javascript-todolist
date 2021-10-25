import {TiEdit as EditIcon} from 'react-icons/ti';
import {RiCloseCircleLine as DeleteIcon} from 'react-icons/ri';
import makeElement from '../../utils/makeElement';

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

    return makeElement((`<li>
                <div class="todo-item" data-key="${id}>
                <img src=${renderCategory(category)} alt=${renderCategory(category)}>
                <div class="content">
                    <h3 class="title">${title}</h3>
                    <p class="category">${category}</p>
                    <p class="time"><span><i class="far fa-clock"></i></span>${startTime} - ${endTime}</p>
                    <p class="date">Due: ${endDate} (Started on ${startDate})</p>
                    <p class="is-completed">${isCompleted ? "Completed" : ""}</p>
                </div>
            </div>
            <div class="icons">
                <i class="${EditIcon}"></i>
                <i class="${DeleteIcon}"></i>
            </div>
        </li>`));
}

export {todoItem};