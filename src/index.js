const lint = require('neutrino-middleware-eslint');
const merge = require('deepmerge');

module.exports = (neutrino, options) => {
  neutrino.use(lint, merge({
    eslint: {
      baseConfig: {
        extends: ['standard']
      },
      rules: {
        // handled by babel rules
        'new-cap': 'off',

        // handled by babel rules
        'object-curly-spacing': 'off',

        // require a capital letter for constructors
        'babel/new-cap': ['error', { newIsCap: true }],

        // require padding inside curly braces
        'babel/object-curly-spacing': ['error', 'always'],

        // guard against awaiting async functions inside of a loop
        'no-await-in-loop': 'error'
      }
    }
  }, options));
  if (!options.include && !options.exclude) {
    neutrino.config.module
      .rule('lint')
      .include
      .add(neutrino.options.source);
  }
};
