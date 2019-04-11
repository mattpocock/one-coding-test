/**
 * @fileoverview Ensure custom components have correct required props
 * @author Matt
 */

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const { RuleTester } = require('eslint');
const rule = require('../../../lib/rules/required-props');

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

RuleTester.setDefaultConfig({
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true,
    },
  },
});

const ruleTester = new RuleTester();

ruleTester.run('required-props', rule, {
  valid: [
    {
      code: '<Table table={[]} data={[]} />',
      options: [[{ component: 'Table', props: ['data', 'table'] }]],
    },
    {
      code: '<Table table={[]} data={[]} something />',
      options: [[{ component: 'Table', props: ['data', 'table'] }]],
    },
    {
      code: '<Table {...tableSchema} data={[]} something />',
      options: [[{ component: 'Table', props: ['data', 'table'] }]],
    },
    {
      code: '<button></button>',
      options: [[{ component: 'Table', props: ['data', 'table'] }]],
    },
  ],

  invalid: [
    {
      code: '<Table />',
      options: [[{ component: 'Table', props: ['data', 'table'] }]],
      errors: [
        {
          message: `Table should contain props 'data', 'table'.`,
          type: 'JSXOpeningElement',
        },
      ],
    },
  ],
});
