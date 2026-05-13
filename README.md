# 🌐 Cloud Resume Project (AWS Serverless Architecture)

## 🚀 Overview 

This is a fully deployed serverless portfolio website built using AWS Cloud services.  
It includes a real-time visitor counter powered by a backend API and cloud database.

The project demonstrates end-to-end cloud deployment including frontend hosting, backend logic, API integration, and database management.


## 🏗️ Architecture

User
 ↓
CloudFront (CDN + HTTPS)
 ↓
S3 Static Website Hosting
 ↓
API Gateway (REST API)
 ↓
AWS Lambda (Backend Logic)
 ↓
DynamoDB (Database)

🌍 Features

Responsive portfolio website

Live visitor counter (real-time updates)
Fully serverless backend architecture
HTTPS secured deployment via CloudFront
Global CDN for fast content delivery
Cloud database integration using DynamoDB
Version controlled using Git & GitHub

☁️ AWS Services Used

S3 (Static Website Hosting)
Hosted HTML, CSS, and JavaScript files
Enabled public website access

CloudFront (CDN)
Improved global performance
Enabled HTTPS secure access

AWS Lambda (Backend)
Python-based serverless function
Reads and updates visitor count in DynamoDB

DynamoDB (Database)
NoSQL database storing visitor count
Table structure:
id (Partition Key)
count (Number)

API Gateway
Exposed Lambda as REST API
Route: /prod/visitore

🔁 Workflow

User opens website
Frontend sends request to API Gateway
API triggers Lambda function
Lambda updates DynamoDB
Updated count is returned to frontend
Website displays live visitor count

🧠 Key Learnings

Serverless architecture design
AWS service integration
IAM roles and permissions
API development and debugging
Frontend ↔ backend communication
Real-world cloud deployment workflow


🏁 Conclusion

This project demonstrates a complete serverless cloud application using AWS services, covering frontend, backend, APIs, and database integration in a real-world architecture.
