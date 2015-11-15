'use strict';

var headerCtrl = require('./header.ctrl');

module.exports = angular.module('header', [])
    .controller('headerCtrl', ['$scope', headerCtrl]);