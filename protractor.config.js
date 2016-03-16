exports.config = {
  baseUrl: 'http://localhost:3000/',

  specs: [
    'src/**/*.e2e.js',
    'src/**/**/*.e2e.js'
  ],
  exclude: [],

  framework: 'jasmine',

  allScriptsTimeout: 110000,

  jasmineNodeOpts: {
    showTiming: true,
    showColors: true,
    isVerbose: false,
    includeStackTrace: false,
    defaultTimeoutInterval: 400000,
  },

  directConnect: true,

  capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {
      'args': ['show-fps-counter=true'],
    },
  },

  onPrepare: function() {
    // support ES6
    require('babel-core/register');
    // browser.ignoreSynchronization = true;
  },

  // seleniumServerJar: "node_modules/protractor/selenium/selenium-server-standalone-2.48.2.jar",

};
