import makeElement from "../../utils/makeElement";

const button = function (text = "ui button", titleAttribute = "button", className = "ui-button") {
  const template = `<button class="${className}" title="${titleAttribute}">${text}</button>`;
  const element = makeElement(template);

  return element;
};

export default button;
