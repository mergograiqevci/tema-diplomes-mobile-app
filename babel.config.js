module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo', 'module:metro-react-native-babel-preset'],
    plugins: [
      [
        'babel-plugin-root-import',
        {
          rootPathPrefix: '~/',
          rootPathSuffix: './src'
        }
      ],
      ['react-native-reanimated/plugin']
    ],
    env: {
      production: {
        plugins: [
          [
            'babel-plugin-root-import',
            {
              rootPathPrefix: '~/',
              rootPathSuffix: './src'
            }
          ],
		      ['react-native-reanimated/plugin']
        ]
      }
    }
  };
};