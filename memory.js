document.addEventListener('DOMContentLoaded', matchingGame);

function matchingGame() {

    var startEasy = document.getElementById('start-easy');
    var startMedium = document.getElementById('start-medium');
    var startHard = document.getElementById('start-hard');

    var stage = document.getElementById('stage');

    var cardTemplate = document.getElementById('card-template');

    var totalCards;
    var renderedCards;
    var cardValue;

    init();

    function init() {
        startEasy.addEventListener('click', initEasy);
        startMedium.addEventListener('click', initMedium);
        startHard.addEventListener('click', initHard);
    }

    function initEasy() {
        totalCards = 4; // TODO random!
        renderedCards = 0;

        renderCards();
    }

    function initMedium() {
        totalCards = 10; // TODO random!
        renderedCards = 0;

        renderCards();
    }

    function initHard() {
        totalCards = 20; // TODO random!
        renderedCards = 0;

        renderCards();
    }

    function renderCards() {
        console.log(stage);
        var documentFragments = document.createDocumentFragment();
        var cards = [];
        while (renderedCards < totalCards) {
            cardValue = Math.round(Math.random() * totalCards);
            // Make two cards
            var card = renderCard(cardValue);
            cards.push(card);
            card = renderCard(cardValue);
            cards.push(card);
            renderedCards += 2;
            cardTemplate.style.color = "orange";
        }
        shuffle(cards);
        cards.forEach(function(card) {
            documentFragments.appendChild(card);
        });

        stage.innerHTML = '';
        stage.appendChild(documentFragments);

        // TODO bind to the cards and listen for click. Leave the first card 'selected', when the second card is selected, test if they match and remove them from the sets.
       cardTemplate.addEventListener('click', revealCard);
        function revealCard() {
            cardTemplate.style.backgroundColor = "white";
        }

        /**
         * @param {int} number
         * @return Node
         */
        function renderCard(number) {
            var clone = document.importNode(cardTemplate.content, true);
            console.log(clone);
            var element = clone.querySelector('[data-value]');
            element.dataset.value = number;
            element.innerHTML = number;
            return clone;
        }




        /**
         * Shuffles array in place.
         * @param {Array} a items An array containing the items.
         */
        function shuffle(a) {
            var j, x, i;
            for (i = a.length - 1; i > 0; i--) {
                j = Math.floor(Math.random() * (i + 1));
                x = a[i];
                a[i] = a[j];
                a[j] = x;
            }
            return a;
        }
    }
}