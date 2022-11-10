const grid = document.querySelector('.grid');

const characters = [
    'beth',
    'jerry',
    'jessica',
    'morty',
    'pessoa-passaro',
    'pickle-rick',
    'rick',
    'summer',
    'meeseeks',
    'scroopy',
  ];

const createElements = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element;
};

let firstCard = "";
let seconCard = "";

const revealCard = (event) => {
    if(event.target.parentNode.className.includes('reveal-card')){
      return;
    }

    if(firstCard == ""){
      event.target.parentNode.classList.add('reveal-card');
      firstCard = event.target.parentNode;
    }else if (seconCard == ''){
      event.target.parentNode.classList.add('reveal-card');
      seconCard = event.target.parentNode;
    }
    
};

const createCard = (character) => {
    const card = createElements('div', 'card');
    const front = createElements('div', 'face front');
    const back = createElements('div', 'face back');

    front.style.backgroundImage = `url('../images/${character}.png')`;
    card.appendChild(front);
    card.appendChild(back);
    
    card.addEventListener('click', revealCard);

    return card;
};

const loadGame = () => {
    const duplicateCharacters = [ ...characters, ...characters ];
  
    const shuffledArray = duplicateCharacters.sort(() => Math.random() - 0.5);
  
    shuffledArray.forEach((character) => {
      const card = createCard(character);
      grid.appendChild(card);
    });
  }

loadGame();