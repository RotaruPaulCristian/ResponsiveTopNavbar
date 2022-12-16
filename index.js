const myTopnav = document.querySelector("#myTopnav");
const responsiveIcon = document.querySelector("#responsiveIcon");
const links = myTopnav.getElementsByClassName("link");

// Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon
const responsive = () => {
  if (myTopnav.className === "topnav") {
    myTopnav.classList.add("responsive");
  } else {
    myTopnav.className = "topnav";
  }
};

responsiveIcon.addEventListener("click", responsive);

// Loop through the links and add the active class to the current/clicked link
for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
