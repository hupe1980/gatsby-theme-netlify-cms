const pkg = require('./package.json');

module.exports = (themeOptions = {}) => {
  return {
    plugins: [
      {
        resolve: 'gatsby-plugin-netlify-cms',
        options: {
          modulePath: `${__dirname}/src/cms.js`,
          enableIdentityWidget: false,
          publicPath: 'admin',
          htmlTitle: 'Content Manager',
          manualInit: true,
          ...themeOptions
        }
      },
      {
        // This is only needed temporarily. Themes will automatically be transpiled in later versions.
        resolve: 'gatsby-plugin-compile-es6-packages',
        options: {
          modules: [pkg.name]
        }
      }
    ]
  };
};
