import { runEngine } from '../index.js';
import { getRandomRange } from '../getRandomRange.js';


const getGcd = (num1, num2) => {
  if (num1 === 0) {
    return num2;
  }
  return getGcd(num2 % num1, num1);
};

const generateRound = () => {
  const num1 = getRandomRange()
  const num2 = getRandomRange()

  const question = `${num1} ${num2}`
  const answer = String(getGcd(num1, num2))

  return [question, answer]
}

const runGcdGame = () => {
  runEngine('Find the greatest common divisor of given numbers.', generateRound);
}

export default runGcdGame;