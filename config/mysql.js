var mysql = require('mysql');

//*************Currently not in use*********************
var connection = mysql.createConnection({
  connectionLimit: 10,
 host: '54.255.153.194',
  user: 'fulfillment_support',
  password: 'Ff#_1suppOrT',
 database: 'ff_support',
  port:'9079'
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
