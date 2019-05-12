export default function(config = {}) {
  return {
    backend: {
      name: 'git-gateway',
      branch: 'master'
    },
    load_config_file: false,
    media_folder: 'static/images/uploads',
    public_folder: '/images/uploads',
    collections: [],
    ...config
  };
}
