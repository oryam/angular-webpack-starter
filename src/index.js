import angular from 'angular';
import uirouter from 'angular-ui-router';
import aria from 'angular-aria';
import animate from 'angular-animate';
import material from 'angular-material';
import translate from 'angular-translate';

import 'angular-material/angular-material.css'
import 'material-design-iconic-font/dist/css/material-design-iconic-font.css'

import './assets/css/styles.scss';
import { appRoute, appConfig } from './app/app.config';
import appLayout from './app/layout';
import appComponent from './app/component/app.component';
import appFilter from './app/common/filter/app.filter';

angular.module('app', [
  uirouter,
  aria,
  animate,
  material,
  translate,
  appConfig,
  appLayout,
  appComponent,
  appFilter,
])
  .config(appRoute);
