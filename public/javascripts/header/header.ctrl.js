'use strict';

module.exports = function headerCtrl($scope) {
    $scope.navList = [{
      title: 'interface lists',
      url: '/getLists',
      state: 'lists'
    }, {
      title: 'new interface',
      url: '/addList',
      state: 'add'
    }];
}