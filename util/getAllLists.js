/**
 * 获取已有接口文件
 */
module.exports = function () {

    var fs = require('fs');
    var path = require('path');
console.log('pk');
console.log("path::::"  + path.join(process.cwd(), './data'));
    fs.readdir(path.join(process.cwd(), './data'), function (err, fd){
        if (err) {
            throw  err;
        }
        console.log(fd + 'ell:' +fd.length);
        var filesLen = fd.length;
        for (var i = 0; i < filesLen; i++) {
            fs.readFile(path.join(process.cwd(), './data', fd[i]), 'utf-8', function (err, data) {
                if (err) {
                    throw  err;
                }
                // 返回所有接口数据
                if (data) {
                    console.log(JSON.parse(data).requestUrl);
                }
            });
        }
    });
};