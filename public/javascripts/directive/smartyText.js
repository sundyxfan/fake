module.exports = function smartyText () {
    return {
        require: 'ngModel',
        restrict: 'A',
        scope: {
            smartyText: '='
        },
        link: function ($scope, elm, attrs, ctrl) {
            ctrl.$parsers.push(function (viewVal) {
                if (viewVal) {
                    viewVal = viewVal.trim();
                    if (!viewVal.indexOf('/') 
                        && viewVal.indexOf(attrs.interfaceSuffix) === viewVal.length - attrs.interfaceSuffix.length 
                        && viewVal.indexOf('//') == -1) {
                        ctrl.$setValidity('isRegular', true);
                    }
                    else {
                        ctrl.$setValidity('isRegular', false);
                    }

                    var isExist = true;
                    
                    if ($scope.smartyText.length) {
                        angular.forEach($scope.smartyText, function (data) {
                            if (data.url === viewVal) {
                                isExist = false;
                            }
                        });
                    }
                    ctrl.$setValidity('isExist', isExist);
                }
                
                return viewVal;
            });
        }
    }
};