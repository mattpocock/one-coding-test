/**
 * @fileoverview Prevent usage of render class methods on React components.
 * @author Matt
 */

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: 'Prevent usage of render class methods on React components.',
      category: 'Fill me in',
      recommended: false,
    },
    fixable: null, // or "code" or "whitespace"
    schema: [
      // fill in your schema
    ],
  },

  create(context) {
    // variables should be defined here

    //----------------------------------------------------------------------
    // Helpers
    //----------------------------------------------------------------------

    // any helper functions should go here or else delete this section

    //----------------------------------------------------------------------
    // Public
    //----------------------------------------------------------------------

    return {
      ClassBody: node => {
        node.body.forEach(classMethod => {
          const {
            key: { name },
          } = classMethod;
          if (name === 'render') {
            return;
          }
          if (name.indexOf('render') !== -1) {
            context.report({
              node: classMethod.key,
              message: `Render class methods make components too unwieldy and prevent code reuse. Extract the method to a sub-component instead.`,
            });
          }
        });
      },
    };
  },
};
