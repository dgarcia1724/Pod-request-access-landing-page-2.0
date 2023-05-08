// ****** MOBILE *******

const inputMobile = document.querySelector(".inputMobile");
const btnMobile = document.querySelector(".btnMobile");
const mobileError = document.querySelector(".mobileError");

btnMobile.addEventListener("click", function () {
  if (inputMobile.value === "") {
    mobileError.textContent = "Oops! Please add your email";
  } else if (inputMobile.value === "23") {
    mobileError.textContent = "Michael Jordan";
  } else {
    mobileError.textContent = "";
  }
});
