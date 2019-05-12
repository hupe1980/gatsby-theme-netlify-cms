# gatsby-theme-netlify-cms

> A [Gatsby](https://github.com/gatsbyjs/gatsby) theme for
> [Netlify CMS](https://www.netlifycms.org)

The theme uses [netlify-cms-backend-fs](https://github.com/adarta/netlify-cms-backend-fs) to support local development.

:warning: This is experimental and subject to breaking changes.

## Install

`npm install --save gatsby-theme-netlify-cms`

## How to use

Edit `gatsby-config.js`

```javascript
module.exports = {
  __experimentalThemes: [
    {
      resolve: 'gatsby-theme-netlify-cms',
      options: {
        //...
      }
    }
  ],
  plugins: [
    {
      //...
    }
  ]
};
```
