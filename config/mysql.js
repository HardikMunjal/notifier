var mysql = require('mysql');

//*************Currently not in use*********************
var connection = mysql.createConnection({
  connectionLimit: 10,
    host: 'localhost',
            user: 'root',
            password : 'root',
            port : 3306, //port mysql
            database:'swiftmkt'
});

console.log('coming here');

connection.on('error', function(err) {
  console.log(err);
  //console.log(connection);
  connection.destroy();
  //console.log(connection);
});

module.exports = {
  simpletrans: function(query, fn) {
    connection.query(query, fn);
  }
}
