/**
 * 获取已有接口文件
 */
module.exports = function (filepath) {

    var fs = require('fs');
    var path = require('path');

    console.log("path::::"  + filepath);
    var jsonData = [];

    var data = fs.readFileSync(path.join(process.cwd(), './data/', filepath),'utf-8');
    if (data) {
        data = JSON.parse(data);
    }
    return data;
};
