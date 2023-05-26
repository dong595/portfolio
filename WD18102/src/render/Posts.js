export const renderPosts = () => {
  const apiPosts = "http://localhost:3000/posts";
  fetch(apiPosts)
    .then((response) => response.json())
    .then((posts) => {
      posts.map((post) => {
        console.log(post);
      });
    });
};
