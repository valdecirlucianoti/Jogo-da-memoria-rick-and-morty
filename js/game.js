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

const createCard = () => {
    const card = createElements('div', 'card');
    const front = createElements('div', 'face front');
    const back = createElements('div', 'face back');

    card.appendChild(front);
    card.appendChild(back);
    
    return card;
};

const loadGame = () => {

    characters.forEach((character) => {
        const card = createCard();
        grid.appendChild(card);
    });

};

loadGame();