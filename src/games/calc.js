import runEngine from '../index';
import getRandomRange from '../getRandomRange';

const getRandomOperator = () => {
  const operators = ['-', '+', '*'];

  return operators[getRandomRange(0, operators.length - 1)];
};

const calculation = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`invalide operator - ${operator}`);
  }
};

const generateRound = () => {
  const num1 = getRandomRange();
  const num2 = getRandomRange();
  const operator = getRandomOperator();
  const question = `${num1} ${operator} ${num2}`;
  const answer = String(calculation(num1, num2, operator));

  return [question, answer];
};

export default function runCalcGame() {
  runEngine('What is the result of the expression?', generateRound);
}
