var mysql = require('../config/mysql');

var MerchantInventory = {

 getMerchantInventorySummary: function(options, cb) {
 
     var query = {
            sql: 'SELECT * FROM UserBasicInfo'
            }
     mysql.simpletrans(query, function(e, r) {
        if (e) {
            console.log(e);
        } else {
            console.log(r[0])
            cb(null,r);
        }
    });

 },

 getmerchantProducts: function(options, cb)
 {

  console.log(options);
  
  var arr = { sql : 'INSERT INTO UserBasicInfo set first_name="haha1"' ,sql : 'INSERT INTO UserBasicInfo set first_name="haha2"' } ;
  mysql.trans(arr, function(err, result) {
    cb(err, result);
  });
 }



};
module.exports = MerchantInventory;


   


