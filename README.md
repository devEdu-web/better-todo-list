# To-do list improved

This project is an improvement of the former To-do list I made as my first Javascript project, you can access the old project [here](https://github.com/devEdu-web/todo-list). In this project, I implemented the use of a database, to store tasks and its users, and the use of authentication with JWT.

## Project Flow
First of all, the user must create an account so the application can store this user in the database. After signing in, it will be given a JWT token to the user, which will expire in one hour. After that the user can add and delete how many tasks he wants.

For the record, an ***task document*** is not created when the user is created. When the user creates a new task, the application verifies if that user already has a ***task document*** with his ID, if it does, it updates the document, if it doesn't, it creates a new one.

***

## What I learned / Reinforced

* Relationships on MongoDB
* Cookies
* Authentication flow
* Validation
* Routes protection
* Basic chaining (for validation)


***

## Project Screenshots

![register-page-screenshot](https://cdn.discordapp.com/attachments/611633543420051458/946188945249669140/unknown.png)
![main-page-screenshot](https://cdn.discordapp.com/attachments/611633543420051458/946188745265254440/unknown.png)

***

## Technologies used

![node-badge](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![express-badge](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![mongodb-badge](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![jwt-badge](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white)
![bootstrap-badge](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)

***