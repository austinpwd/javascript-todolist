import makeElement from "../../../utils/makeElement"
import header from "../../ui/header"

const todoRemove = function({id, category, title, isComplete, startDate, startTime, endDate, endTime}) {
    return makeElement(`
    <div class="container__todo" data-key="${id}">
    <span class="container__title">${title}</span>
    <p class="category"><b>Category</b>: ${category}</p>
    <p class="time"><b>Time</b>: ${startTime} - ${endTime}</p>
    <p class="date"><b>Due</b>: ${endDate}</p>
    <p class="complete"><b>Complete</b>: ${
      isComplete
        ? `Completed <i class="fas fa-check-square"></i>`
        : `In Progress <i class="fas fa-spinner"></i>`}</p>
  </div`
  )
}

export default todoRemove