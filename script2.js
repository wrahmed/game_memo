
const allCards = document.querySelectorAll(".card");
let firstCard = null,
  secondCard = null;
let canClick = true;
let score = 0;
let timerInterval;
let timer = 60; // 60-second timer
const backElements = document.querySelectorAll(".back");

allCards.forEach((card) => {
  card.addEventListener("click", handleCardClicked);
});

// handle clicking on a card
function handleCardClicked() {
  if (!canClick) return;

  // prevent card double click
  if (this.classList.contains("flip")) return;

  this.classList.add("flip");

  if (!firstCard) firstCard = this;
  else if (!secondCard) secondCard = this;

  let img1 = firstCard ? firstCard.firstElementChild.src : null;
  let img2 = secondCard ? secondCard.firstElementChild.src : null;

  // handle matching condition
  if (img1 === img2) {
    console.log("Matching....");
    firstCard = null;
    secondCard = null;
    score++;
    document.getElementById("score").textContent = score; // Update the counter
    document.getElementById("compteur").textContent = compteur; // Update the counter
    if (score === 8) handleGameWin();
  }
  // handle non-matching condition
  else if (img1 && img2) {
    canClick = false;
    setTimeout(() => {
      firstCard.classList.remove("flip");
      secondCard.classList.remove("flip");
      firstCard = null;
      secondCard = null;
      canClick = true;
    }, 1000);
  }
}

function handleGameWin() {
  clearInterval(timerInterval);
  setTimeout(() => {
    let retVal = confirm("You Win 😍😍\nPlay Again ???");
    if (retVal === true) {
      location.reload();
    }
  }, 1000);
}

// ====== Shuffle Cards =========
allCards.forEach((card) => {
  let randPos = Math.floor(Math.random() * 12);
  card.style.order = randPos;
});

// Add an event listener to the "run" button to start the game
document.getElementById("run").addEventListener("click", startGame);

function startGame() {
  // Reset the counter and flip all cards back
  backElements.forEach((element) => {
    element.style.backfaceVisibility = "hidden";
  });
  reshuffleCards() ; 
  score = 0;
  document.getElementById("compteur").textContent = timer;
  document.getElementById("score").textContent = score;
  allCards.forEach((card) => {
    card.classList.remove("flip");
  });
  // Enable card clicks
  canClick = true;

  // Start the timer
  timer = 60;
  document.getElementById("compteur").textContent = timer;
  timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
  timer--;
  document.getElementById("compteur").textContent = timer;

  if (timer === 0) {
    document.getElementById("compteur").textContent = 0;
    clearInterval(timerInterval);
    reshuffleCards();
    clearInterval(timerInterval);
    handleGameOver();
  }
}

function reshuffleCards() {
  allCards.forEach((card) => {
    let randPos = Math.floor(Math.random() * 12);
    card.style.order = randPos;
  })
}

function handleGameOver() {
    setTimeout(() => {
      let retVal = confirm("Game Over !!\nDo you want to play again?");
      if (retVal === true) {
        startGame(); // Restart the game if the user wants to play again
      }
      else
      {
        window.location.href="by.html"
      }
    }, 1000);
  }
