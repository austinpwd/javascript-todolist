import dataFetcher from "../../utils/dataFetcher";
import makeElement from "../../utils/makeElement";

const date = 'Wednesday, November 12th'
const newFragment = document.createDocumentFragment();

todoItem(title='') = {
    id:string,
    title:string,
    category:string,
    isCompleted:boolean
}

    function renderToDoItems(items) {

        items.forEach((item) => {
            currentToDo = todoItem(item.title);

            const element = `<li data-key="${currentToDo.id}">
            ${currentToDo.isCompleted},
            ${currentToDo.title},
            ${currentToDo.category},
            ${date}
            </li>`
            newFragment.appendChild(makeElement(element))
        }
    }
    items = dataFetcher('../data/todos.json')
    renderToDoItems(items)   

export default todoItem

/* 
{
    "id": "aw45f25v",
    "category": "friends",
    "title": "Poss imusa dip is icing",
    "isComplete": true,
    "startDate": "Wednesday September 3rd",
    "startTime":"9:00am",
    "endDate": "Wednesday September 3rd",
    "endTime":"9:00am"
    }
*/