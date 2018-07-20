var aws = require('aws-sdk');

var s3 = new aws.S3();

// Bucket names must be unique across all S3 users

var bucket = '';
var key = '';


aws.config.loadFromPath('./config.json');

s3.createBucket({Bucket: myBucket}, function(err, data) {

if (err) {

   console.log(err);

   } else {

     params = {Bucket: bucket, Key: key, Body: 'Hello!'};

     s3.putObject(params, function(err, data) {

         if (err) {

             console.log(err)

         } else {

             console.log("Successfully uploaded data to" + bucket);

         }

      });

   }

});
