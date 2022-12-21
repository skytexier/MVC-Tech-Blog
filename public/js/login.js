// $(document).ready(function () {
//   var loginForm = $("form.login");
//   var emailInput = $("input#email-input");
//   var passwordInput = $("input#password-input");

//   loginForm.on("submit", function (event) {
//     event.preventDefault();
//     var userData = {
//       email: emailInput.val().trim(),
//       password: passwordInput.val().trim(),
//     };

//     if (!userData.email || !userData.password) {
//       return;
//     }

//     loginUser(userData.email, userData.password);
//     emailInput.val("");
//     passwordInput.val("");
//   });

//   function loginUser(email, password) {
//     $.post("/login", {
//       email: email,
//       password: password,
//     })
//       .then(function () {
//         window.location.replace("/");
//       })
//       .catch(function (err) {
//         console.log(err);
//       });
//   }
// });

const loginHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector("#email-input").value.trim();
  const password = document.querySelector("#password-input").value.trim();

  if (email && password) {
    const response = await fetch("/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to log in.");
    }
  }
};

document.querySelector(".login").addEventListener("submit", loginHandler);
