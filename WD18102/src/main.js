import { myCareers } from "./fakeApi";
import { Header, renderMenu } from "./components/header";
const spanElement = document.getElementsByClassName("listCareer");
const spanElementParent = document.querySelector(".home-text h2  span");
const header = document.querySelector(".header");

function start() {
  renderHeader();
  slideHome();
  renderMenu();
}
start();

// render header

function renderHeader() {
  header.innerHTML = Header();
}

// render header

/** slideHome */

function slideHome() {
  const listCareer = myCareers
    .map((myCareer) => {
      return `<span class="listCareer">${myCareer.name}</span>`;
    })
    .join(" ");
  let slideIndex = 0;
  showSlides();
  function showSlides() {
    let i;
    spanElementParent.innerHTML = listCareer;

    for (i = 0; i < spanElement.length; i++) {
      spanElement[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > spanElement.length) {
      slideIndex = 1;
    }
    spanElement[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2000);
  }
}
