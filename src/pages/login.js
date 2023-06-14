import { useEffect } from "../lib/index";
import { Header } from "../components/Header";
import { router } from "../lib/index";

const login = () => {
  useEffect(() => {
    const api = "http://localhost:3000";
    const formLogin = document.getElementById("formLogin");
    if (!formLogin) return;
    formLogin.addEventListener("submit", (e) => {
      e.preventDefault();
      const data = {
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
      };
      fetch(api + "/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          // lưu vào localStorage
          localStorage.setItem("user", JSON.stringify(data));
          if (localStorage) {
            const headerBtn = document.querySelector(".header-btn");
            headerBtn.innerHTML = `<li class = "list-none"><a class="uppercase login font-medium hover:decoration-1 hover:text-[#3e64ff] text-[#333]" href="/login"><span class ="flex items-center gap-x-2"><i class="fa-solid fa-outdent"></i>Logout</span></a></li>`;
          }
          formLogin.innerHTML = `<h2 class = "text-2xl pt-2 text-[#333]">Đăng nhập thành công</h2>`;
        });
    });
  });
  return `
    <form action="" id="formLogin" class = "flex  flex-col justify-center  items-center  mb-5">
    <h2 class = "font-bold pt-2 text-5xl uppercase text-[#3e64ff] mb-5" >Login</h2>
    <div class = "">
    <label class = "uppercase text-[#3e64ff] " for="">Name</label> <br>
        <input id = "email" class = "border-solid pl-2 bg-white w-72 h-12 text-xl text-[#3e64ff] outline-0 border border-[#3e64ff] rounded my-3 " type="email">
    </div>
    <div class = "">
        <label class = "uppercase text-[#3e64ff] " for="">Password</label> <br>
    <input id = "password" class = "border-solid pl-2 bg-white w-72 h-12 text-xl text-[#3e64ff] outline-0 border border-[#3e64ff] rounded my-3 " type="password">
        </div>
        <button type = "submit" class = "text-btn">Login</button>
    </form>
`;
};

export default login;
