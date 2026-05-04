# EC2 Express App

A simple Node.js Express application designed to run on an AWS EC2 instance.

## Requirements
- Node.js and npm installed

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the application**:
   ```bash
   npm start
   ```

3. **Access the app**:
   The server will be running on `http://localhost:3000`. If running on EC2, ensure port 3000 is open in your Security Group and access it via `http://<your-ec2-ip>:3000`.
