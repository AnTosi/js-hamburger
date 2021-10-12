const hamburger = document.querySelector(".fa-bars");

const listItems = document.querySelector(".hamburger-menu");

const cross = document.querySelector(".fa-times");

function openMenu() {
    listItems.classList.add("active");
}

hamburger.addEventListener("click", openMenu);

function closeMenu() {
    listItems.classList.remove("active");
}

cross.addEventListener("click", closeMenu);