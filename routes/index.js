module.exports = function routers() {
    var express = require('express');
    var router = express.Router();

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
     router.get('/query', function () {
        
     });

    return router;
}