const education = () => {
  // const result =
  const categories = document.querySelectorAll(".category-link");
  categories.forEach((e) => {
    e.addEventListener("click", () => {
      categories.forEach((category) => {
        category.classList.remove("active");
      });
      e.classList.add("active");
    });
  });
};

export default education;
