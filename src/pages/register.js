import { router, useEffect } from "../lib/index";
import { Header } from "../components/Header";

const Register = () => {
  useEffect(() => {
    const api = "http://localhost:3000/users";
    const formRegister = document.getElementById("formRegister");
    if (!formRegister) return;
    formRegister.addEventListener("submit", (e) => {
      e.preventDefault();
      const data = {
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
      };
      fetch(api + "/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then(() => {
          formRegister.innerHTML = `<h2 class = "text-2xl pt-2 text-[#333]">Đăng ký thành công</h2>`;
          setTimeout(() => {
            window.location.href = "/login";
          }, 3000);
        });
    });
  });
  return `
    <form action="" id="formRegister" class = "flex  flex-col justify-center  items-center mt-10 mb-5">
    <h2 class = "font-bold pt-2 text-5xl uppercase text-[#3e64ff] mb-5" >Register</h2>
    <div class = "">
    <label class = "uppercase text-[#3e64ff] " for="">Email</label> <br>
        <input id = "email" class = "border-solid pl-2 bg-white w-72 h-12 text-xl text-[#3e64ff] outline-0 border border-[#3e64ff] rounded my-3 " type="email">
    </div>
    <div class = "">
        <label class = "uppercase text-[#3e64ff] " for="">Password</label> <br>
    <input id = "password" class = "border-solid pl-2 bg-white w-72 h-12 text-xl text-[#3e64ff] outline-0 border border-[#3e64ff] rounded my-3 " type="password">
        </div>
    
        <button type = "submit" class = "text-btn">Register</button>
    </form>
`;
};

export default Register;
