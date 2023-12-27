# Face Detection API and React Native App

This project demonstrates the implementation of a Face Detection API using AWS and its integration into a React Native app.

## Face Detection API

### Technologies Used
- AWS Rekognition for Face Detection
- AWS Lambda for serverless functions
- AWS API Gateway for API management
- Serverless Framework for deployment

### Prerequisites
- AWS account with appropriate permissions
- Serverless Framework installed (`npm install -g serverless`)

### Setup

1. **AWS Configuration:**
   - Create an IAM user with Lambda and Rekognition permissions.
   - Configure AWS CLI with the IAM user's credentials (`aws configure`).

2. **Serverless Setup:**
   - Navigate to the `api` directory.
   - Install dependencies: `npm install`.
   - Deploy the API: `serverless deploy`.

3. **API Endpoint:**
   - After deployment, note the API endpoint URL.

## React Native App

### Technologies Used
- React Native for mobile app development
- Axios for API requests

### Prerequisites
- Node.js and npm installed
- React Native development environment set up

### Setup

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/abaidbutt/shieldrec.git
   cd shieldrec
