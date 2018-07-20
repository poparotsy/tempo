var Consumer = require('sqs-consumer');
var aws = require('aws-sdk');
aws.config.loadFromPath('./config.json');

var app = Consumer.create({
  queueUrl: 'https://sqs.us-west-2.amazonaws.com/xxxxxxxxxxxxxxxxx',
  region: 'us-west-2',
  batchSize: 10,
  handleMessage: function (message, done) {

    var msgBody = JSON.parse(message.Body);
    console.log(msgBody);

    return done();
  }
});

app.on('error', function (err) {
  console.log(err);
});

app.start();
