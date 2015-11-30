/**
 * create file
 */

module.exports = function (url, doc) {
    var fs = require('fs');

    fs.writeFile(url, doc, function (err) {
        console.log('ok');
        if (err) {
            console.log(err);
        }
        console.log('save success!!!');
    });
};