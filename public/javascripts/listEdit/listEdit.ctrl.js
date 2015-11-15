/**
 * [description] 新增 && 编辑接口
 */

'use strict';

module.exports = function headerCtrl($scope, $stateParams, $http) {
    var paramsId = $stateParams.id;
    var isDetail = paramsId !== undefined ? true : false;

    angular.extend($scope, {
        isDetail: isDetail,
        interfaceSuffix: '.json',
        data: {
            urls: [{ //  获取已存在接口
                url: '/getInfo.json'
            }, {
                url: '/setInfo.json'
            }, {
                url: '/saveInfo.json'
            }],
            requestUrl: '',
            method: 'GET', // default(GET),
            requestParameters:[{
                id: 1,
                paramName: 'name',
                remark: 'beizhu',
                required: false
            }, {
                id: 2,
                paramName: 'name2',
                remark: 'beizhu',
                required: true
            }],
            responseJson: ''
        },
        addParamsList: function () {
            $scope.data.requestParameters.push({
                id: $scope.data.requestParameters.length,
                paramName: '',
                remark: '',
                required: false
            });
        },
        deleteParamsList: function (index) {
            $scope.data.requestParameters.splice(index, 1);
        },
        submit: function () {
            $http.post('/modify',angular.fromJson($scope.data)).then(function(data){
                alert('保存成功');
              });
        }
    });
}