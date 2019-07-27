module.exports = {
  siteMetadata: {
    title: 'Gatsby + Netlify CMS',
    description:
      'This repo contains an example website that is built with Gatsby, and Netlify CMS.'
  },
  plugins: [
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/images/uploads`,
        name: 'uploads'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages'
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {}
    },
    { 
      resolve: 'gatsby-theme-material-ui', 
      options: {} 
    },
    { 
      resolve: 'gatsby-theme-netlify-cms', options: {} 
    }
  ]
};
