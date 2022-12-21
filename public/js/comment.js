const cHandler = async (event) => {
    event.preventDefault();
  
    const commentText = document.querySelector("#comment-input").value.trim();
    console.log({ commentText });
    if (commentText) {
      const response = await fetch("/createComment", {
        method: "POST",
        body: JSON.stringify({commentText}),
        headers: { "Content-Type": "application/json" },
      });
      if (response.ok) {
        document.location.replace("/");
      } else {
        alert("Failed to comment!");
      }
    }
  };
  
  const commentSubmitBtn = document.querySelector("#commentBtn");
  
  commentSubmitBtn.addEventListener("submit", cHandler);