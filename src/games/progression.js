import { runEngine } from '../index.js';
import { getRandomRange } from '../getRandomRange.js';

const generateRandomProgression = (start, stepNumber, hiddenIndex) => {
  // Создаем массив для хранения прогрессии
  const progression = [];

  // Заполняем массив числами прогрессии
  for (let i = 0; i < 10; i++) {
    progression.push(start + i * stepNumber);
  }

  const number = progression[hiddenIndex]
  progression[hiddenIndex] = '...'

  return [progression.join(' '), number];
}

const generateRound = () => {
  const start = getRandomRange()
  const stepNumber = getRandomRange(2, 10)
  const hidden = getRandomRange(0, 9)
  const [one, two] = generateRandomProgression(start, stepNumber, hidden)

  const question = one
  const answer = two

  return [question, answer];
}

export const runProgressionGame = () => {
  runEngine('What number is missing in the progression?', generateRound);
}