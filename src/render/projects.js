import { projectsItem } from "../utilities/index.js";

const projects = () => {
  const api = "http://localhost:3000/projects";
  fetch(api)
    .then((response) => response.json())
    .then((datas) => {
      const results = datas
        .map((data, index) => {
          return `
        <a href ="/project/${index + 1}">
        <div
        class="item-s"
        style="background-image: url(${data.image})"
      >
        <div class="overplay"></div>
        <div class="project-des ">
          <h2 class ="uppercase">${data.name}</h2>
          <p class ="uppercase">${data.technologies}</p>
        </div>
      </div>
        </a>
        `;
        })
        .join("");
      projectsItem.innerHTML = results;
    });
};

export default projects;
