var nodemailer = require("nodemailer");
var CronJob = require('cron').CronJob;

module.exports = function () {

  new CronJob('* * * * *', function() {

    console.log('You will see this message ,when resource would be available to process your request');
    console.log('sending mail');  
    var smtpTransport = nodemailer.createTransport("SMTP",{
     service: "Gmail",  // sets automatically host, port and connection security settings
     auth: {
       user: "aman.maurya@polestarllp.com",
       pass: "*******"
     }
   });

smtpTransport.sendMail({  //email options
   from: "Aman <aman.maurya@polestarllp.com>", // sender address.  Must be the same as authenticated user if using Gmail.
   to: "draka <api.integration@paytm.com>", // receiver
   subject: "Merchant Records", // subject
   text: "nodemailer", // body
   html: '<table><tr><th>Merchant_id</th><th>Merchant name</th></tr><tr><td>121</td><td>Atul aggr</td></tr><tr><td>122</td><td>navin</td></tr></table>', // html body
   attachments: [

   { 
    filename: "merchant_data.csv",    
    contents: new Buffer('100001,api.integration', 'UTF-8')  // html body
   }   
  ]   
}, function(error, response){  //callback
 if(error){
   console.log(error);
 }else{
   console.log("Message sent: " + response.message);
 }

   //smtpTransport.close(); // shut down the connection pool, no more messages.  Comment this line out to continue sending emails.
 });
}, null, true, 'America/Los_Angeles');

};