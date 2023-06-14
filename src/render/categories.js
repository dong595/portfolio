import { useEffect, useState } from "../lib/index";

export const categories = () => {
  const categories = document.querySelectorAll(".category-link");
  console.log(categories);
  categories.forEach((e) => {
    e.addEventListener("click", () => {
      categories.forEach((category) => {
        category.classList.remove("active");
      });
      e.classList.add("active");
    });
  });
};
export const categoriesBox = document.querySelector(".list");

export const renderCategories = () => {
  const apiCategories = "http://localhost:3000/categories";

  fetch(apiCategories)
    .then((response) => response.json())
    .then((categories) => {
      useEffect(() => {
        const categories = document.querySelectorAll(".category-link");
        console.log(categories);
        categories.forEach((e) => {
          e.addEventListener("click", (event) => {
            categories.forEach((category) => {
              category.classList.remove("active");
            });
            e.classList.add("active");
          });
        });
      });
      const result = categories
        .map((category) => {
          return ` <li >
          <a class="category-link"  href="#/${category.name}"> ${category.name}</a>
        </li>`;
        })
        .join("");
      categoriesBox.innerHTML = result;
    });
};
