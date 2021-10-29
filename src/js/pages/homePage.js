import header from "../components/ui/header";
import brandingHeader from "../components/brandingHeader";
import makeElement from "../utils/makeElement";
import link from "../components/ui/link";

const newFragment = document.createDocumentFragment();
const pageHeader = document.createElement("header");
const main = document.createElement(`main`);
const linkContainer = document.createElement(`div`);
const footer = document.createElement(`footer`);

const homePage = function () {
  pageHeader.appendChild(makeElement(header()));
  pageHeader.appendChild(brandingHeader());

  linkContainer.className = "link-container";
  linkContainer.appendChild(link("Go to To-Do List app", "/todo"));

  main.appendChild(linkContainer);

  newFragment.appendChild(pageHeader);
  newFragment.appendChild(main);
  newFragment.appendChild(footer);

  return newFragment;
};

export default homePage;
