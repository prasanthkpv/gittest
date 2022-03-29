const sqlConnection = require('../client/connection');

module.exports.insertQuery = (data) => {
    let result = new Promise((resolve, reject) => {
        sqlConnection.query(data, function(err, results, fields) {
            resolve(results);
            reject(err);
        });
    }).catch((err) => {console.log(err)});
    return result;
};