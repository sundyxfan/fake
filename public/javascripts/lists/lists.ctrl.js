'use strict';

module.exports = function listsCtrl($scope, $http, allLists) {
    //allLists.getAllLists().then(function (data) {
    //    $scope.lists = data;
    //});
    $http.get('/query').then(function(data){
        $scope.lists = data.data.data;
    });

    // TODO
    // 删除接口操作
}