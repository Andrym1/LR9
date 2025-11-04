const cards = ["6", "7", "8", "9", "10", "valet", "dama", "korol", "tuz"];
const cardValues = {
    "6": 6, "7": 7, "8": 8, "9": 9, "10": 10,
    "valet": 2, "dama": 3, "korol": 4, "tuz": 11
};

let playerName = prompt("Введіть ваше ім’я:");
document.getElementById("playerName").textContent = "Гравець: " + playerName;

let playerScore = 0;
let computerScore = 0;
let playerCards = [];
let computerCards = [];

function getRandomCard() {
    return cards[Math.floor(Math.random() * cards.length)];
}

function getCard() {
    const card = getRandomCard();
    playerCards.push(card);
    playerScore += cardValues[card];
    updateCards("playerCards", playerCards);

    if (playerScore > 21) {
        endGame("Ви програли! Перебір 😅");
    }
}

function stopGame() {
    while (computerScore < 17) {
        const card = getRandomCard();
        computerCards.push(card);
        computerScore += cardValues[card];
    }
    updateCards("computerCards", computerCards);

    if (computerScore > 21 || playerScore > computerScore) {
        endGame("Ви виграли! 🎉");
    } else if (computerScore === playerScore) {
        endGame("Нічия 😐");
    } else {
        endGame("Комп’ютер виграв 💻");
    }
}

function updateCards(elementId, cardsArray) {
    const container = document.getElementById(elementId);
    container.innerHTML = "";
    cardsArray.forEach(card => {
        const img = document.createElement("img");
        img.src = `cards/${card}.png`;
        img.alt = card;
        container.appendChild(img);
    });
}

function endGame(message) {
    document.getElementById("resultText").textContent = message;
    document.querySelectorAll("button").forEach(btn => btn.disabled = true);
}
