module.exports = angular.module('directive', [])
    .directive('smartyText', require('./smartyText'))
    .directive('jsonFormat', require('./jsonFormat'));