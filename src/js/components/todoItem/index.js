import makeElement from "../../utils/makeElement";

const newFragment = document.createDocumentFragment();
const itemContainer = newFragment.querySelector('#li')
const currentItem = newFragment.querySelector('#todo-item');
const content = currentItem.querySelector('#content')
const icons = content.querySelector('#icons')

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
    const newFragment = document.createDocumentFragment();

    newFragment.appendChild(makeElement(`<li>`));

    itemContainer.appendChild(makeElement(`<div class="todo-item" data-key="${id}>`));
    itemContainer.appendChild(makeElement(`<div class="icons">`));

    currentItem.appendChild(makeElement(`<img src={quotesWrap(renderCategory(category))} alt={quotesWrap(renderCategory(category))}>`));
    currentItem.appendChild(makeElement(`<div class="content">`));

    content.appendChild(makeElement(`<h3 class="title">${title}</h3>`));
    content.appendChild(makeElement(`<p class="category">${category}</p>`));
    content.appendChild(makeElement(`<p class="time"><span><i class="far fa-clock"></i></span>${startTime} - ${endTime}</p>`));
    content.appendChild(makeElement(`<p class="date">Due: ${endDate}</p>`));
    content.appendChild(makeElement(`<p class="is-completed">${isCompleted ? "Completed" : ""}</p>`));


    icons.appendChild(makeElement(`<i class="far fa-edit"></i>`));
    icons.appendChild(makeElement(`<i class="far fa-trash-alt"></i>`));

    newFragment.appendChild(makeElement(`</div>`));
    newFragment.appendChild(makeElement(`</div>`));
    newFragment.appendChild(makeElement(`</li>`));

    return newFragment;
}

export default todoItem;