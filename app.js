// NPA Modules
    const inquirer = require('inquirer');

// Veryify Module is successfully imported
    //console.log(inquirer);

    inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is your name?'
      }
    ])
    .then(answers => console.log(answers));    