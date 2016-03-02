# Demo application

Using AngularJS 1.x with Webpack 1.x

## Quick start
```
npm install
npm start
```

## Test
Tests use Karma and Jasmine.
```
npm run test
```

## Add a component
A template generator is written with a gulp task. It is located in `gulp/templates/component`.  
@see `gulp/template-generator.js`
```
gulp component --name myComponent
```

## Run json-server
Data mock are exposed through json-server tool. All data are located in `gulp/server/data`.  
@see `gulp/server-data.js`
```
gulp json-server
```

## TODO
- [DONE] Add angular-material
- [DONE] Add webpack.prod.config.js
- [DONE] Add webpack.test.config.js
- [DONE] Add unit test with karma/jasmine
- [DONE] Add gulp template generator
- Add e2e test with protatractor
- Add gulp server mock
- Add eslint
- Add vscode snippets ng1
- Create a branch with typeScript?
- Create a branch with Webpack 2?
- Create a branch with bootstrap?
- Create a branch with material?


## References
- AngularJS 1.x, NodeJS, Npm, Webpack, Babel, Gulp, Karma
- [John Papa’s style guide](https://github.com/johnpapa/angular-styleguide)
- [Angular tips](http://angular-tips.com)
- [Preboot angular-webpack](https://github.com/preboot/angular-webpack)
- [mockable.io](https://www.mockable.io)

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
- Install http-server `npm install http-server -g`

Then
```
npm install
npm start
```

### From scratch

**All used libraries**
```
npm init
npm install webpack --save-dev
npm install webpack-dev-server --save-dev
npm install babel-loader babel-core babel-preset-es2015 --save-dev

npm install raw-loader --save-dev
npm install json-loader --save-dev
npm install style-loader --save-dev
npm install css-loader --save-dev
npm install sass-loader --save-dev
npm install url-loader --save-dev
npm install node-sass --save-dev

npm install html-webpack-plugin@2 --save-dev
npm install copy-webpack-plugin --save-dev
npm install compression-webpack-plugin --save-dev
npm install webpack-md5-hash --save-dev

npm install angular --save
npm install angular-ui-router --save
npm install angular-translate --save
npm install angular-messages --save
npm install angular-sanitize --save
npm install angular-material --save
npm install angular-animate --save
npm install angular-aria --save
npm install material-design-iconic-font --save

npm install typings --save-dev

npm install karma --save-dev
npm install karma-jasmine --save-dev
npm install karma-webpack --save-dev
npm install karma-sourcemap-loader --save-dev
npm install phantomjs-prebuilt --save-dev
npm install karma-phantomjs2-launcher --save-dev
#npm install karma-phantomjs-launcher --save-dev
#npm install karma-chrome-launcher --save-dev
#npm install karma-firefox-launcher --save-dev
npm install karma-coverage --save-dev
npm install karma-mocha-reporter --save-dev
npm install istanbul-instrumenter-loader --save-dev
npm install -g karma-cli
npm install angular-mocks --save-dev
npm install jasmine-core --save-dev

npm install gulp --save-dev
npm install gulp-template --save-dev
npm install gulp-rename --save-dev
npm install require-dir --save-dev

npm install json-server --save-dev
npm install gulp-watch --save-dev
npm install glob-promise --save-dev
npm install body-parser --save-dev
npm install gulp-util --save-dev
```

**ES6, Babel**  
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

**Webpack**  
For webpack build, create or copy `webpack.config.js`, `webpack.prod.config.js`.

**Tests**  
For testing, create or copy `webpack.test.config.js`, `karma.conf.js`, `test.bundle.js`.  
Install typings to fix warning messages from `.spec.js` test files.  
Karma, Jasmine and Istanbul are used for test coverage and execution.

**Template generator, Gulp**  
Create or copy `gulp/templates/*` folders and files, `gulpfile.js`.  
Then to create a new component use the gulp task `component` defined in `gulp/template-generator.js`  
@see `gulpfile.js` as entry point.
```
gulp component --name myComponent
```

**Server mock, Gulp**  
Create or copy `gulp/server/*` folder and files.  
Add .json data files, then run json server with gulp task `json-server` defined in `gulp/server-data.js`
@see `gulpfile.js` as entry point.
```
gulp json-server
```
Refers to (json-server)[https://www.npmjs.com/package/json-server]


### Typings
To make vscode recognizes `describe`, `it`, `beforeEach` functions, use `typings`.  
Create or copy `typings.json`.
```
npm install typings --global
typings install
```
Refers to https://www.npmjs.com/package/typings


Or old style with tsd
```
npm install -g tsd
tsd init
tsd install jasmine --save
tsd install node --save
tsd install angular --save
```
It creates `tsd.json` file and `typings` folder.
For help `tsd -h`
Refers to http://definitelytyped.org/tsd/
