# Demo application

Using AngularJS 1.x with Webpack 1.x

## Quick start
```
npm install
npm start
```

## TODO
- Add webpack.prod.config.js
- Add eslint
- Add unit test with karma/jasmine
- Add e2e test with protatractor
- Add gulp template and server mock
- Add vscode snippets ng1
- Create a branch with typeScript?
- Create a branch with Webpack 2?
- Create a branch with bootstrap?
- Create a branch with material?


## References
- AngularJS 1.x, NodeJS, Npm, Webpack, Babel
- [John Papa’s style guide](https://github.com/johnpapa/angular-styleguide)
- [Angular tips](http://angular-tips.com)
- [Preboot angular-webpack](https://github.com/preboot/angular-webpack)

## Appendix

### Requirements
- Install nodejs
- Install npm
- Install typescript
- Install typings
- Install webpack
- Install gulp
- Install karma
- Install protractor

Then
```
npm install
npm start
```

### From scratch
```
npm init
npm install webpack --save-dev
npm install webpack-dev-server --save-dev
npm install babel-loader babel-core babel-preset-es2015 --save-dev
npm install angular --save
npm install html-webpack-plugin@2 --save-dev
npm install copy-webpack-plugin --save-dev
```

For es6 support, add `.babelrc`
```
{
  "presets": ["es2015"]
}
```
Or use `query: { presets: ['es2015'] }` in your loader
```
{
  test: /\.js$/,
  loader: 'babel-loader',
  exclude: /node_modules/,
  query: {
    presets: ['es2015']
  }
}
```

Create or copy `webpack.config.js`
