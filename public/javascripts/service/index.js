module.exports = angular.module('service', [])
    .factory('allLists', ['$q', require('./allLists')]);
