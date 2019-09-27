module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ["module-resolver", {
      root: ['./'],
      alias: {
        src: './src',
        pages: './src/pages',
        components: './src/components',
        utils: './src/utils',
        stores: './src/stores',
        assets: './assets'
      }
    }],
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
  ]
};
