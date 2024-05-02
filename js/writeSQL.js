var mysql = require('mysql2');

const writeSQL = (sql, params) => {
    return new Promise((resolve, reject) => {
        const connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '123456',
            database: 'test1',
            port: 3306
        });
        connection.connect();
        connection.query(sql, params, (err, result) => {
            connection.end();
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
        
    });
};


module.exports = writeSQL;