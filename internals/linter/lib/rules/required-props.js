/**
 * @fileoverview Ensure custom components have correct required props
 * @author Matt
 */

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: 'Ensure custom components have correct required props',
      recommended: false,
    },
    fixable: null, // or "code" or "whitespace"
    schema: [
      {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            component: {
              type: 'string',
            },
            props: {
              type: 'array',
              items: {
                type: 'string',
              },
              minItems: 1,
            },
          },
        },
      },
    ],
  },

  create(context) {
    // variables should be defined here
    const components = context.options[0] || [];
    //----------------------------------------------------------------------
    // Helpers
    //----------------------------------------------------------------------

    // any helper functions should go here or else delete this section

    //----------------------------------------------------------------------
    // Public
    //----------------------------------------------------------------------

    return {
      JSXOpeningElement(node) {
        components.forEach(({ component, props }) => {
          if (node.name.name !== component) {
            return;
          }
          if (
            node.attributes.some(
              nodeAttribute =>
                nodeAttribute.type &&
                nodeAttribute.type === 'JSXSpreadAttribute',
            )
          ) {
            /**
             * If any spread properties, return
             */
            return;
          }
          const attributeNames = node.attributes
            .map(
              nodeAttributes =>
                nodeAttributes.name && nodeAttributes.name.name
                  ? nodeAttributes.name.name
                  : null,
            )
            .filter(val => val);
          const errors = [];
          props.forEach(prop => {
            if (!attributeNames.includes(prop)) {
              errors.push(`'${prop}'`);
            }
          });
          if (errors.length) {
            context.report({
              node,
              message: `${component} should contain ${
                errors.length > 1 ? 'props' : 'prop'
              } ${errors.join(', ')}.`,
            });
          }
        });
      },
    };
  },
};
