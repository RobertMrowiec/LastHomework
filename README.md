# Last application Homework Description:
Backend Developer Homework  
Write an application in [NodeJS] to serve four endpoints described below. Selection of libraries and frameworks is up to you. The source directory must have the file run.sh which let you run the application in systems with Unix or run.bat for Windows. README.md file should contain a brief description of your approach to the assignment. The application doesn't have to save anything persistently, the answers can be permanently placed in the code although each addition is plus. We provide two samples for API requests, designing other two is part of the homework. Solving the homework should take around few hours.   Solution of this assignment should be placed in a Bitbucket repository with the history of changes. Bitbucket has a limitation which doesn't allow to grant access to a team. Thus in order to give us access you need to transfer ownership of the repository to the 'X' team: https://X.html"  Task description The business goal of the task is building a small rest service that allows managing party invitations. In the scope of the task we have:  Creation of invitation, which should trigger email notification to invitee Listing invitations Declining/confirming the invitation, both should trigger email notification to invitee Sending of email can be mocked.   Note: This is not a complete specification. The task is defined vaguely on purpose so that you can show your skills, approach and attitude.    Sample API requests  Please remember it’s a potential example, not specification!    1) CREATE INVITATION Request: POST /invitation HTTP/1.1  Content-Type: application/json;charset=utf-8  { "invitee": "John Smith", "email": "john@smith.mx" }   Response: HTTP/1.1 201 Created   2) LIST INVITATIONS Request:  GET /invitation HTTP/1.1    Response:  HTTP/1.1 200 OK  Content-Type: application/json;charset=utf-8  [  { "invitee": "John Smith", "email": "john@smith.mx" } ]   3) CONFIRM INVITATION Up to you   4) DECLINE INVITATION Up to you

My readme ( from task ):

# Invitations Service
=====================

This app is small rest service to manage party invitations.

# Used framework:

* Express (https://github.com/expressjs/express)

# Used modules for tests:

* Mocha (https://github.com/mochajs/mocha)
* Chai (https://github.com/chaijs/chai)

# Database

Everything is stored in in-memory database and it's clearing every time when app restart.
I made functions for GET, ADD and UPDATE objects in this database.

# Test

npm run testMac / npm run testWin ( based on OS )

OR

run test.bat ( on Windows CMD )

# Usage:

npm i
npm start

OR

run run.bat ( on Windows CMD )

Used port : 8020
Allowed origins ( list of origins ( domains ) can be used during connection to the app from FrontEnd to gain user permissions for access to selected resources from a server ) : 'http://localhost:4200' ( default for Angular applications ) and 'http://localhost:3000' ( default for ReactJS applications)

# Documentation

Made in Swagger.
To open documentation run the app and connect to : http://localhost:8020/api-docs

# My approach for this project

Get information about the task of the project, his specifications and needed Rest API's.
Since I have possibility to choose frameworks and modules - choose the best one for this project based on functionality
Prepare the enviroment
Plan order of smaller tasks
Code first functions for testing if enviroment works good
Write tests and codes for expected functionality
Refactor functions and tests

# My approach for every projects
Get information about project and using technologies ( if it's already selected ) and learn more about them or ask other developers if something isn't understandable.
Apart from this, I used to following upper rules from section 'My approach for this project'
