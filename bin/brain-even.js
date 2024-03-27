import readlineSync from 'readline-sync';

console.log('Answer "yes" if the number is even, otherwise answer "no".');

let count = 3;

function isEven(number) {
  return number % 2 === 0;
}

const question = () => {
  const rundomNumber = Math.ceil(Math.random() * 100);
  console.log(`Question: ${rundomNumber}`);
  const answerUser = readlineSync.question('Your answer: ');
  const correctAnswer = isEven(rundomNumber) ? 'yes' : 'no';

  if (answerUser === correctAnswer) {
    count--;
    if (count === 0) {
      console.log('Congratulations, Bill!');
    } else {
      question();
    }
  } else {
    console.log(`${answerUser} is wrong answer ;(. Correct answer was ${correctAnswer}.
    Let's try again, Bill!`);
  }
};
question();
