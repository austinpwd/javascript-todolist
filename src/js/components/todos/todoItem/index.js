import makeElement from "../../../utils/makeElement";
import header from "../../ui/header";

const todoItem = ({
  id = ``,
  title = ``,
  category = ``,
  isComplete = false,
  startDate = ``,
  startTime = ``,
  endDate = ``,
  endTime = ``,
}) => {
  return makeElement(`<div class="container__todo" data-key="${id}">
                    <div class="row-one">
                    <div class="categoryDiv">
                    <img src="${categoryImage(category)}" alt="${category}" class="container__category"">
                    <span class="category">${category}</span>
                    </div>
                    <span class="container__title">${title}</span>
                    <span class="complete">${
                      isComplete
                        ? `   <i class="fas fa-check-square fa-2x"></i>`
                        : `   <i class="fas fa-spinner fa-2x"></i>`
                    }</span>
                    </div>
                    <div class="row-two">
                    <span class="time"><b>Time</b>: ${startTime} - ${endTime}</span>
                    <span class="date"><b>Due</b>: ${endDate}</span>
                    <div class="container__icons">
                    <span class="edit-icon"><i class="fas fa-edit fa-2x"></i></span>
                    <span class="remove-icon"><i class="fas fa-trash-alt fa-2x"></i></span>
                    </div>
                    </div>
        </div>`);
};

export { todoItem };

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
};
