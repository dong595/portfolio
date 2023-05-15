
const menuItem = [
  {
    name: "Home",
    id: 1,
  },
  {
    name: "About",
    id: 2,
  },
  {
    name: "Resume",
    id: 3,
  },
  {
    name: "Services",
    id: 4,
  },
  {
    name: "Projects",
    id: 5,
  },
  {
    name: "My Blog",
    id: 6,
  },
  {
    id: 7,
    name: "Contact",
  },
];
const myCareers = [
  {
    name: "Web Designer",
    id: 1,
  },
  {
    name: "Developer",
    id: 2,
  },
  {
    name: "Photographer",
    id: 3,
  },
  {
    name: "Marketter",
    id: 4,
  },
  {
    name: "Blooger",
    id: 5,
  },
];

const headerMenuItem = document.querySelector(".menu-item");
console.log(headerMenuItem);

const menuItems = menuItem
  .map((item) => {
    return `<li class="data-menu-${item.id}"><a class="active" src"#"><span>${item.name}</span></a></li>`;
  })
  .join("");
headerMenuItem.innerHTML = menuItems;
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
  const spanElement = document.getElementsByClassName("listCareer");
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
