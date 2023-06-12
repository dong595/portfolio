import { myCareers } from "./data";
import { Header, renderMenu } from "./components/Header";
import { render } from "./lib/index";
import notFound from "./pages/notFound";
import Navigo from "navigo";
import education from "./pages/Education";
import experience from "./pages/Experience";
import {
  renderCategories,
  categoriesBox,
  categories,
} from "./render/categories";
import { postContainer } from "./utilities";
import Awards from "./pages/Awards";

const header = document.querySelector(".header");
const router = new Navigo("/", { linksSelector: "a" });
router.on("/education", () => render(education, postContainer));
router.on("/experiences", () => render(experience, postContainer));
router.on("/awards", () => render(Awards, postContainer));
const spanElement = document.getElementsByClassName("listCareer");
const app = document.querySelector("#app");
function start() {
  renderHeader();
  slideHome();
  renderMenu();
  renderAboutMe();
  renderCategories();
  menuBar();

  education();
  experience();
  Awards();

  renderPosts();
}
start();

function renderHeader() {
  header.innerHTML = Header();
}

function menuBar() {
  const menuBar = document.querySelector(".header__menu-icon");
  const headerMenu = document.querySelector(".header-menu");
  const headerLogo = document.querySelector(".header-logo");
  const menuHidden = document.querySelector(".hiddenMenu");
  const header = document.querySelector(".header");

  headerMenu.classList.add("transition");

  menuBar.addEventListener("click", () => {
    header.style.padding = "0";
    headerMenu.style.display = "block";
    headerMenu.style.marginTop = "auto";
    headerMenu.style.transform = "translatey(0)";
    menuHidden.style.display = "block";
    menuBar.style.display = "none";
    headerLogo.style.display = "none";
  });

  document.addEventListener("click", (e) => {
    if (e.target === menuHidden) {
      headerMenu.style.transform = "translatey(-100%)";
      menuBar.style.display = "block";
      headerLogo.style.display = "block";
      header.style.padding = "15px";
      headerMenu.style.marginTop = "0";
    }
  });
}

// render header
function renderAboutMe() {
  const dataAboutMe = "http://localhost:3000/aboutMe";
  const aboutMe = document.querySelector(".about-me");
  fetch(dataAboutMe)
    .then((res) => res.json())
    .then((data) => {
      const body = data.map((data) => {
        return `<div class="img-info  flex justify-center">
        <div class="img">
        </div>
        <div class="info">
          <h2>About Me</h2>
          <p>
            A small river named Duden flows by their place and supplies it
            with the necessary regelialia.
          </p>
          <ul>
            <li><span>Name:</span><span>${data.name}</span></li>
            <li><span>Date of birth:</span><span>${data.date}</span></li>
            <li>
              <span>Address:</span
              ><span>${data.location}</span>
            </li>
            <li><span>Zip code:</span><span>${data.zipCode}</span></li>
            <li><span>Email:</span><span>${data.email}</span></li>
            <li><span>Phone:</span><span>${data.phoneNumber}</span></li>
          </ul>
          <div class="text">
            <p>
              <span> 282 </span>
              <span>Project complete</span>
            </p>
            <button type="submit" class = "text-btn">Download CV</button>
          </div>
        </div>
      </div>
            `;
      });
      // console.log(body);
      aboutMe.innerHTML = body.join("");
    });
}

/** not found pages */
function renderNotFound() {
  router.notFound(() => {
    render(notFound, app);
  });
}

/** slideHome */

function slideHome() {
  const spanElementParent = document.querySelector(".home-text h2  span");
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
router.resolve();
