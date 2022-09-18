const express = require('express');
const bodyParser = require('body-parser');
const chalk = require('chalk');
// cfnresponse module help in sending responses to CloudFormation instead of writing your own code
const cfnresponse = require('cfn-response');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

const port = 8080; // HTTP Server Port
const context = { logStreamName: "logStream", done: ()=> {} };
const customResourcePhysicalID = 'MySeleniumTest123';

// Handle POST requests
app.post('/', (req, res) => {
  // Get HTTP request body
  const body = JSON.parse(req.body);

  // Subscription confirmation
  if (body.Type == 'SubscriptionConfirmation') {
    console.log(chalk.red('======= SNS Subscription Confirmation received! ======='));

    console.log(chalk.green('Subscription URL:'), body.SubscribeURL, '\n\n');
  } else if (body.Type == 'Notification') { // Notification
    // Get the custom resource request
    const request = JSON.parse(body.Message);

    console.log(chalk.red('======= SNS Notification received! ======='));
    console.log(chalk.green('Request:'), request, '\n\n');

    // Create && Update
    if (request.RequestType == 'Create' || request.RequestType == 'Update') {
      setTimeout(() => {
        cfnresponse.send(request, context, cfnresponse.SUCCESS, {}, customResourcePhysicalID);
      }, 10000); // Time to wait before continue (Create/Update)
    } else { // Delete
      cfnresponse.send(request, context, cfnresponse.SUCCESS, {}, customResourcePhysicalID);
    }
  }

  return res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`HTTP server listening at http://localhost:${port}`);
});