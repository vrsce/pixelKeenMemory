document.addEventListener('DOMContentLoaded', () => {

let cardArray = [
    {
        name: 'mattOne',
        img: 'images/mattOne.png'
    },
    {
        name: 'mattOne',
        img: 'images/mattOne.png'
    },
    {
        name: 'mattTwo',
        img: 'images/mattTwo.png'
    },
    {
        name: 'mattTwo',
        img: 'images/mattTwo.png'
    },
    {
        name: 'mattThree',
        img: 'images/mattThree.png'
    },
    {
        name: 'mattThree',
        img: 'images/mattThree.png'
    },
    {
        name: 'mattFour',
        img: 'images/mattFour.png'
    },
    {
        name: 'mattFour',
        img: 'images/mattFour.png'
    },
    {
        name: 'mattFive',
        img: 'images/mattFive.png'
    },
    {
        name: 'mattFive',
        img: 'images/mattFive.png'
    },
    {
        name: 'mattSix',
        img: 'images/mattSix.png'
    },
    {
        name: 'mattSix',
        img: 'images/mattSix.png'
    }
];

let result = document.querySelector('#result');
const sendBtn = document.querySelector('.sendBtn');
const instructions = document.querySelector('.instructions');
let instro = document.querySelector('.instro');
let collapse = document.querySelector('.collapse');

  cardArray.sort(() => 0.5 - Math.random());

const grid = document.querySelector('.grid');
let cardsChosen = [];
let cardsChosenId = [];
let cardsWon = [];
let score = 0;
result.textContent = score;


//create Borad

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        let card = document.createElement('img');
        card.setAttribute('src', 'images/blank.png');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard);
        grid.appendChild(card);
        }
}



function checkForMatch() {
    var hand = document.querySelectorAll('img');
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];
    if (cardsChosen[0] === cardsChosen[1]) {
        score++;
        score++;
        result.textContent = score;
        alert('MATCH!');
        //hand[optionOneId].setAttribute('src', 'images/white.png');
        //hand[optionTwoId].setAttribute('src', 'images/white.png');
        hand[optionOneId].style.visibility = 'hidden';
        hand[optionTwoId].style.visibility = 'hidden';
        cardsWon.push(cardsChosen);
        
    } else {
        score--;
        result.textContent = score;
        hand[optionOneId].setAttribute('src', 'images/blank.png');
        hand[optionTwoId].setAttribute('src', 'images/blank.png');
        alert('nah...');
    }
    cardsChosen = [];
    cardsChosenId = [];
    if (cardsWon.length === 6) {
        alert('WIN!!! \n' + 'Final Score: ' + score);
    }
}





function flipCard() {
    let cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute('src', cardArray[cardId].img);
    if (cardsChosen.length === 2) {
        setTimeout(checkForMatch, 500);
    }
}





sendBtn.addEventListener('click', () => {
    location.reload();
});
instructions.addEventListener('click', () => {
    instro.style.visibility = 'visible';
    collapse.style.visibility = 'visible';
});
collapse.addEventListener('click', () => {
    instro.style.visibility = 'hidden';
    collapse.style.visibility = 'hidden';
})





createBoard();

});
