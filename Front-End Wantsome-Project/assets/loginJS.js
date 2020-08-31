var emailVerification = document.getElementById("email");
var labelPass = document.querySelector("#psw");
var warning = document.createElement("p");
var form = document.getElementsByTagName("form")[0];

function verifyEmail(event) {
  var content = /^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/;
  if (content.test(emailVerification.value)) {
    warning.innerText = "Email valid!";
    warning.setAttribute(
      "style",
      "color: green; font-size: 14px; margin-top: 1px"
    );
    emailVerification.style.marginBottom = "1px";
    form.insertBefore(warning, labelPass);
    return true;
  } else {
    warning.innerText = "Verificati email-ul!";
    warning.setAttribute(
      "style",
      "color: red; font-size: 14px; margin-top: 1px"
    );

    emailVerification.style.marginBottom = "1px";
    form.insertBefore(warning, labelPass);
  }
}
emailVerification.addEventListener("blur", verifyEmail);

var passwordVerification = document.querySelector("#password");
var passwordWarning = document.createElement("p");
var button = document.getElementById("submitButton");

function verifyPassword(event) {
  //validate password (min 1 litera mare, 1 mica, 1 cifra, 1 non-alfa numeric number, between 8-16 with no space)
  var specials =/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/;
  if (passwordVerification.value.match(specials)) {
    passwordWarning.innerText = "Parola validata!";
    passwordWarning.setAttribute(
      "style",
      "color: green; font-size: 14px; margin-top: 1px"
    );
    passwordVerification.style.marginBottom = "1px";
    form.insertBefore(passwordWarning, button);
    return true;
  } else {
    passwordWarning.innerText =
      "Parola trebuie sa contina intre 8-16 caractere, cel putin 1 litera mare, 1 litera mica, 1 cifra si 1 caracter non-alfa numeric";
    passwordWarning.setAttribute(
      "style",
      "color: red; font-size: 14px; margin-top: 1px"
    );
    passwordVerification.style.marginBottom = "1px";
    form.insertBefore(passwordWarning, button);
  }
}
passwordVerification.addEventListener("blur", verifyPassword);

function clickLogin(event) {
  event.preventDefault();
  if (verifyEmail() && verifyPassword()) {
    fetch("http://localhost:3000/api/login", {
      method: "POST",
      body: JSON.stringify({
        email: emailVerification.value,
        password: passwordVerification.value,
      }),
    })
    .then((r) => r.json())
      .then((response) => {
        sessionStorage.setItem("token", response.token);
        window.location.assign("products.html");
      });
  } else {
    alert("You shall not pass!");
  }
}
button.addEventListener("click", clickLogin);



// form.addEventListener("submit", function(e) {
//   e.preventDefault();

//   fetch("http://localhost:3000/api/login", {
//     method: "POST",
//     body: JSON.stringify({
//       email: emailVerification.value,
//       password: passwordVerification.value,
//     }),
//   })
//   .then((r) => r.json())
//     .then((response) => {
//       sessionStorage.setItem("token", response.token);
//       window.location.assign("products.html");
//     });
  
// })
