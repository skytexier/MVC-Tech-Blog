
const posthandler = async (event) => {
  event.preventDefault();

  const createPost = document.querySelector("#post-input").value.trim();
  const createLink = document.querySelector("#video-input").value.trim();
  const createImage = document.querySelector("#image-input").value;
  console.log({ createPost, createLink });
  if (createPost) {
    const response = await fetch("/createPost", {
      method: "POST",
      body: JSON.stringify({ createPost, createLink, createImage}),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to post, please add a post body!");
    }
  }
};

const postSubmitBtn = document.querySelector(".post");

postSubmitBtn.addEventListener("submit", posthandler);
