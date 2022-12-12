# Team-Vulture2-Backend
This repo is for our backend developers for Vulterm. Vulterm is a platfrom that allows users to generate personalized T&C(Terms and Conditions) and Privacy policy for free at the click of a button.

## General
A unique Terms and Conditions and Privacy policy is essential to protect any online business from legal risk or liability. Drafting a T&C and Privacy policy can be cumbersome,expensive,and time consuming. Vulterm resolves these deficiences as it allows Authenticated users to generate a personalized T&C and Privacy policy for free at the click of a button. <br>

[Documentation](https://www.figma.com/file/FHyaAy6QFKBfQefJ0hnHj1/Vulterm-Documentation?node-id=0%3A1&t=PwiUVYQE8d5kzB7j-0
)<br>

[Frontend](https://github.com/zuri-training/Team-Vulture2)

## Getting Started

### Pre-requisites and Local Development 
Developers that want to contribute to this project should already have Node and Mongo installed on their local machines. 

#### Setting Up
To get started open your terminal and fork this [repository](https://github.com/zuri-training/Team-Vulture2-Backend) and clone the repository on your personal account by running the code below
```
git clone https://github.com/<your username>/Team-Vulture2-Backend/
```
Move into the cloned directory by running
```
cd Team-Vulture2-Backend
```
You can then install all the dependencies for the project by runing the code below inside your terminal in the project directory
```
npm install
```

After installing all the dependencies, to start the server run the code below inside your terminal
```
node
```

These commands put the application in development mode and directs our application to use the index.js file.

Add whatever you wished to contribute and make a pull request back to the upstream repository which will then be reviewed
authentication or API keys. 

## Vulterms API Reference

### Getting Started
- Base URL: At present this app can only be run locally and is not hosted as a base URL. The backend app is hosted on, `https://team-vulture2-backend.vercel.app/` 
- Authentication: This version of the application does not require authentication or API keys. 


**Note: All https requests can be make using postman app or any other similar app or extension**

### Error Handling
Errors are returned as JSON objects in the following format:
```
{
    "success": false,
    "message": "resource not found"
}
```
The API will return four error types when requests fail:
- 400: Bad request
- 401: Unauthorized
- 404: Resource Not Found
- 500: Server error 

### Endpoints 

#### POST /users
- General:
    - register a new user relative to the details supllied
    - Request Body: the body will be passed as a rawjson data
    ```
    {
        "username": "User1",
        "email": "user1e@mail.com",
        "firstName": "New",
        "lastName": "User",
        "phoneNumber": "08034352725",
        "password": "user1password"
    }
    ```
    - Returns: a single new user object
- Sample: `https://team-vulture2-backend.vercel.app/users`
```
{
    "success": true,
    "message": "new user registered",
    "user": {
        "username": "User1",
        "email": "user1e@mail.com",
        "firstName": "New",
        "lastName": "User",
        "phoneNumber": "08034352725",
        "password": "user1password",
        "_id": "63962a19683eedcd74dcede0",
        "createdAt": "2022-12-11T19:06:01.467Z",
        "updatedAt": "2022-12-11T19:06:01.467Z",
        "__v": 0
    }
}
```

#### POST /login
- General:
    - login a user relative to the details supllied
    - Request Body: the body will be passed as a rawjson data
    ```
    {
        "email": "user1e@mail.com",
        "password": "newuser1password"
    }
    ```
    - Returns: verify if the user exist and if the password supplied is correct after which it returns the details of the user
- Sample: `https://team-vulture2-backend.vercel.app/login`
```
{
    "success": true,
    "message": "User found",
    "user": {
        "_id": "63962c1a683eedcd74dcede7",
        "username": "User1",
        "email": "user1e@mail.com",
        "firstName": "New",
        "lastName": "User",
        "phoneNumber": "08034352725",
        "password": "newuser1password",
        "createdAt": "2022-12-11T19:14:34.327Z",
        "updatedAt": "2022-12-11T19:14:34.327Z",
        "__v": 0
    }
}
```

#### GET /users
- General:
    - Fetches all users
    - Request Arguments: none
    - Returns: An object with details of all the userss
- Sample: `https://team-vulture2-backend.vercel.app/users`
```
{
    "success": true,
    "message": "Users found",
    "users": [
        {
            "_id": "6396280076dcb966709f735f",
            "username": "Tolulophey",
            "email": "sample@mail.com",
            "firstName": "Tolulope",
            "lastName": "Amole",
            "phoneNumber": "08063673201",
            "password": "12345",
            "createdAt": "2022-12-11T18:57:04.126Z",
            "updatedAt": "2022-12-11T18:57:04.126Z",
            "__v": 0
        },
        {
            "_id": "6396283a76dcb966709f7361",
            "username": "User1",
            "email": "user1e@mail.com",
            "firstName": "New",
            "lastName": "User",
            "phoneNumber": "08034352725",
            "password": "user1password",
            "createdAt": "2022-12-11T18:58:02.890Z",
            "updatedAt": "2022-12-11T18:58:02.890Z",
            "__v": 0
        },
        {
            "_id": "63962a19683eedcd74dcede0",
            "username": "User2",
            "email": "user2e@mail.com",
            "firstName": "New",
            "lastName": "User",
            "phoneNumber": "08034352725",
            "password": "user2password",
            "createdAt": "2022-12-11T19:06:01.467Z",
            "updatedAt": "2022-12-11T19:06:01.467Z",
            "__v": 0
        }
    ],
    "total": 3
}
```

#### GET /users/:id
- General:
    - Fetches a single user whose id is passed as parameter in the request url
    - Request Arguments: id of the user
    - Returns: An object with details of the user whose id was passed as parameter
- Sample: `https://team-vulture2-backend.vercel.app/users/6396283a76dcb966709f7361`
```
{
    "success": true,
    "message": "User found",
    "user": {
        "_id": "6396283a76dcb966709f7361",
        "username": "User1",
        "email": "user1e@mail.com",
        "firstName": "New",
        "lastName": "User",
        "phoneNumber": "08034352725",
        "password": "user1password",
        "createdAt": "2022-12-11T18:58:02.890Z",
        "updatedAt": "2022-12-11T18:58:02.890Z",
        "__v": 0
    }
}
```

#### PUT /users/:id
- General:
    - edit/update a specified user details using the id of the user
    - Request Arguments: the http url containing the id of the user and a raw json data request body in the format below
    ```
    {
        "username": "User1",
        "email": "user1e@mail.com",
        "firstName": "New",
        "lastName": "User",
        "phoneNumber": "08034352725",
        "password": "newuser1password"
    }
    ```
    - Returns: status message(user updated successfully and the details of the user updated)
- Sample: `https://team-vulture2-backend.vercel.app/users/6396283a76dcb966709f7361`
```
{
    "success": true,
    "message": "User updated successfully",
    "user": {
        "_id": "6396283a76dcb966709f7361",
        "username": "User1",
        "email": "user1e@mail.com",
        "firstName": "New",
        "lastName": "User",
        "phoneNumber": "08034352725",
        "password": "newuser1password",
        "createdAt": "2022-12-11T18:58:02.890Z",
        "updatedAt": "2022-12-11T19:11:29.631Z",
        "__v": 0
    }
}
```

#### DELETE /users/:id
- General:
    - Deletes a specified user using the id of the user
    - Request Arguments: id of the user 
    - Returns: deleted successfully message
- Sample: `https://team-vulture2-backend.vercel.app/users/6396283a76dcb966709f7361`
```
{
    "success": true,
    "message": "user deleted successfully"
}
```

