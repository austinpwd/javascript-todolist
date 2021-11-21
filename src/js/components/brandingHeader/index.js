import logo from "../../icons/logo";
import header from "../ui/header";
import makeElement from "../../utils/makeElement";

const brandingHeader = function () {
  const newFragment = document.createDocumentFragment();

  newFragment.appendChild(makeElement(logo()));
  newFragment.appendChild(makeElement(header()))
  return newFragment;
};

export default brandingHeader;
