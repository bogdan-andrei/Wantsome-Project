var username = document.getElementById("username");
var email = document.getElementById("email");
var password = document.getElementById("psw");
var confirmPassword = document.getElementById("confirmPsw");
var form = document.getElementsByTagName("form")[0];
var emailLabel = document.getElementsByTagName("label")[1]
var passLabel = document.getElementsByTagName("label")[2];
var confirmLabel = document.getElementsByTagName("label")[3];
var signUpBtn = document.getElementsByTagName("button")[0];

var warning = document.createElement("p");
function validateUsername(event) {
  if (username.value.length < 4) {
    warning.innerText = "Username-ul trebuie sa contina minim 4 caractere!";
    warning.setAttribute(
      "style",
      "color: red; font-size: 14px; margin-top: 1px"
    );
    username.style.marginTop = "1px";
    form.insertBefore(warning, emailLabel);
    return false;
  } else {
    warning.innerText = "Username valid!";
    warning.setAttribute(
      "style",
      "color: green; font-size: 14px; margin-top: 1px"
    );
    username.style.marginBottom = "1px";
    form.insertBefore(warning, emailLabel);
    return true;
  }
}
username.addEventListener("blur", validateUsername);

//validate email
var emailWarning = document.createElement("p")
function validateEmail(event) {
    var content = /^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/;
    if (content.test(email.value)) {
        emailWarning.innerText = "Email valid!!";
        emailWarning.setAttribute(
        "style",
        "color: green; font-size: 14px; margin-top: 1px"
      );
      form.insertBefore(emailWarning, passLabel);
      return true;
    } else {
        emailWarning.innerText = "Verificati email-ul!";
        emailWarning.setAttribute(
        "style",
        "color: red; font-size: 14px; margin-top: 1px"
      );
      form.insertBefore(emailWarning, passLabel);
    }
  }
  email.addEventListener("blur", validateEmail);


//validate password (min 1 litera mare, 1 mica, 1 cifra, 1 non-alfa numeric number, between 8-16 with no space)
var specials = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/;

var passWarning = document.createElement("p");
function validatePassword(event) {
  if (password.value.match(specials)) {
    passWarning.innerText = "Parola validata!";
    password.style.marginBottom = "1px";
    passWarning.setAttribute(
      "style",
      "color: green; font-size: 14px; margin-top: 1px"
    );
    form.insertBefore(passWarning, confirmLabel);
    return true;
  } else {
    passWarning.innerText =
      "Parola trebuie sa contina intre 8-16 caractere, cel putin 1 litera mare, 1 litera mica, 1 cifra si 1 caracter non-alfa numeric";
    password.style.marginBottom = "1px";
    passWarning.setAttribute(
      "style",
      "color: red; font-size: 14px; margin-top: 1px"
    );
    form.insertBefore(passWarning, confirmLabel);
  }
}
password.addEventListener("blur", validatePassword);

//validate confirmation as you type
var confirmWarning = document.createElement("p");
function validateConfirmation(event) {
  if (confirmPassword.value === password.value) {
    confirmWarning.innerText = "Parola confirmata!";
    confirmWarning.setAttribute(
      "style",
      "color: green; font-size: 14px; margin-top: 1px"
    );
    confirmPassword.style.marginBottom = "1px";
    form.insertBefore(confirmWarning, signUpBtn);
    return true;
  } else {
    confirmWarning.innerText = "Parola trebuie sa coincida!";
    confirmWarning.setAttribute(
      "style",
      "color: red; font-size: 14px; margin-top: 1px"
    );
    confirmPassword.style.marginBottom = "1px";
    form.insertBefore(confirmWarning, signUpBtn);
  }
}
confirmPassword.addEventListener("keyup", validateConfirmation);

//validate on click pe buton -> sa nu se dea submit daca nu sunt bune
function validateButton(event) {
  event.preventDefault();
  if (validateUsername() && validateEmail() && validatePassword() && validateConfirmation()) {
    fetch("http://localhost:3000/api/login", {
        method: "POST",
        body: JSON.stringify({
        username: username.value,
          email: email.value,
          password: password.value,
          confirmPss : confirmPassword.value
        }),
      })
      .then((r) => r.json())
        .then((response) => {
          sessionStorage.setItem("token", response.token);
          window.location.assign("products.html");
        });
  } else {
    alert("Something is not quite right!");
  }
}
signUpBtn.addEventListener("click", validateButton);

  
  