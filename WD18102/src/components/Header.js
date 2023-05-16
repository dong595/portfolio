import { menuItem } from "../fakeApi";
const Header = () => {
  return `<div class="header-logo">
    <a href="#"><span>8x8</span> Dhip</a>
    </div>
    <div class="header-menu">
    <ul class="menu-item"></ul>
    </div>`;
};
function renderMenu() {
  const headerMenuItem = document.querySelector(".menu-item");
  const menuItems = menuItem
    .map((item) => {
      return `<li class="data-menu-${item.id}"><a class="active" src"#"><span>${item.name}</span></a></li>`;
    })
    .join("");
  headerMenuItem.innerHTML = menuItems;
}

export { Header, renderMenu };
