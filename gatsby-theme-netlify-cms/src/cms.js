import { init, registerBackend } from 'netlify-cms-app';
import FileSystemBackend from 'netlify-cms-backend-fs';

import config from './config';

// If running in development
if (process.env.NODE_ENV === 'development') {
  // Register the FileSystemBackend.
  config.backend = {
    name: 'file-system',
    api_root: 'http://localhost:8000/api'
  };

  config.display_url = 'http://localhost:8000';
  registerBackend('file-system', FileSystemBackend);
}

// Start NetlifyCMS
init({ config });
