import Navigo from "navigo";
const router = new Navigo("/", { linksSelector: "a" });
function render(content, target) {
  target.innerHTML = content();
}
const api = (api) => {
  return fetch(api)
    .then((response) => response.json())
    .then(data);
};
export { router, render, api };
