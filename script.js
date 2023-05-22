let counter = 0;
let firstSelection = "";
let secondSelection ="";

const cards = document.querySelectorAll(".cards .card");
cards.forEach((card) => {
    card.addEventListener("click",() =>{
    card.classList.add("clicked");
   if(counter === 0){
    firstSelection=
    card.getAttribute("image");
    counter++;
   }else {
    secondSelection=
    card.getAttribute("image");
    counter = 0;
    if(firstSelection === secondSelection) {
        const correctCards =
        document.querySelectorAll(
            ".card[image=`" + firstSelection + "`]"
        );
        correctCards[0].classList.add("checked");
        correctCards[0].classList.remove("clicked");
        correctCards[1].classList.add("checked");
        correctCards[1].classList.remove("clicked");
} else {
    const incorrectCards = document.querySelectorAll(".card.clicked");
    incorrectCards[0].classList.add("shake");
    incorrectCards[1].classList.add("shake");
    setTimeout(() =>{
        incorrectCards[0].classList.remove ("shake");
        incorrectCards[0].classList.remove ("cliked");
        incorrectCards[1].classList.remove ("shake");
        incorrectCards[1].classList.remove ("cliked");
    }, 800); 
}
   }
});
});