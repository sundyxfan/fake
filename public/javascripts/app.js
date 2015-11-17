'use strict';

require('angular');
require('angular-ui-router');
require('angular-ui-bootstrap');

require('./header');
require('./lists');
require('./listEdit');


// directiive
require('./directive');

// service
require('./service');

var routers = require('./config'); 
var appCtrl = require('./app.ctrl');

var app = angular.module('app', ['ui.router', 'directive', 'service', 'header', 'lists', 'listEdit']);

app.config(['$urlRouterProvider', '$locationProvider', '$stateProvider', routers]);

app.controller('appCtrl', ['$scope', appCtrl]);