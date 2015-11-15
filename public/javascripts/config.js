'use strict';
var fs = require('fs');
function routing($urlRouterProvider, $locationProvider, $stateProvider) {
    var headerConfig = {
        template: fs.readFileSync(__dirname + '/header/header.tpl.html'),
        controller: 'headerCtrl' 
    };
    $urlRouterProvider.otherwise('/getLists');
    $stateProvider
        .state('lists', {
            url: '/getLists',
            views: {
                header: headerConfig,
                body: {
                    template: fs.readFileSync(__dirname + '/lists/lists.tpl.html'),
                    controller: 'listsCtrl'
                }
            }
        })
        .state('add', {
            url: '/addList',
            views: {
                header: headerConfig,
                body: {
                    template: fs.readFileSync(__dirname + '/listEdit/listEdit.tpl.html'),
                    controller: 'listEditCtrl'
                }
            }
        })
        .state('lists.detail', {
            url: '^/detail/{id}', // ^ 绝对路由 /detail & 默认是子状态附加在父状态后面 /getLists/detail
            views: {
                'body@': {
                    template: fs.readFileSync(__dirname + '/listEdit/listEdit.tpl.html'),
                    controller: 'listEditCtrl'
                }
            }
        });
};

module.exports = routing;