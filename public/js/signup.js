// $(document).ready(function () {
//   var signUpForm = $("form.signup");
//   var usernameInput = $("input#username-input");
//   var emailInput = $("input#email-input");
//   var passwordInput = $("input#password-input");

//   signUpForm.on("submit", function (event) {
//     event.preventDefault();
//     var userData = {
//       username: usernameInput.val().trim(),
//       email: emailInput.val().trim(),
//       password: passwordInput.val().trim(),
//     };

//     if (!userData.username || !userData.email || !userData.password) {
//       return;
//     }

//     signUpUser(userData.username, userData.email, userData.password);
//     usernameInput.val("");
//     emailInput.val("");
//     passwordInput.val("");
//   });

//   function signUpUser(username, email, password) {
//     $.post("/api/signup", {
//       username: username,
//       email: email,
//       password: password,
//     })
//       .then(function (data) {
//         window.location.replace("/");
//       })
//       .catch(handleLoginErr);
//   }

//   function handleLoginErr(err) {
//     $("#alert .msg").text(err.responseJSON);
//     $("#alert").fadeIn(500);
//   }
// });

const signupHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector("#username-input").value.trim();
  const email = document.querySelector("#email-input").value.trim();
  const password = document.querySelector("#password-input").value.trim();
  const avatar = document.querySelector("#avatar-input").value
  console.log({ username, email, password });
  if (username && email && password) {
    const response = await fetch("/signup", {
      method: "POST",
      body: JSON.stringify({ username, email, password, avatar}),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      document.location.replace("/login");
    } else {
      alert("Failed to sign up.");
    }
  }
};

const signupBtn = document.querySelector(".signup");

signupBtn.addEventListener("submit", signupHandler);
