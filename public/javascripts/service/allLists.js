/**
 * [allLists description]  获取已有接口地址
 */

function allLists($q) {
    var data = [{
        path: '/getInfo.json',
        id: 1
    }, {
        path: '/setInfo.json',
        id: 2
    }];

    return {
        getAllLists: function() {
            return $q.when(data);
        }
    }
}

module.exports = allLists;