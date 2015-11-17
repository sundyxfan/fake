'use strict';

module.exports = function listsCtrl($scope, allLists) {
    allLists.getAllLists().then(function (data) {
        $scope.lists = data;
    });
}