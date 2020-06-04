const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = (on, config) => {
  on('file:preprocessor', cucumber());

  return Object.assign({}, config, {
    integrationFolder: 'tests/Cypress/integration/Drupalwebsite'
  })
};
