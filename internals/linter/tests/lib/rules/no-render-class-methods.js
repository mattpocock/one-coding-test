/**
 * @fileoverview Prevent usage of render class methods on React components.
 * @author Matt
 */

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const { RuleTester } = require('eslint');
const rule = require('../../../lib/rules/no-render-class-methods');

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

RuleTester.setDefaultConfig({
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true,
    jest: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true,
    },
  },
});

const ruleTester = new RuleTester();

ruleTester.run('no-render-class-methods', rule, {
  valid: [
    {
      code: `
        class Something extends React.PureComponent {
            render() {
                return null;
            }
        }
        `,
    },
  ],

  invalid: [
    {
      code: `
        class Something extends React.PureComponent {
          renderSomething() {
            return <div />;
          }  
          render() {
              return null;
          }
        }
        `,
      errors: [
        {
          message: `Render class methods make components too unwieldy and prevent code reuse. Extract the method to a sub-component instead.`,
          type: 'Identifier',
        },
      ],
    },
  ],
});
