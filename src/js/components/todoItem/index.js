import dataFetcher from "../../utils/dataFetcher";
import makeElement from "../../utils/makeElement";

const todoItem = function (elementType="li", title=null){
    const newFragment = document.createDocumentFragment();
    items = dataFetcher('../data/todos.json')
    renderToDoItems(items)

    function renderToDoItems(items) {
        let dataKey;
        let category;
        let startDate;
        let startTime;
        let endDate;
        let endTime;
        let isComplete = false;

        items.forEach((item) => {
            dataKey = item.id;
            category = item.category;
            title = item.title;
            isComplete = item.isComplete;
            startDate = item.startDate;
            startTime = item.startTime;
            endDate = item.endDate;
            endTime = item.endTime;


            const element = `<${elementType} data-key="${dataKey}">
            ${category},
            ${title},
            ${isComplete},
            ${startDate},
            ${startTime},
            ${endDate},
            ${endTime}
            </${elementType}>`
            newFragment.appendChild(makeElement(element))

        });
      }

    return newFragment
}

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