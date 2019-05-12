import {
  createConfig,
  registerPreviewTemplate
} from 'gatsby-theme-netlify-cms';

import IndexPagePreview from './preview-templates/index-page-preview';

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

registerPreviewTemplate('index', IndexPagePreview);

export default config;
