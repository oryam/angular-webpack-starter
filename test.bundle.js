'use strict';

require('angular');
require('angular-mocks/angular-mocks');

const testsContext = require.context("./src", true, /.spec.js$/);
testsContext.keys().forEach(testsContext);
