const hamburger = document.getElementsByClassName("fa-bars");

const listItems = document.querySelector(".header-right ul");

function openMenu () {
    listItems.style.display ="block";
}

hamburger.addEventListener("click", openMenu);