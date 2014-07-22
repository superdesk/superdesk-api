
var protagonist = require('protagonist'),
    path = require('path'),
    fs = require('fs');

fs.readFile(path.join(__dirname, '/apiary.apib'), function(error, buffer) {
    if (error) {
        console.error(error);
        process.exit(1);
    }

    var data = '' + buffer;
    protagonist.parse(data, function(error, result) {
        if (error) {
            console.error(error);
            console.log('in', data.substr(error.location[0].index, 30));
            process.exit(1);
        }

        console.log(result.ast);
    });
});
