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
import { man2, postContainer } from "./utilities";
import Awards from "./pages/Awards";
import login from "./pages/login";
import Register from "./pages/register";
import admin from "./pages/admin/adminEducation";
import add from "./pages/admin/addEducation";
import update from "./pages/admin/updateEducation";
import projects from "./render/projects";
import projectDetail from "./pages/projectDetail";
import adminExperience from "./pages/admin/adminExperience";
import addExperience from "./pages/admin/addExperience";
import adminPage from "./pages/admin/adminPage";
import adminAwards from "./pages/admin/adminAwards";
import updateAwards from "./pages/admin/updateAwards";
import addAwards from "./pages/admin/addAwards";
import Skills from "./pages/Skills";
import adminMenu from "./pages/admin/adminMenu";
import addMenu from "./pages/admin/addMenu";
import updateMenu from "./pages/admin/updateMenu";
import adminCategories from "./pages/admin/adminCategories";
import updateCategories from "./pages/admin/updateCategories";
import addCategories from "./pages/admin/addCategories";
import addAbout from "./pages/admin/addAbout";
import adminAbout from "./pages/admin/adminAbout";
import updateAbout from "./pages/admin/updateAbout";
import adminProjects from "./pages/admin/adminProjects";
import addProjects from "./pages/admin/addProjects";
import updateProjects from "./pages/admin/updateProjects";

const header = document.querySelector(".header");
const spanElement = document.getElementsByClassName("listCareer");
const app = document.querySelector("#app");

const router = new Navigo("/", { linksSelector: "a" });
router.on("/education", () => render(education, postContainer));
router.on("/experiences", () => render(experience, postContainer));
router.on("/skills", () => render(Skills, postContainer));
router.on("/awards", () => render(Awards, postContainer));
router.on("/login", () => render(login, man2));
router.on("/register", () => render(Register, man2));
router.on("/project/:id", ({ data }) =>
  render(() => projectDetail(data), man2)
);
router.on("/admin", () => render(adminPage, man2));
router.on("/admin/*", () => {}, {
  before(next) {
    const { user } = JSON.parse(localStorage.getItem("user")) || {};
    if (!user) return (window.location.href = "/");
    if (user && user.id != "2") return (window.location.href = "/login");
    next();
  },
});
router.on("/admin/adminMenu", () => render(adminMenu, man2));
router.on("/admin/addMenu", () => render(addMenu, man2));
router.on("/admin/:id/updateMenu", ({ data }) =>
  render(() => updateMenu(data), man2)
);
router.on("/admin/adminAbout", () => render(adminAbout, man2));
router.on("/admin/addAbout", () => render(addAbout, man2));
router.on("/admin/:id/updateAbout", ({ data }) =>
  render(() => updateAbout(data), man2)
);
router.on("/admin/adminCategories", () => render(adminCategories, man2));
router.on("/admin/addCategories", () => render(addCategories, man2));
router.on("/admin/:id/updateCategories", ({ data }) =>
  render(() => updateCategories(data), man2)
);
router.on("/admin/adminEducation", () => render(admin, man2));
router.on("/admin/addEducation", () => render(add, man2));
router.on("/admin/:id/updateEducation", ({ data }) =>
  render(() => update(data), man2)
);
router.on("/admin/adminExperience", () => render(adminExperience, man2));
router.on("/admin/addExperience", () => render(addExperience, man2));
router.on("/admin/:id/updateExperience", ({ data }) =>
  render(() => update(data), man2)
);
router.on("/admin/adminAwards", () => render(adminAwards, man2));
router.on("admin/addAwards", () => render(addAwards, man2));
router.on("/admin/:id/updateAwards", ({ data }) =>
  render(() => updateAwards(data), man2)
);
router.on("/admin/adminProjects", () => render(adminProjects, man2));
router.on("admin/addProjects", () => render(addProjects, man2));
router.on("/admin/:id/updateProjects", ({ data }) =>
  render(() => updateProjects(data), man2)
);
function start() {
  renderHeader();
  slideHome();
  renderMenu();
  renderAboutMe();
  renderCategories();
  menuBar();
  projects();
  education();
  experience();
  Awards();
}
start();

function renderHeader() {
  header.innerHTML = Header();
}

function menuBar() {
  const menuBar = document.querySelector(".header__menu-icon");
  const headerMenu = document.querySelector(".header-menu");
  headerMenu.style.transition = "all .5s";
  menuBar.addEventListener("click", (e) => {
    const headerLogo = document.querySelector(".header-logo");
    const menuHidden = document.querySelector(".hiddenMenu");
    const header = document.querySelector(".header");

    header.style.padding = "0";
    headerMenu.style.display = "block";
    headerMenu.style.marginTop = "auto";
    headerMenu.style.transform = "translatey(0)";
    menuHidden.style.display = "block";
    menuBar.style.display = "none";
    headerLogo.style.display = "none";
    menuHidden.addEventListener("click", () => {
      headerMenu.style.transform = "translatey(-100%)";
      menuBar.style.display = "block";
      headerLogo.style.display = "block";
      header.style.padding = "15px";
      headerMenu.style.marginTop = "0";
    });
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
        <div class="img"style ="background-image: url(.${data.imgUrl})" >
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
