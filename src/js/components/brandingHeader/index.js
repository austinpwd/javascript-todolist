import logo from "../../icons/logo";
import tagline from "../../components/ui/tagline";
import makeElement from "../../utils/makeElement";

const brandingHeader = function () {
  const newFragment = document.createDocumentFragment();

  newFragment.appendChild(makeElement(logo()));
  newFragment.appendChild(makeElement(tagline()));
  return newFragment;
};

export default brandingHeader;
