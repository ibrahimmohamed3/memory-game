let counter = 0;
let firstSelection = "1";
let secondSelection ="2";

const cards = document.querySelectorAll(".crads .card");
cards.forEach((card) => {
    card.addEventListener("click",() => {
    card.classList.add("clicked");
    
});
});