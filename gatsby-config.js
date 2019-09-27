const pkg = require('./package.json');

module.exports = (themeOptions = {}) => {
  return {
    plugins: [
      {
        resolve: 'gatsby-plugin-netlify-cms',
        options: {
          modulePath: `${__dirname}/src/cms.js`,
          enableIdentityWidget: false,
          manualInit: true,
          publicPath: 'admin',
          htmlTitle: 'Content Manager',
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
