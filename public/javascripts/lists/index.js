'use strict';

var listsCtrl = require('./lists.ctrl');

module.exports = angular.module('lists', [])
    .controller('listsCtrl', ['$scope', listsCtrl]);