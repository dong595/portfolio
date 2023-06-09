import { postContainer } from "../utilities/index";

const Awards = () => {
  const apiAward = "http://localhost:3000/Awards";
  fetch(apiAward)
    .then((response) => response.json())
    .then((datas) => {
      // Destructure the data array to get individual post objects
      // Use the destructured values to render the first post's education and experience
      //   console.log(datas);
      postContainer.innerHTML = `
        <h4>Awards</h4> 
          ${datas
            .map((data) => {
              return `
              <div class="item">
              <div class="item-body flex justify-center">
                <div class="item-icon text-5xl">
                  <i class="fa fa-address-card-o" style="font-size: 36px"></i>
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
      // Use the rest of the posts to render a list
    });
};

export default Awards;
