import readlineSync from 'readline-sync';
import { welcomeToGame } from './cli.js';

const roundsCount = 3;

export const runEngine = (rules, generateRound) => {
  const name = welcomeToGame();
  console.log('rules: ', rules);

  for (let i = 0; i < roundsCount; i++) {
    const [question, correctAnswer] = generateRound();
    console.log(`Question: ${question}`);

    let userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer == correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${name}!`);

      return
    }
  }

  console.log(`Congratulations, ${name}!`);
}
