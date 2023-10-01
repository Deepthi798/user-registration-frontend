let registerForm = document.getElementById("registerForm");

const regUrl = "http://localhost:3000/auth/register";

registerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let username = document.getElementById("username");
  let email = document.getElementById("email");
  let password = document.getElementById("password");
  let confirm_password = document.getElementById("confirm_password");
  if (
    username.value &&
    email.value &&
    password.value &&
    confirm_password.value
  ) {
    if (password.value === confirm_password.value) {
      console.log(
        username.value,
        email.value,
        password.value,
        confirm_password.value
      );
      let userRegisterDetails = {
        username: username.value,
        email: email.value,
        password: password.value,
      };
      fetch( regUrl, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify(userRegisterDetails),
      })
        .then((response) => response.json()) // Parse the response as JSON
        .then((data) => {console.log(data)}) // Do something with the data
        .catch((error) => console.error(error)); // Handle errors
    } else {
      console.log("Passwords do not match");
    }
  } else {
    console.log("Please fill all fields");
  }
});

// async function registerUser(regUser){
//     const response = await fetch(regUrl,{ method: 'POST', body: regUser });

//     const data = await response.json();

//     console.log(data);
// }
