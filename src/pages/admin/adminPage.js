const adminPage = () => {
  const apiMenu = "http://localhost:3000/menu";
  const apiAbout = "http://localhost:3000/aboutMe";
  const apiCategories = "http://localhost:3000/categories";
  const apiEducation = "http://localhost:3000/Education";
  const apiExperience = "http://localhost:3000/Experience";
  const apiAwards = "http://localhost:3000/Awards";
  const apiProjects = "http://localhost:3000/projects";
  const apiUsers = "http://localhost:3000/users";
  return `<div class="container  mt-0  w-screen  bg-gradient-to-r from-indigo-500 via-purple-200 to-pink-200">
  <div class="admin-title"> <h2 class="text-[#333] pt-10 text-5xl text-center uppercase">Welcome to admin page</h2></div>
  <div class="header-menu text-center pt-10 pb-10">
    
  <ul class="menu-item">
   <li><a href="/admin/adminMenu" class="active"><span>Admin Menu</span></a></li>
   <li><a href="/admin/adminAbout" class="active"><span>Admin About</span></a></li>
   <li><a href="/admin/adminCategories" class="active"><span>Admin Categories</span></a></li>
   <li><a href="/admin/adminEducation" class="active"><span>Admin Education</span></a></li>
   <li><a href="/admin/adminExperience" class="active"><span>Admin Experience</span></a></li>
   <li><a href="/admin/adminAwards" class="active"><span>Admin Awards</span></a></li>
   <li><a href="/admin/adminProjects" class="active"><span>Admin Projects</span></a></li>
  </ul>
  <div class="hiddenMenu hidden text-3xl">&#9874;</div>

  </div>
  </div>`;
};

export default adminPage;
