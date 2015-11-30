'use strict';

module.exports = function listsCtrl($scope, $http, allLists) {
    allLists.getAllLists().then(function (data) {
        $scope.lists = data;
    });
    $http.get('/query',angular.fromJson($scope.data)).then(function(data){
        alert('查询成功');
    });
}