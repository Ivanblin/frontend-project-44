import { runEngine } from '../index.js';
import { getRandomRange } from '../getRandomRange.js';

const isPrime = (num) => {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

const generateRound = () => {
  const question = getRandomRange(2);

  const answer = isPrime(question) ? 'yes' : 'no';

  return [question, answer];
}

export const runPrimeGame = () => {
  runEngine('Answer "yes" if given number is prime. Otherwise answer "no".', generateRound);
}
