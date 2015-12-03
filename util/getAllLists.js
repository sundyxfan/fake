/**
 * 获取已有接口文件
 */
module.exports = function () {

    var fs = require('fs');
    var path = require('path');

    console.log("path::::"  + path.join(process.cwd(), './data'));
    var jsonData = [];
    var fd = fs.readdirSync(path.join(process.cwd(), './data'));
    for (var i = 0; i < fd.length; i++) {
        var data = fs.readFileSync(path.join(process.cwd(), './data', fd[i]),'utf-8');
        if (data) {
            // console.log(JSON.parse(data));
            data = JSON.parse(data);
            jsonData.push({
                requestUrl: data.requestUrl.substr(1),
                method: data.method
            });
        }
        //fs.readFileSync(path.join(process.cwd(), './data', fd[i]), 'utf-8', function (err, data) {
        //    if (err) {
        //        throw  err;
        //    }
        //    // 返回所有接口数据
        //    if (data) {
        //        // console.log(JSON.parse(data));
        //        data = JSON.parse(data);
        //        jsonData.push({
        //            requestUrl: data.requestUrl,
        //            method: data.method
        //        });
        //    }
        //    console.log('JSONDataItem:' + jsonData);
        //
        //});
    }
    console.log('jsonData:' + jsonData );
    return jsonData;
    //fs.readdir(path.join(process.cwd(), './data'), function (err, fd){
    //    if (err) {
    //        throw  err;
    //    }
    //    console.log(fd + 'ell:' +fd.length);
    //    var filesLen = fd.length;
    //    for (var i = 0; i < filesLen; i++) {
    //        fs.readFile(path.join(process.cwd(), './data', fd[i]), 'utf-8', function (err, data) {
    //            if (err) {
    //                throw  err;
    //            }
    //            // 返回所有接口数据
    //            if (data) {
    //                // console.log(JSON.parse(data));
    //                data = JSON.parse(data);
    //                jsonData.push({
    //                    requestUrl: data.requestUrl,
    //                    method: data.method
    //                });
    //            }
    //            console.log('JSONDataItem:' + jsonData);
    //
    //        });
    //    }
    //    console.log('JSONData:' + jsonData);
    //    return [{
    //        data: '2'
    //    }, {
    //        data: '4'
    //    }];
    //});
};