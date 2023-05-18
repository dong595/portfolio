import Navigo from "navigo";
function render(content, target) {
  target.innerHTML = content();
}
const router = new Navigo("/", { linksSelector: "a", hash: true });
export { router, render };
