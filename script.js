document.addEventListener("DOMContentLoaded", function() {
    tempsRestant = 60;
    run = document.getElementById("run"); 
    compteur = document.getElementById("compteur"); 
    function demarrerCompteur() {
        console.log(tempsRestant + " secondes restantes");
        compteur.textContent = tempsRestant + " secondes restantes";

        intervalId = setInterval(function () {
            tempsRestant--;
            console.log(tempsRestant + " secondes restantes");
            compteur.textContent = tempsRestant + " secondes restantes";

            if (tempsRestant === 0) {
                clearInterval(intervalId);
                console.log("Compteur terminé");
                compteur.textContent = "Compteur terminé";
                
            }
        }, 1000);
    }
    run.addEventListener("click", function() {
        demarrerCompteur() ; 
        alert("Compteur demmare!");
      });
      const cards = document.querySelectorAll('.case');

      let flippedCards = [];
      let matchedCards = [];
      
      // Add click event listeners to the cards
      cards.forEach(card => {
          card.addEventListener('click', flipCard);
      });
      
      function flipCard() {
          if (flippedCards.length < 2) {
              this.classList.add('flipped');
              flippedCards.push(this);
      
              if (flippedCards.length === 2) {
                  const [firstCard, secondCard] = flippedCards;
                  if (firstCard.dataset.card === secondCard.dataset.card) {
                      matchedCards.push(firstCard, secondCard);
                      if (matchedCards.length === cards.length) {
                          // Game is won
                          alert('Congratulations! You won the game.');
                      }
                  } else {
                      setTimeout(() => {
                          firstCard.classList.remove('flipped');
                          secondCard.classList.remove('flipped');
                      }, 1000);
                  }
                  flippedCards = [];
              }
          }
      }
      

});
