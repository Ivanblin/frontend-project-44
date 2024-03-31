import { runEngine } from '../index.js';
import { getRandomRange } from '../getRandomRange.js';

const generateRandomProgression = (start, stepNumber, hiddenIndex) => {
  const progression = [];

  for (let i = 0; i < 10; i++) {
    progression.push(start + i * stepNumber);
  }

  const number = progression[hiddenIndex];
  progression[hiddenIndex] = '...';

  return [progression.join(' '), number];
}

const generateRound = () => {
  const start = getRandomRange();
  const stepNumber = getRandomRange(2, 10);
  const hidden = getRandomRange(0, 9);
  const [question, answer] = generateRandomProgression(start, stepNumber, hidden);

  return [question, answer];
}

export const runProgressionGame = () => {
  runEngine('What number is missing in the progression?', generateRound);
}