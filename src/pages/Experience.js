import { postContainer } from "../utilities/index";

const experience = () => {
  const apiExperience = "http://localhost:3000/Experience";

  fetch(apiExperience)
    .then((res) => res.json())
    .then((datas) => {
      postContainer.innerHTML = `
      <h4>Experience</h4>
        ${datas
          .map((data) => {
            return `
            <div class="item">
            <div class="item-body flex justify-center">
              <div class="item-icon text-5xl">
                <i class="fa fa-globe" style="font-size: 36px"></i>
                <div></div>
              </div>
              <div class="item-text">
                <p class="item-years">${data.year}</p>
                <h3 class="item-name">
                  ${data.name}
                </h3>
                <h4 class="item-position">${data.position}</h4>
                <span class="item-des">${data.descreption}</span>
              </div>
            </div>
          </div>
            
            `;
          })
          .join(" ")}
      `;
    });
};

export default experience;
