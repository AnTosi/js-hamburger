/* imposto le costanti che mi serviranno da pulsante e la selezione che mi servirà per applicare la proprietà active */
const hamburger = document.querySelector(".fa-bars");

const listItems = document.querySelector(".hamburger-menu");

const cross = document.querySelector(".fa-times");

/*  funzione di apertura menu e event listener con click */
function openMenu() {
    listItems.classList.add("active");
}

hamburger.addEventListener("click", openMenu);

/* funzione di chiusura menu con click */
function closeMenu() {
    listItems.classList.remove("active");
}

cross.addEventListener("click", closeMenu);

