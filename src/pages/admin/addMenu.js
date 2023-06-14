import { useEffect } from "../../lib/index";

const addMenu = () => {
  useEffect(() => {
    const formAdd = document.getElementById("formAdd");
    const api = "http://localhost:3000/menu";
    if (!formAdd) return;
    formAdd.addEventListener("submit", (e) => {
      e.preventDefault();
      const data = {
        name: document.getElementById("name").value,
      };
      fetch(api, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then(() => {
        formAdd.innerHTML = `<h2 class = "text-2xl pt-2 text-[#333]">Add succsess</h2>`;
        setTimeout(() => {
          window.location.href = "/admin";
        }, 3000);
      });
    });
  });
  return `<div class = "container">
  <div class="admin-title"> <h2 class="text-[#333] pt-10 text-5xl text-center uppercase">Page Add</h2></div>
  <div>
  <form action="" id="formAdd" class = "flex  flex-col justify-center  items-center -10 mb-10">
  <div class = "">
  <label class = "uppercase text-[#3e64ff] " for="">Name</label> <br>
      <input id = "name" class = "border-solid pl-2 bg-white w-72 h-12 text-xl text-[#3e64ff] outline-0 border border-[#3e64ff] rounded my-3 " type="text">
  </div>
      <button type = "submit" class = "text-btn">ADD</button>
  </form>
  </div>
  </div>`;
};

export default addMenu;
