var nodemailer = require("nodemailer");
var CronJob = require('cron').CronJob;
var async = require("async");

module.exports = function () {

  new CronJob('* * * * *', function() {

    console.log('You will see this message ,when resource would be available to process your request');
    console.log('sending mail');  
    var smtpTransport = nodemailer.createTransport("SMTP",{
     service: "Gmail",  // sets automatically host, port and connection security settings
     auth: {
       user: "hardik.munjal@polestarllp.com",
       pass: "timeforchangex"
     }
   });

var listofemails = ["<hardik.munjaal@gmail.com","api.integration@paytm.com"];
var smtp = function(email,callback){
debugger;
console.log(email);


***************************** email body configuration ********************************
var emailConfig = {  //email options
   from: "Aman <hardik.munjal@polestarllp.com>", // sender address.  Must be the same as authenticated user if using Gmail.
   to: email, // receiver
   subject: "Merchant Records", // subject
   text: "nodemailer", // body
   html: '', // html body
   attachments: [

   { 
    filename: "merchant_data.csv",    
    contents: new Buffer('100001,api.integration', 'UTF-8')  // html body
   }   
  ]   
};
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

async.eachLimit(listofemails,2,smtp,function(err){
        if (err){
          console.log(err);
        

        return process.exit(0);
      }
        // console.log(success_email);
        // console.log(failure_email);
     });

}, null, true, 'America/Los_Angeles');

};