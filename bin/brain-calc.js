import readlineSync from 'readline-sync';

const nameUser = readlineSync.question('Welcome to the Brain Games! \n May I have your name? ');

console.log(`Hello, ${nameUser}!`);

console.log('What is the result of the expression?');
let count = 3;

const calculationGame = () => {
  let operators = ['-', '+', '*'];
  let operandLeft = Math.ceil(Math.random() * 100);
  let currentRundomOperator = operators[Math.round(0 + Math.random() * (1 + 1 - 0))];
  let operandRight = Math.ceil(Math.random() * 100);

  console.log(`Question: ${operandLeft} ${currentRundomOperator} ${operandRight}`);

  let result = eval(`${operandLeft} ${currentRundomOperator} ${operandRight}`);

  let answerUser = readlineSync.question('Your answer: ');

  if (result == answerUser) {
    count--;
    if (count === 0) {
      console.log(`Congratulations, ${nameUser}!`);
    } else {
      console.log(`Your answer: ${answerUser} \n Correct!`);
      calculationGame();
    }
  } else {
    console.log(`Your answer: ${answerUser} \n ${answerUser} is wrong answer ;(. Correct answer was '${result}'. Let's try again, ${nameUser}!`);
  }
}
calculationGame()
