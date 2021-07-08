const chalk = require("chalk");
const validator = require("validator");

// console.log(data);
// console.log(chalk.green.underline.inverse("Success"));

const data = validator.isEmail("anushasingla@infostride.com");
console.log(data ? chalk.inverse.green(data): chalk.red(data));

