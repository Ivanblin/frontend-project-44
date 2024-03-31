import readlineSync from 'readline-sync';
import welcomeToGame from './cli';

const roundsCount = 3;

export default function runEngine(rules, generateRound) {
  const name = welcomeToGame();
  console.log('rules: ', rules);

  for (let i = 0; i < roundsCount; i += 1) {
    const [question, correctAnswer] = generateRound();
    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${name}!`);

      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
}
