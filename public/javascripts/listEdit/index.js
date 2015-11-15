'use strict';

var listEditCtrl = require('./listEdit.ctrl');

module.exports = angular.module('listEdit', [])
    .controller('listEditCtrl', ['$scope', '$stateParams', '$http', listEditCtrl]);