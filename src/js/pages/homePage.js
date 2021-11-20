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
  pageHeader.append(makeElement(header()));
  pageHeader.append(brandingHeader());

  linkContainer.className = "link-container";
  linkContainer.append(link("Go to To-Do List app", "/todo"));

  main.append(linkContainer);

  newFragment.append(pageHeader);
  newFragment.append(main);
  newFragment.append(footer);

  return newFragment;
};

export default homePage;
