/**
 * [description] 新增 && 编辑接口
 */

'use strict';

module.exports = function headerCtrl($scope, $stateParams, $http) {
    var paramsId = $stateParams.id;
    var isDetail = paramsId !== undefined ? true : false;
    // 根据请求参数找data目录找对应的文件，获取接口名称，参数，请求方式等等
    // TODO
    

    $http({
        method: 'GET',
        url: 'detailById',
        params: {
            id: paramsId
        }
    }).then(function (data) {
        var data = data.data.data || [];
        angular.extend($scope, {
            isDetail: isDetail,
            interfaceSuffix: '.json',
            data: data,
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
                    if (data.data.code === 200) {
                        alert('保存成功');
                    }
                });
            }
        });
    });
}
