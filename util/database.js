const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'node-online-store',
  password: 'nemanja123',
});

module.exports = pool.promise();
