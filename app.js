// ****** MOBILE *******

const inputMobile = document.querySelector(".inputMobile");
const btnMobile = document.querySelector(".btnMobile");
const mobileError = document.querySelector(".mobileError");

btnMobile.addEventListener("click", function () {
  if (inputMobile.value === "") {
    mobileError.textContent = "Oops! Please add your email";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputMobile.value)) {
    mobileError.textContent = "Oops! Please check your email";
  } else {
    mobileError.textContent = "";
  }
});
