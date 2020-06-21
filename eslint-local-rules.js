module.exports = {
  acronyms: {
    meta: {
      docs: {
        description: 'Acronyms, when a part of a word, should be capitalized',
        category: 'Stylistic Issues',
        recommended: false
      },
      schema: [
        {
          type: 'array',
          items: {
            type: 'string'
          }
        }
      ]
    },
    create: (context) => {
      const acronyms = context.options[0];

      function checkNode(id) {
        for (const acronym of acronyms) {
          if (id.name) {
            const capitalizedWords = id.name
              .split(/([A-Z]?[a-z]+)/)
              .filter((word) => /[A-Z]+[a-z]*/.test(word));

            let lastWasAcronym = false;

            for (const capitalizedWord of capitalizedWords) {
              const isSingularWarn =
                capitalizedWord.toUpperCase() === acronym.toUpperCase() &&
                capitalizedWord !== acronym;
              const isPluralWarn =
                capitalizedWord.toUpperCase() === `${acronym.toUpperCase()}S` &&
                capitalizedWord !== `${acronym}s`;

              if (
                (isSingularWarn || isPluralWarn) &&
                !lastWasAcronym // if an acronym is followed by another acronym, the rule won't apply
              ) {
                context.report(
                  id,
                  `Acronym (${capitalizedWord}) from variable (${
                    id.name
                  }) must be ${acronym}${isPluralWarn ? 's' : ''}`
                );
              }

              lastWasAcronym = acronyms.includes(capitalizedWord);
            }
          }
        }
      }

      return {
        VariableDeclaration: (node) => {
          for (const declaration of node.declarations) {
            checkNode(declaration.id);
          }
        },
        Property: (node) => {
          checkNode(node.key);
        },
        ClassDeclaration: (node) => {
          checkNode(node.id);
        },
        ImportDeclaration: (node) => {
          for (const declaration of node.specifiers) {
            checkNode(declaration.local);
          }
        }
      };
    }
  }
};
