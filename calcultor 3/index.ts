console.clear();

console.log(chalk.redBright("Hello welcome to calculator"));

function calculator(a: number, b: number, operator: string) {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      return a / b;
    default:
      return 'Error';
  }}
  import chalk from 'chalk';
import inquirer from 'inquirer';
const answers = await inquirer.prompt([
  {
    name: "num1",
    type: "number",
    message: chalk.green("Enter your first number: ")
  },
  {
    name: "num2",
    type: "number",
    message: chalk.red("Enter your second number: ")
  },
  {
    name: "operator",
    type: "list",
    choices: ['+', '-', '*', '/'],
    message: chalk.yellowBright("Select an operator: ")
  }
]);

// const { num1, num2, operator } = answers;

  console.log( chalk.green.bold (`${answers.num1} ${answers.operator} ${answers.num2} `+" Answer is =  " +  calculator(answers.num1,answers.num2, answers.operator)));
  
  
  