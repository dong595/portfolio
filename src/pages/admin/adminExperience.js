import { useEffect, useState } from "../../lib/index";
import { man2 } from "../../utilities/index";

const adminExperience = () => {
  const api = "http://localhost:3000/Experience";
  const [products, setProducts] = useState([]); // 1
  useEffect(() => {
    fetch(api)
      .then((response) => response.json())
      .then((datas) => setProducts(datas));
  }, []);
  useEffect(() => {
    const btns = document.querySelectorAll(".btn-remove");
    for (let btn of btns) {
      const id = btn.dataset.id;
      btn.addEventListener("click", (e) => {
        const confirm = window.confirm(
          "Are you  sure you want to delete this item?"
        );
        if (!confirm) return;
        fetch(api + "/" + id, {
          method: "DELETE",
        }).then(() => {
          setProducts(products.filter((product) => product.id != id));
        });
      });
    }
  });

  return `
        <div class="container ">
        <div class="admin-title"> <h2 class="text-[#333] pt-10 text-5xl text-center uppercase">admin page</h2></div>
        <a class = "text-btn mt-5 mb-5 " style ="padding:20px 50px" href="/admin/addExperience">Add</a>
        <div class="table-admin flex flex-col ">
         
        <table border="1" class ="mt-20 table-auto border-collapse" >
            <thead>
                <tr>
                    <th class = "border text-center border-slate-600 uppercase text-xl text-[#333] " style = "min-width:40px">Id</th>
                    <th class = "border text-center border-slate-600 uppercase text-xl text-[#333] " style = "min-width:40px">Name</th>
                    <th class = "border text-center border-slate-600 uppercase text-xl text-[#333] " style = "min-width:40px;width:100px">Year </th>
                    <th class = "border text-center border-slate-600 uppercase text-xl text-[#333] " style = "min-width:40px">Position</th>
                    <th class = "border text-center border-slate-600 uppercase text-xl text-[#333] " style = "min-width:40px">descreption</th>
                    <th class = "border text-center border-slate-600 uppercase text-xl text-[#333] " style = "min-width:40px">Action</th>
                </tr>
            </thead>
            <tbody>
     ${products
       .map((product, index) => {
         return `
         <tr>
           <td
             class="text-center border border-slate-300 "
             style=" min-width:40px"
           >
             ${index + 1}
           </td>
           <td
             class="text-center border border-slate-300 "
             style=" min-width:40px"
           >
             ${product.name}
           </td>
           <td
             class="text-center border border-slate-300 "
             style=" min-width:40px;width:100px"
           >
             ${product.year}
           </td>
           <td
             class="text-center border border-slate-300 "
             style=" min-width:40px"
           >
             ${product.position}
           </td>
           <td
             class="text-center border border-slate-300 "
             style=" min-width:40px"
           >
             ${product.descreption}
           </td>
           <td class="flex flex-col border border-slate-300">
             <a
               class="text-btn mt-5 mb-5 a"
               style="padding:20px 50px"
               href="/admin/${index + 1}/updateExperience"
             >
               Update
             </a>
             <a
               class="btn-remove text-btn mt-5 mb-5 "
               data-id="${index + 1}"
               style="padding:20px 50px"
             >
               Delete
             </a>
           </td>
         </tr>`;
       })
       .join("")}
       </tbody>
       </table>
       </div>
       </div>`;
};

export default adminExperience;
