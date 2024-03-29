/**
 * Container Generator
 */

const fs = require('fs');
const path = require('path');
const componentExists = require('../utils/componentExists');

module.exports = {
  description: 'Add a container component',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
      default: 'Form',
      validate: value => {
        if (/.+/.test(value)) {
          return componentExists(value)
            ? 'A component or container with this name already exists'
            : true;
        }

        return 'The name is required';
      },
    },
    {
      type: 'input',
      name: 'location',
      message: 'Which subfolder of app/containers do you want the container placed in?',
      default: './',
      validate: value => {
        const location = path.resolve('./app/containers', `${value}`);
        if (!fs.existsSync(location)) {
          return `${location} does not exist.`;
        }
        return true;
      },
    },
  ],
  actions: data => {
    var componentTemplate; // eslint-disable-line no-var

    switch (data.type) {
      default: {
        componentTemplate = './container/class.tsx.hbs';
      }
    }

    const actions = [
      {
        type: 'add',
        path: path.resolve('./app/containers/', data.location, '{{properCase name}}/index.tsx'),
        templateFile: componentTemplate,
        abortOnFail: true,
      },
      {
        type: 'add',
        path: path.resolve('./app/containers/', data.location, '{{properCase name}}/apiCalls.ts'),
        templateFile: './container/apiCalls.ts.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: path.resolve('./app/containers/', data.location, '{{properCase name}}/tests/index.test.js'),
        templateFile: './container/test.js.hbs',
        abortOnFail: true,
      },
    ];

      actions.push({
        type: 'add',
        path: path.resolve('./app/containers/', data.location, '{{properCase name}}/messages.ts'),
        templateFile: './container/messages.ts.hbs',
        abortOnFail: true,
      });
      actions.push({
        type: 'add',
        path: path.resolve('./app/containers/', data.location, '{{properCase name}}/Loadable.ts'),
        templateFile: './component/loadable.ts.hbs',
        abortOnFail: true,
      });

    actions.push({
      type: 'prettify',
      path: '/containers/',
    });

    return actions;
  },
};
