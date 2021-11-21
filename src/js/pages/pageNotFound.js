import header from "../components/ui/header";
import tagline from "../components/ui/tagline";
import brandingHeader from "../components/brandingHeader";
import makeElement from "../utils/makeElement";
import link from "../components/ui/link";

const newFragment = document.createDocumentFragment();
const pageHeader = document.createElement("header");
const h2 = document.createElement('h2');
const layoutContainer = document.createElement("div");
const main = document.createElement(`main`);
const linkContainer = document.createElement(`div`);
const footer = document.createElement(`footer`);

const pageNotFound = function () {

  layoutContainer.className = "container"
  main.className = "container__todos"
  h2.textContent = "404 - Not Found. You are totally lost right now."

  pageHeader.append(brandingHeader());
  const title = pageHeader.querySelector('.container__headings');
  title.append(makeElement(header("span", "container__headings--title", "Austin's To Dos")));
  title.append(makeElement(tagline()));


  linkContainer.className = "link-container";
  linkContainer.append(link("take me back to safety", "/"));
  
  main.append(h2)
  main.append(linkContainer);

  layoutContainer.append(pageHeader);
  layoutContainer.append(main);
  layoutContainer.append(footer);

  newFragment.append(layoutContainer)

  return newFragment;
};

export default pageNotFound;
