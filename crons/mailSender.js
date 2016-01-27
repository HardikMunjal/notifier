var nodemailer = require("nodemailer");
var CronJob = require('cron').CronJob;
var async = require("async");
var json2csv = require('json2csv');

module.exports = function () {

  new CronJob('* * * * *', function() {

    console.log('You will see this message ,when resource would be available to process your request');
    console.log('sending mail');  
    var smtpTransport = nodemailer.createTransport("SMTP",{
     service: "Gmail",  // sets automatically host, port and connection security settings
     auth: {
       user: "hardik.munjal@polestarllp.com",
       pass: "++++++++++++++"
     }
   });






var deee = [{email:"hardik.munjaal@gmail.com",merchant_id:"121",fc_name:"abb",total_pid_live:"1",less_than_1_day:"1",less_than_two_day:"1",less_than_three_day:"1"},{email:"api.integration@paytm.com",merchant_id:"1222",fc_name:"ss",total_pid_live:"2",less_than_1_day:"2",less_than_two_day:"2",less_than_three_day:"2"}];





var listofemails = ["<hardik.munjaal@gmail.com","api.integration@paytm.com"];



var smtp = function(email,callback) {

var fields = ['car', 'price', 'color'];
var myCars = [
  {
    car: 'Audi',
    price: 40000,
    color: 'blue'
  }, {
    car: 'BMW',
    price: 35000,
    color: 'black'
  }, {
    car: 'Porsche',
    price: 60000,
    color: 'green'
  }
];

var xxx = json2csv( { data: myCars, fields: fields }, function(err, csv) {
  if (err) console.log(err);
var xx11 = csv;
console.log('xx11',xx11);
//var res = xx11.replace('"','');
var res=xx11.replace(/["]+/g,'')
console.log('resssssss',res);
 res="'"+res.replace(/[\n]+/g,"'\n'")+"'"
  console.log('resssssss',res);

  return res;
});


debugger;
console.log(email);


        
//***************************** email body configuration ********************************
 var html='<html><head></head><body><p>Hi '+  email.merchant_id  + '!</p>';
      html+='<p>Please find attached the list of shipments that have to be picked from our Return Processing centers and delivered to the merchants.</p>';
      html+='<table class="tftable" border="1"><thead>';
      html+='<tr><th>Merchant_id</th><th>fc_name</th><th>total_pid_live</th><th>less_than_1_day</th><th>less_than_two_day</th><th>less_tham_three_day</th></tr></thead><tbody>';
      html+='<tr><td>'+email.merchant_id+'</td>';
          html+='<td>'+email.fc_name+'</td>';
          html+='<td>'+email.total_pid_live+'</td>';
          html+='<td>'+email.less_than_1_day+'</td>';
          html+='<td>'+email.less_than_two_day+'</td>';
          html+='<td>'+email.less_than_three_day+'</td></tr>';
     html+='</tbody></table></body></html>';

  debugger;
  var attachment = [{
    //contentType: 'text/csv',
    filename: "merchant_data.csv",    
    contents: new Buffer(xxx,'UTF-8')
  }];
 // attachment.filename = 'attachment' + Date.now() + '.csv';
  //attachment.content = new Buffer('100001,api.integration', 'UTF-8');


var emailConfig = {  //email options
   from: "Aman <hardik.munjal@polestarllp.com>", // sender address.  Must be the same as authenticated user if using Gmail.
   to: email.email, // receiver
   subject: "Merchant Records xxx", // subject
   text: "nodemailer", // body
   html: html, // html body
   attachments: attachment
};

//******************************smtp send mail method *********************************************
  smtpTransport.sendMail(emailConfig, function(error, response){  //callback
 if(error){
   callback(error);
 }else{
   console.log("Message sent: " + response.message);
   callback();
 }

   //smtpTransport.close(); // shut down the connection pool, no more messages.  Comment this line out to continue sending emails.
 })
}

async.eachLimit(deee,2,smtp,function(err){
        if (err){
          console.log(err);
        

        return process.exit(0);
      }
        // console.log(success_email);
        // console.log(failure_email);
     });

}, null, true, 'America/Los_Angeles');



};