/**
 * Contract Generator
 */

const path = require('path');

module.exports = {
  description: 'Add a contract',
  prompts: [
    {
      type: 'input',
      name: 'endpoint',
      message: 'What is the API endpoint?',
      default: 'LearnerJourney/GetSomeConfig',
      validate: value => {
        return value ? true : 'The endpoint is required';
      },
    },
  ],
  actions: data => {
    const actions = [
      {
        type: 'add',
        path: path.resolve('./app/contracts/', `${data.endpoint}.js`),
        templateFile: './contract/contract.hbs',
        abortOnFail: true,
      },
    ];

    return actions;
  },
};
