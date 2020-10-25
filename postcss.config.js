/*
  eslint
    global-require: 0
*/

module.exports = ctx => ({
  plugins: {
    autoprefixer: {},
    'postcss-initial': {
      reset: 'inherited',
    },
    'postcss-import': {},
    'postcss-mixins': {},
    'postcss-nested': {},
    'postcss-simple-vars': {},
    'postcss-modules': {
      getJSON: ctx.extractModules || (() => {}),
      generateScopedName: '[local]',
      localsConvention: 'camelCase',
    },
    'postcss-preset-env': { stage: 2, browsers: 'last 2 versions' },
    cssnano: {
      preset: 'default',
    },
  },
});
