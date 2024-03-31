import runEngine from '../index.js';
import getRandomRange from '../getRandomRange.js';

const isEven = (num) => num % 2 === 0;

const generateRound = () => {
  const question = getRandomRange();

  const answer = isEven(question) ? 'yes' : 'no';

  return [question, answer];
};

export default function runEvenGame() {
  runEngine('Answer "yes" if the number is even, otherwise answer "no".', generateRound);
}
