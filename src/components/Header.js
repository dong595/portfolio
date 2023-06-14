import { menuItem } from "../data";

const Header = () => {
  return `<div class="header-logo">
    <a href="http://localhost:5173"><span>8x8</span> Dhip</a>
    </div>
    <div class="header-menu">
    
    <ul class="menu-item"></ul>
    <div class="hiddenMenu hidden text-3xl">&#9874;</div>

    </div>
    <div class="header-btn">
      <li class = "list-none"><a class="uppercase login font-medium hover:decoration-1 hover:text-[#3e64ff] text-[#333]" href="/login"><span class ="flex items-center gap-x-2"><i class="fa-solid fa-right-to-bracket"></i>Login</span></a></li>
      <li class = "list-none"><a class="uppercase login font-medium hover:decoration-1 hover:text-[#3e64ff] text-[#333]" href="/register"><span  class ="flex items-center gap-x-2"><i class="fa-solid fa-user-plus"></i>Register</span></a></li>
    </div>
    <div class="header__menu-icon text-3xl">&#9776;</div>
    `;
};
function renderMenu() {
  const headerMenuItem = document.querySelector(".menu-item");
  const api = "http://localhost:3000/menu";
  fetch(api)
    .then((response) => response.json())
    .then((datas) => {
      const aElement = document.querySelectorAll(".actives");
      aElement.forEach((link) => {
        link.addEventListener("click", (event) => {
          event.preventDefault(); // Prevent the default behavior of the anchor tag
          const href = event.target.getAttribute("href");
          window.location.href = href.replace("#/", "/"); // Update the URL to remove the extra '#' symbol
        });
      });
      const result = datas
        .map((data) => {
          return `<li data-menu='${data.id}' ><a class="active" href="/#/${data.name}"><span>${data.name}</span></a></li>`;
        })
        .join("");
      headerMenuItem.innerHTML = result;
    });
}

export { Header, renderMenu };
