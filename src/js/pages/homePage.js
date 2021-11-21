import header from "../components/ui/header";
import tagline from "../components/ui/tagline";
import brandingHeader from "../components/brandingHeader";
import makeElement from "../utils/makeElement";
import link from "../components/ui/link";

const homePage = function () {
  const newFragment = document.createDocumentFragment();
  const pageHeader = document.createElement("header");
  const layoutContainer = document.createElement("div");
  const main = document.createElement(`main`);
  const linkContainer = document.createElement(`div`);
  const footer = document.createElement(`footer`);

  layoutContainer.className = "container"
  main.className = "container__todos"

  pageHeader.append(brandingHeader());
  const title = pageHeader.querySelector('.container__headings');
  title.append(makeElement(header("span", "container__headings--title", "Austin's To Dos")));
  title.append(makeElement(tagline()));


  linkContainer.className = "container__todo";
  linkContainer.append(link("<h2>Go to the To Do List app!</h2>", "/todo"));

  main.append(linkContainer);

  layoutContainer.append(pageHeader);
  layoutContainer.append(main);
  layoutContainer.append(footer);

  newFragment.append(layoutContainer);

  return newFragment;
};

export default homePage;
