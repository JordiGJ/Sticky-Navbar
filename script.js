// get elemtns
const navBar = document.querySelector("header");
const textContainer = document.querySelector(".text-container");

// functions
function handleClick() {
  if (window.scrollY > textContainer.offsetTop - navBar.offsetHeight) {
    navBar.classList.add("active");
  } else {
    navBar.classList.remove("active");
  }
}

// eventListeners
window.addEventListener("scroll", handleClick);
