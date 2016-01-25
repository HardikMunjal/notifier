var nodemailer = require("nodemailer");
var CronJob = require('cron').CronJob;

module.exports = function () {

  new CronJob('* * * * *', function() {

    console.log('You will see this message every second');
    console.log('sending mail');  
    var smtpTransport = nodemailer.createTransport("SMTP",{
     service: "Gmail",  // sets automatically host, port and connection security settings
     auth: {
       user: "hardik.munjal@polestarllp.com",
       pass: "timeforchange2"
     }
   });

smtpTransport.sendMail({  //email options
   from: "hardik <hardik.munjal@polestarllp.com>", // sender address.  Must be the same as authenticated user if using Gmail.
   to: "draka <api.integration@paytm.com>", // receiver
   subject: "Emailing with nodemailer 2", // subject
   text: "nodemailer", // body
   html: '<table><tr><th>Merchant_id</th><th>Salary</th></tr><tr><td>Ramesh Raman</td><td>5000</td></tr><tr><td>Shabbir Hussein</td><td>7000</td></tr></table>', // html body
   attachments: [

   { 
    filename: "somepicture.csv",    
    contents: new Buffer('1997,Ford,E350', 'UTF-8')  // html body
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