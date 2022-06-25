const mysql = require("mysql");
require("colors");



//connecDB Function

var connectDb = mysql.createPool({
  connectionLimit : 10,
  host:'127.0.0.1',
  user: 'root',
  password: 'Pavithra@181289',
  database: 'keralatask'
});



//export
module.exports = connectDb;



