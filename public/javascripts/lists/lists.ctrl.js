'use strict';

module.exports = function listsCtrl($scope) {
    $scope.lists = [{
        path: '/getInfo.json',
        id: 1
    }, {
        path: '/setInfo.json',
        id: 2
    }];
}