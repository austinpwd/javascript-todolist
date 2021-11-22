import makeElement from "../../../utils/makeElement"

const todoRemove = function({id, category, title, isComplete, startDate, startTime, endDate, endTime}) {
    return makeElement(`
    <div class="container__todo__form" data-key="${id}">
    <div class="flex-one">
    <img src="${categoryImage(category)}" alt="${category}" class="container__category">
    <span class="container__title">${title}</span>
    </div>
    <div class="flex-two">
    <span class="category">${category}</span>
    <span class="complete">${
      isComplete
        ? `   <i class="fas fa-check-square fa-3x"></i>`
        : `   <i class="fas fa-spinner fa-3x"></i>`
    }</span>
    </div>
    <div class="flex-three">
    <div class="container__details">
    <span class="time"><b>Time</b>: ${startTime} - ${endTime}</span>
    <span class="date"><b>Due</b>: ${endDate}</span>
    </div>
</div>`
  )
}

export default todoRemove

const categoryImage = (category) => {
  switch (category) {
    case "Social":
      return "img/social.webp";
    case "Work":
      return "img/work.webp";
    case "Health":
      return "img/health.webp";
    case "School":
      return "img/school.webp";
    case "Home":
      return "img/home.webp";
    default:
      return "img/philosophy.webp";
  }
}