Package.describe({
  name: 'nathantreid:static-assets',
  version: '0.0.2',
  summary: 'Import any static assets you like!',
  documentation: 'README.md',
  git: 'https://github.com/nathantreid/meteor-static-assets.git',
});

Package.registerBuildPlugin({
  name: 'static-assets',
  use: [
    'caching-compiler@1.2.0',
    'ecmascript@0.12.1',
  ],
  sources: [
    'sha1.js',
    'options.js',
    'compiler.js',
    'plugin.js',
  ],
  npmDependencies: {
    'load-json-file': '4.0.0',
    'meteor-project-path': '0.0.3',
  },
});

Package.onUse(function (api) {
  api.versionsFrom('1.8');
  api.use('isobuild:compiler-plugin@1.0.0');
});
