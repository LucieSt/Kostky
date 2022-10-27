import { Dice } from "./Dice/index.js"

const roll = () => {
  return Math.floor(Math.random() * 6) + 1;
};

console.log('funguju!');

const containerElm = document.getElementById('dice-row');
containerElm.append(Dice({side: 7}));
