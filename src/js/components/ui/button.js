import makeElement from "../../utils/makeElement";

const button = function (text = "ui button", type = "button", titleAttribute = "button", className = "ui-button") {
  const template = `<button class="${className}" title="${titleAttribute}" type="${type}">${text}</button>`;
  const element = makeElement(template);

  return element;
};

export default button;
