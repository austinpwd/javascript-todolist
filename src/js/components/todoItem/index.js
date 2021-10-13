import makeElement from "../../utils/makeElement";

function renderCategory(category) {
    switch(category) {
        case 'School':
            return 'Work';
        case 'Home':
            return 'Work';
        case 'Social':
            return 'Work';
        case 'Work':
            return 'Work';
        default:
            return 'Health';
    }
}

const todoItem = (id=``, title = ``, category =``, isCompleted = false,  startDate = ``, startTime =``, endDate = ``, endTime = ``) => {

    return document.createDocumentFragment().appendChild(makeElement(
    `
    <li>
        <div class="todo-item" data-key="${id}>
            <img src=${renderCategory(category)} alt=${renderCategory(category)}>
            <div class="content">
                <h3 class="title">${title}</h3>
                <p class="category">${category}</p>
                <p class="time"><span><i class="far fa-clock"></i></span>${startTime} - ${endTime}</p>
                <p class="date">Due: ${endDate}</p>
                <p class="is-completed">${isCompleted ? "Completed" : ""}</p>
            </div>
        </div>
        <div class="icons">
            <i class="far fa-edit"></i>
            <i class="far fa-trash-alt"></i>
        </div>
    </li>
    `
    ));
}

export default todoItem;