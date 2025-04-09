const AWS = require("aws-sdk");
const sns = new AWS.SNS();

exports.handler = async (event) => {
  try {
    const records = event.Records;
    await Promise.all(
      records.map(async (record) => {
        const bucket = record.s3.bucket.name;
        const key = record.s3.object.key;
        const size = record.s3.object.size;

        const message =
          `New file uploaded to ${bucket} : \n\n` +
          `File name: ${key} \n` +
          `File size: ${size} bytes \n`;
        // for commit

        await sns
          .publish({
            TopicArn: process.env.SNS_TOPIC_ARN,
            Subject: `New file uploaded to ${bucket}`,
            Message: message,
          })
          .promise();
      })
    );

    return {
      statusCode: 200,
      body: JSON.stringify("SNS notification has been sent successfully!"),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify("There was an Error in sending SNS notification!"),
    };
  }
};
