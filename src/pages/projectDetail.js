import { man2 } from "../utilities/index";
import { useEffect, useState } from "../lib/index";

const projectDetail = ({ id }) => {
  const api = "http://localhost:3000/projects";
  const [project, setProject] = useState({});
  useEffect(() => {
    fetch(api + "/" + id)
      .then((response) => response.json())
      .then((data) => setProject(data));
  }, []);

  return `<div class = "container flex flex-col items-center">
  <div class="admin-title"> <h2 class="text-[#333] pt-10 text-5xl text-center uppercase">Project detail</h2></div>
  <div class ="project-detail pt-10 pb-10 img-info">
  <div class ="img" style ="background-image: url(.${project.image})" ></div>
  <div class ="info" >
      <h2 class = "uppercase">${project.name}</h2>
      <p>Công nghệ sử dụng: ${project.technologies}</p>
      <p class =""> Số người tham gia dự án: ${project.people} người</p>
      <p class =""> Thời gian làm dự án: ${project.time} </p>
      <p class =""> Vị trí: ${project.role} </p>
      <a href ="${project.github}"><p><i class="fa-brands hover:text-[#3e64ff] text-5xl fa-github"></i></p></a>
  </div>
  </div>
  <div class = "relationship">
  <div class="admin-title"> <h2 class="text-[#333] pt-10 text-3xl mb-10 uppercase">related projects</h2></div>

  <div
  class="item-s"
  style="background-image: url(.${project.image})"
>
  <div class="overplay"></div>
  <div class="project-des">
    <h2>${project.name}</h2>
    <p>${project.role}</p>
  </div>
</div>

  </div>
</div>`;
};

export default projectDetail;
