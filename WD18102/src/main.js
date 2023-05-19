import { myCareers } from "./data";
import { Header, renderMenu } from "./components/Header";
import { router, render } from "./utilities";
import notFound from "./pages/notFound";

const spanElement = document.getElementsByClassName("listCareer");
const app = document.querySelector("#app");
function start() {
  renderHeader();
  slideHome();
  renderMenu();
  renderAboutMe();
  renderListItem();
  renderListCv();
}
start();

function renderHeader() {
  const header = document.querySelector(".header");
  header.innerHTML = Header();
}
// render header
function renderAboutMe() {
  const dataAboutMe = "http://localhost:3000/aboutMe";
  const aboutMe = document.querySelector(".about-me");
  fetch(dataAboutMe)
    .then((res) => res.json())
    .then((data) => {
      const body = data.map((data) => {
        return `<div class="img-info flex justify-center">
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
      <div class="technology grid-cols-5">
          <img clas src="./img/partner-1.png.webp" alt="" />
          <img clas src="./img/partner-2.png.webp" alt="" />
          <img clas src="./img/partner-3.png.webp" alt="" />
          <img clas src="./img/partner-4.png.webp" alt="" />
          <img clas src="./img/partner-5.png.webp" alt="" />
        </div>
            `;
      });
      console.log(body);
      aboutMe.innerHTML = body.join("");
    });
}
/** render list Cv */
function renderListCv() {
  const apiCv = "http://localhost:3000/myCv";
  const listCv = document.querySelector(" .list");
  console.log(listCv);
  fetch(apiCv)
    .then((res) => res.json())
    .then((data) => {
      const result = data
        .map((item) => {
          return `<li><a href="">${item.name}</a></li>`;
        })
        .join(" ");
      listCv.innerHTML = result;
    });
}
/** render list item */
function renderListItem() {
  const apiListItem = "http://localhost:3000/Education";
  const listItem = document.querySelector(".item-list");
  console.log(listItem);
  fetch(apiListItem)
    .then((res) => res.json())
    .then((data) => {
      const result = data
        .map((item) => {
          return `<div class="item">
      <div class="item-body flex justify-center">
        <div class="item-icon">
          icon
          <div></div>
        </div>
        <div class="item-text">
          <p class="item-years">${item.year}</p>
          <h3 class="item-name">${item.name}</h3>
          <h4 class="item-position">${item.position}</h4>
          <span class="item-des"
            >${item.descreption}</span>
        </div>
      </div>
    </div>`;
        })
        .join("");
      listItem.innerHTML = result;
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
