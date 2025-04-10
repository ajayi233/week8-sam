# S3 Upload Notifier

## Description

The S3 Upload Notifier is an event-driven application that integrates AWS S3, Lambda, and SNS to send notifications whenever a new file is uploaded to an S3 bucket. The application is designed to work in both development and production environments, making it flexible for various use cases.

## Features

- Automatically sends an email notification when a new file is uploaded to the specified S3 bucket.
- Configurable via AWS SAM (Serverless Application Model).
- Supports multiple environments (dev and prod).

## Prerequisites

- AWS account with necessary permissions.
- Node.js version 18 or higher.
- AWS CLI and AWS SAM CLI installed.

## Setup

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd s3-upload-notifier
   ```

2. **Install dependencies:**

   ```bash
   cd src
   npm install
   ```

3. **Configure AWS Credentials:**

   Set up your AWS credentials using the AWS CLI or environment variables.

4. **Deploy the application:**

   Use the Github Actions workflow or locally via SAM CLI:

   ```bash
   sam build --template-file template.yaml
   sam deploy --guided
   ```

5. **Environment Configuration:**

   Update `template.yaml` with your environment-specific parameters like `EnvironmentName` and `NotificationEmail`.

## Usage

Once deployed, any file uploaded to the configured S3 bucket will trigger a Lambda function that sends an SNS notification to the specified email address.

