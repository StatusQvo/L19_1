const POSTS_URL = "https://jsonplaceholder.typicode.com/post33s";
let isLoading = false;

const createNewPost = async () => {
   try {
    isLoading = true;
    const fetchedURL = await fetch(POSTS_URL, {
    method: "POST"
  })
  const resultJS = await fetchedURL.json()
  console.log("result",resultJS)
}
catch (error) {
console.log("error",error)
}
finally {
  isLoading = false; 
}
};

createNewPost()


// const createNewPost = () => {
//   isLoading = true;
//   fetch(POSTS_URL, {
//     method: "POST"
//   })
//     .then((response) => response.json())
//     .then((result) => {
//       console.log("result", result);
//     })
//     .catch((error) => {
//       console.log("error", error);
//     })
//     .finally(() => {
//       isLoading = false;
//     });
// };
// createNewPost();