const section = document.querySelector("section");
const playerLivesCount = document.querySelector("span");
let playerLives = 6;

//link text

playerLivesCount.textContent = playerLives;

//generate the data

//[{imgSrc: './img/apple.png'}]
const getData = () => [
    { imgSrc: "./img/apple.png", name: "apple" },
    { imgSrc: "./img/banana.png", name: "banana" },
    { imgSrc: "./img/blueberries.png", name: "blueberries" },
    { imgSrc: "./img/cherries.png", name: "cherries" },
    { imgSrc: "./img/grapes.png", name: "grapes" },
    { imgSrc: "./img/lemon.png", name: "lemon" },
    { imgSrc: "./img/watermelon.png", name: "watermelon" },
    { imgSrc: "./img/pineapple.png", name: "pineapple" },
    { imgSrc: "./img/apple.png", name: "apple" },
    { imgSrc: "./img/banana.png", name: "banana" },
    { imgSrc: "./img/blueberries.png", name: "blueberries" },
    { imgSrc: "./img/cherries.png", name: "cherries" },
    { imgSrc: "./img/grapes.png", name: "grapes" },
    { imgSrc: "./img/lemon.png", name: "lemon" },
    { imgSrc: "./img/watermelon.png", name: "watermelon" },
    { imgSrc: "./img/pineapple.png", name: "pineapple" },
];

//randomize
const randomize = () => {
    const cardData = getData();
    cardData.sort(() => Math.random() - 0.5);
    return cardData;
};


//card generator function

const cardGenerator = () => {
    const cardData = randomize();

    // generate the html
    const cards = document.querySelectorAll(".card");
    cardData.forEach((item) => {
        const card = document.createElement("div");
        const face = document.createElement("img");
        const back = document.createElement("div");
        card.classList = "card"
        face.classList = "face";
        back.classList = "back";

        //attach the info to the cards
        face.src = item.imgSrc;
        card.setAttribute("name", item.name);

        //attach the cards to the section
        section.appendChild(card);
        card.appendChild(face);
        card.appendChild(back);

        card.addEventListener('click', (e) => {
            card.classList.toggle('toggleCard');
            checkCards(e);
        });
    });
};

//check cards

const checkCards = (e) => {
    const clickedCard = e.target;
    clickedCard.classList.add("flipped");
    const flippedCards = document.querySelectorAll('.flipped');

    //logic
    if (flippedCards.length === 2) {
        if (
            flippedCards[0].getAttribute("name") ===
            flippedCards[1].getAttribute("name")
        ) {
            console.log("match");
            flippedCards.forEach(card => {
                card.classList.remove("flipped");
                card.style.pointerEvents = "none";
            });
        } else {
            console.log("wrong");
            flippedCards.forEach(card => {
                card.classList.remove("flipped");
                setTimeout(() => card.classList.remove("toggleCard"), 1000);
            });
            playerLives--;
            playerLivesCount.textContent = playerLives;
            if (playerLives === 0) {
                restart();
            }

        }
    }

};

//restart
const restart = () => {
    let cardData = randomize();
    let face = document.querySelectorAll(".face");
    let cards = document.querySelectorAll(".card");
    section.style.pointerEvents = "none";
    cardData.forEach((item, index) => {
        cards[index].classList.remove("toggleCard");
        //randomize

        setTimeout(() => {
            cards[index].style.pointerEvents = "all";
            faces[index].src = item.imgSrc;
            cards[index].setAttribute("name", item.name);
            section.style.pointerEvents = "all";
        }, 1000);
    });
    playerLives = 6;
    playerLives.textContent = playerLives;
}
cardGenerator();





/*
const cards = document.querySelectorAll('.memory-card');

function flipCard() {
    console.log('I was clicked!');
    console.log(this);
}
cards.forEach(card => card.addEventListener('click', flipCard))
*/