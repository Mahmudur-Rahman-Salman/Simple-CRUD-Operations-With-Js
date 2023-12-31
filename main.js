let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // console.log("button clicked");

  formValidation();
});

// formValidation function. This will help us prevent users from submitting blank input fields. 👇
let formValidation = () => {
  if (input.value === "") {
    msg.innerHTML = "Post cannot be empty";
    console.log("failure");
  } else {
    console.log("Success");
    msg.innerHTML = "";
    acceptData();
  }
};

// Accepting Data From Input Fields

let data = {};
let acceptData = () => {
  data["text"] = input.value;
  console.log(data);
  createPost();
};

// creating post with template literals

let createPost = () => {
  posts.innerHTML += `
    <div>
    <p>${data.text}</p>
    <span class="options">
      <i onClick="editPost(this)" class="fas fa-edit"></i>
      <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
    </span>
  </div>`;
  input.value = "";
};

// delete a post

let deletePost = (e) => {
  e.parentElement.parentElement.remove();
};

// edit post

let editPost = (e) => {
    input.value = e.parentElement.previousElementSibling.innerHTML; 
    e.parentElement.parentElement.remove(); 
};
