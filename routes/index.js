module.exports = function routers() {
    var express = require('express');
    var router = express.Router();
    var fs = require('fs');
    var path = require('path');
    var createFile = require('../util/writeFile');

    /**
     * [description] 新增/编辑接口
     * @param  {[type]} ) 
     * @return {[type]}
     */
    router.post('/modify', function (req, res) {
        res.json({
            code: 200,
            data: req.body
        });
        console.log(createFile);
        // 根据提交参数写文件
        var fileName = req.body.requestUrl;
        var data = './data';
        var url = path.join(process.cwd(), data, fileName);
        var doc = JSON.stringify(req.body, undefined, 5);

        createFile(url, doc);
    });

    /**
     * [description] 删除接口
     * @param  {[type]} req 
     * @return {[type]}
     */
    router.get('/delete', function () {
        
    });

    /**
     * [description] 查询所有接口
     * @param {[type]}
     * @param {[type]}
     */
     router.get('/query', function (req, res) {
         console.log('kaishi');
         var data = require('../util/getAllLists')();
         console.log('jiesu:' + data);
         res.json({
             code: 200,
             data: data
         });
     });

     /**
     * [description] 查询详情
     * @param {[type]}
     * @param {[type]}
     */
    
    router.get('/detailById', function (req, res) {
        var id = req.query.id;
        var data = require('../util/getFile')(id);
        res.json({
             code: 200,
             data: data
        });
    });
    return router;
}
