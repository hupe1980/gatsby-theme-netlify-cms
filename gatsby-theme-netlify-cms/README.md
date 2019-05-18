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

## Plugin Options

Netlify CMS can be configured via the plugin options below.

### `publicPath`

(_optional_, type: `string`, default: `"admin"`)

Customize the path to Netlify CMS on your Gatsby site.

### `htmlTitle`

(_optional_, type: `string`, default: `Content Manager`)

Customize the value of the `title` tag in your CMS HTML (shows in the browser
bar).

## CMS Configuration

All [configuration options](https://www.netlifycms.org/docs/configuration-options/) for Netlify CMS are specified in the `config.js` JavaScript module.

```javascript
// src/gatsby-theme-netlify-cms/config.js

import { createConfig } from 'gatsby-theme-netlify-cms';

const config = createConfig({
  collections: [
    {
      label: 'Pages',
      name: 'pages',
      files: [
        {
          label: 'Index',
          name: 'index',
          file: 'src/pages/index.md',
          fields: [
            {
              label: 'Template Key',
              name: 'templateKey',
              widget: 'hidden',
              default: 'about-page'
            },
            { label: 'Title', name: 'title', widget: 'string' },
            { label: 'Body', name: 'body', widget: 'markdown' }
          ]
        }
      ]
    }
  ]
});

//...

export default config;
```

## CMS Customization

If you need to customize Netlify CMS, e.g. registering [custom
widgets](https://www.netlifycms.org/docs/custom-widgets/#registerwidget) or
styling the [preview
pane](https://www.netlifycms.org/docs/customization/#registerpreviewstyle),
you'll need to do in the `config.js` JavaScript module.

```javascript
// src/gatsby-theme-netlify-cms/config.js

import { registerPreviewTemplate } from 'gatsby-theme-netlify-cms';

import IndexPagePreview from './preview-templates/index-page-preview';

//...

registerPreviewTemplate('index', IndexPagePreview);
```
