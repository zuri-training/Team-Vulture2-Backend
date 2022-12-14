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
- Base URL: At present, the backend app is hosted on `https://team-vulture2-backend.vercel.app/` 
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
#### Users Endpoints
#### POST /users/register
- General:
    - register a new user relative to the details supllied
    - Request Body: the body will be passed as a raw json data
    ```
    {
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
        "user_id": "63962a19683eedcd74dcede0"
        "email": "user1e@mail.com",
        "firstName": "New",
        "lastName": "User",
        "phoneNumber": "08034352725",
    }
}
```

#### GET /users
- General:
    - Fetches all users
    - Request Arguments: none
    - Returns: An object with details of all the users
- Sample: `https://team-vulture2-backend.vercel.app/users`
```
{
    "success": true,
    "message": "Users found",
    "users": [
        {
            "_id": "639856d4d7dee48e6da86635",
            "email": "user@mail.com",
            "firstName": "New",
            "lastName": "User",
            "phoneNumber": "08034352725",
            "password": "$2a$10$YCeX9CdpNA3XUQ2UAqzVHOJdwpv7MHeHgwGojn0lhOTtcOM.qHfE.",
            "createdAt": "2022-12-13T10:41:24.118Z",
            "updatedAt": "2022-12-13T10:41:24.118Z",
            "__v": 0
        },
        {
            "_id": "6398e4ecb03eedcb216e2d37",
            "email": "sample@mail.com",
            "firstName": "Tolulope",
            "lastName": "Amole",
            "phoneNumber": "08063673201",
            "password": "$2a$10$JFDDCsqWfKuKD3JAoAqxHu.heYWn7vf1YxBbzQKa5Zub5nm/EeQ4.",
            "createdAt": "2022-12-13T20:47:40.960Z",
            "updatedAt": "2022-12-13T20:47:40.960Z",
            "__v": 0
        },
        {
            "_id": "6398e516b03eedcb216e2d3b",
            "email": "user2@mail.com",
            "firstName": "New",
            "lastName": "User",
            "phoneNumber": "08034352725",
            "password": "$2a$10$RwEVJyPgpoRFG6FG3DXkXuBChX6dlWKBitJngtEN82QV3cJbCP4Q2",
            "createdAt": "2022-12-13T20:48:22.087Z",
            "updatedAt": "2022-12-13T20:48:22.087Z",
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
        "user_id": "6396283a76dcb966709f7361",
        "email": "user1e@mail.com",
        "firstName": "New",
        "lastName": "User",
        "phoneNumber": "08034352725"
    }
}
```

#### PUT /users/:id
- General:
    - edit/update a specified user details using the id of the user
    - Request Arguments: the http url containing the id of the user and a raw json data request body in the format below
    ```
    {
        "email": "user1e@mail.com",
        "firstName": "New",
        "lastName": "User",
        "phoneNumber": "08034352725"
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
        "email": "user1e@mail.com",
        "firstName": "New",
        "lastName": "User",
        "phoneNumber": "08034352725"
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

#### POST users/login
- General:
    - login a user relative to the details supllied
    - Request Body: the body will be passed as a raw json data
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
        "user_id": "63962c1a683eedcd74dcede7",
        "email": "user1e@mail.com",
        "firstName": "New",
        "lastName": "User",
        "phoneNumber": "08034352725"
    }
}
```

#### PUT /users/:id/password
- General:
    - change the password of a specified user using the id of the user
    - Request Arguments: the http url containing the id of the user and a raw json data request body in the format below
    ```
    {
        "password": "newuser1password"
    }
    ```
    - Returns: status message(Password changed successfully)
- Sample: `https://team-vulture2-backend.vercel.app/users/6396283a76dcb966709f7361/password`
```
{
    "success": true,
    "message": "Password changed successfully"
}
```



#### Privacy Policy Endpoints
#### POST /policies
- General:
    - create a privacy policy relative to the details supllied
    - Request Body: the body will be passed as a raw json data
    ```
    {
        "name": "Sample Website Policy",
        "user_id": "63962a19683eedcd74dcede0",
        "data": {
                "where": ["website"],
                "whereDetails": {
                    "websiteUrl": "https://www.samplewebsite.com",
                    "websiteName": "Sample website",
                    "entityType": "business",
                    "country": "Nigeria"
                },
                "informationType": ["email", "full name", "address", "social media", "others"],
                "contact": {
                    "email": "contact@samplewebsite.com",
                    "phoneNumber": "08134263292",
                    "webPage": "https://www.samplewebsite.com/contact.html"
                }
        }  
    }
    ```
    - Returns: a single new privacy policy object
- Sample: `https://team-vulture2-backend.vercel.app/policies`
```
{
    "success": true,
    "message": "new policy successfully created",
    "newPolicy": {
        "name": "Sample Website  Policy",
        "user_id": "63962a19683eedcd74dcede0",
        "data": {
            "where": [
                "website"
            ],
            "whereDetails": {
                "websiteUrl": "https://www.samplewebsite.com",
                "websiteName": "Sample website",
                "entityType": "business",
                "country": "Nigeria"
            },
            "informationType": [
                "email",
                "full name",
                "address",
                "social media",
                "others"
            ],
            "contact": {
                "email": "contact@samplewebsite.com",
                "phoneNumber": "08134263292",
                "webPage": "https://www.samplewebsite.com/contact.html"
            },
            "_id": "63985aa11711b81b1044ffc1"
        },
        "policyType": "NDPR",
        "_id": "63985aa11711b81b1044ffc0",
        "createdAt": "2022-12-13T10:57:37.212Z",
        "updatedAt": "2022-12-13T10:57:37.212Z",
        "__v": 0
    }
}
```

#### GET /policies
- General:
    - Fetches all privacy policies
    - Request Arguments: none
    - Returns: An object with details of all the privacy policies
- Sample: `https://team-vulture2-backend.vercel.app/policies`
```
{
    "success": true,
    "message": "Privacy Policies found",
    "policies": [
        {
            "_id": "6398489ee6c16eb7acdbbfbb",
            "name": "Sample Website Policy",
            "user_id": "63962a19683eedcd74dcede0",
            "data": {
                "where": [
                    "website",
                    "app"
                ],
                "whereDetails": {
                    "websiteUrl": "https://www.samplewebsite.com",
                    "websiteName": "Sample website",
                    "entityType": "business",
                    "country": "Nigeria"
                },
                "informationType": [],
                "contact": {
                    "email": "contact@samplewebsite.com",
                    "phoneNumber": "08043256645",
                    "webPage": "https://www.samplewebsite.com/contact.html"
                },
                "_id": "6398489ee6c16eb7acdbbfbc"
            },
            "policyType": "NDPR",
            "createdAt": "2022-12-13T09:40:46.963Z",
            "updatedAt": "2022-12-13T09:40:46.963Z",
            "__v": 0
        },
        {
            "_id": "63984f2b602ac0326d22e260",
            "name": "Sample Website Two Policy",
            "user_id": "63962a19683eedcd74dcede0",
            "data": {
                "where": [
                    "website"
                ],
                "whereDetails": {
                    "websiteUrl": "https://www.samplewebsitetwo.com",
                    "websiteName": "Sample website Two",
                    "entityType": "business",
                    "country": "Nigeria"
                },
                "informationType": [
                    "email",
                    "full name",
                    "address",
                    "social media",
                    "others"
                ],
                "contact": {
                    "email": "contact@samplewebsitetwi.com",
                    "phoneNumber": "08134263292",
                    "webPage": "https://www.samplewebsitetwo.com/contact.html"
                },
                "_id": "63984f2b602ac0326d22e261"
            },
            "policyType": "NDPR",
            "createdAt": "2022-12-13T10:08:43.115Z",
            "updatedAt": "2022-12-13T10:08:43.115Z",
            "__v": 0
        },
        {
            "_id": "63985aa11711b81b1044ffc0",
            "name": "Sample Website  Policy",
            "user_id": "63962a19683eedcd74dcede0",
            "data": {
                "whereDetails": {
                    "websiteUrl": "https://www.samplewebsite.com",
                    "websiteName": "Sample website",
                    "entityType": "business",
                    "country": "Nigeria"
                },
                "contact": {
                    "email": "contact@samplewebsite.com",
                    "phoneNumber": "08134263292",
                    "webPage": "https://www.samplewebsite.com/contact.html"
                },
                "where": [
                    "website"
                ],
                "informationType": [
                    "email",
                    "full name",
                    "address",
                    "social media",
                    "others"
                ],
                "_id": "63985aa11711b81b1044ffc1"
            },
            "policyType": "NDPR",
            "createdAt": "2022-12-13T10:57:37.212Z",
            "updatedAt": "2022-12-13T10:57:37.212Z",
            "__v": 0
        }
    ],
    "total": 3
}
```

#### GET /policies/:id
- General:
    - Fetches a single privacy policy whose id is passed as parameter in the request url
    - Request Arguments: id of the privacy policy
    - Returns: An object with details of the privacy policy whose id was passed as parameter
- Sample: `https://team-vulture2-backend.vercel.app/policies/63985aa11711b81b1044ffc0`
```
{
    "success": true,
    "message": "Privacy Policy found",
    "policy": {
        "_id": "63985aa11711b81b1044ffc0",
        "name": "Sample Website  Policy",
        "user_id": "63962a19683eedcd74dcede0",
        "data": {
            "whereDetails": {
                "websiteUrl": "https://www.samplewebsite.com",
                "websiteName": "Sample website",
                "entityType": "business",
                "country": "Nigeria"
            },
            "contact": {
                "email": "contact@samplewebsite.com",
                "phoneNumber": "08134263292",
                "webPage": "https://www.samplewebsite.com/contact.html"
            },
            "where": [
                "website"
            ],
            "informationType": [
                "email",
                "full name",
                "address",
                "social media",
                "others"
            ],
            "_id": "63985aa11711b81b1044ffc1"
        },
        "policyType": "NDPR",
        "createdAt": "2022-12-13T10:57:37.212Z",
        "updatedAt": "2022-12-13T10:57:37.212Z",
        "__v": 0
    }
}
```

#### PUT /policies/:id
- General:
    - edit/update a specified privacy policy details using the id of the privacy policy
    - Request Arguments: the http url containing the id of the privacy policy and a raw json data request body in the format below
    ```
    {
        "name": "Sample Website  Policy",
        "data": {
            "whereDetails": {
                "websiteUrl": "https://www.samplewebsite.com",
                "websiteName": "Sample website",
                "entityType": "business",
                "country": "Nigeria"
            },
            "contact": {
                "email": "contact@samplewebsite.com",
                "phoneNumber": "08134263292",
                "webPage": "https://www.samplewebsite.com/contact.html"
            },
            "where": [
                "website"
            ],
            "informationType": [
                "email",
                "full name",
                "address",
                "social media",
                "others"
            ]
        }
    }
    ```
    - Returns: status message(privacy policy updated successfully and the details of the privacy policy updated)
- Sample: `https://team-vulture2-backend.vercel.app/policies/63985aa11711b81b1044ffc0`
```
{
    "success": true,
    "message": "Privacy Policy updated successfully",
    "newPolicy": {
        "_id": "63985aa11711b81b1044ffc0",
        "name": "Sample Website  Policy",
        "user_id": "63962a19683eedcd74dcede0",
        "data": {
            "whereDetails": {
                "websiteUrl": "https://www.samplewebsite.com",
                "websiteName": "Sample website",
                "entityType": "business",
                "country": "Nigeria"
            },
            "contact": {
                "email": "contact@samplewebsite.com",
                "phoneNumber": "08134263292",
                "webPage": "https://www.samplewebsite.com/contact.html"
            },
            "where": [
                "website"
            ],
            "informationType": [
                "email",
                "full name",
                "address",
                "social media",
                "others"
            ],
            "_id": "63985aa11711b81b1044ffc1"
        },
        "policyType": "NDPR",
        "createdAt": "2022-12-13T10:57:37.212Z",
        "updatedAt": "2022-12-13T10:57:37.212Z",
        "__v": 0
    }
}
```

#### DELETE policies/:id
- General:
    - Deletes a specified privacy policy using the id of the privacy policy
    - Request Arguments: id of the privacy policy 
    - Returns: deleted successfully message
- Sample: `https://team-vulture2-backend.vercel.app/policies/63985aa11711b81b1044ffc0`
```
{
    "success": true,
    "message": "Privacy Policy deleted successfully"
}
```




#### Terms and Conditions Endpoints
#### POST /terms
- General:
    - create a policy relative to the details supllied
    - Request Body: the body will be passed as a raw json data
    ```
    {
        "name": "Sample Website Terms and Conditions",
        "user_id": "63962a19683eedcd74dcede0",
        "data": {
                "where": ["website"],
                "whereDetails": {
                    "websiteUrl": "https://www.samplewebsite.com",
                    "websiteName": "Sample website",
                    "entityType": "business",
                    "country": "Nigeria"
                },
                "informationType": ["email", "full name", "address", "social media", "others"],
                "contact": {
                    "email": "contact@samplewebsite.com",
                    "phoneNumber": "08134263292",
                    "webPage": "https://www.samplewebsite.com/contact.html"
                }
        }  
    }
    ```
    - Returns: a single new terms and constions object
- Sample: `https://team-vulture2-backend.vercel.app/terms`
```
{
    "success": true,
    "message": "New terms and conditions successfully created",
    "newTerm": {
        "name": "Sample Website Terms and Conditions",
        "user_id": "63962a19683eedcd74dcede0",
        "data": {
            "where": [
                "website"
            ],
            "whereDetails": {
                "websiteUrl": "https://www.samplewebsite.com",
                "websiteName": "Sample website",
                "entityType": "business",
                "country": "Nigeria"
            },
            "informationType": [
                "email",
                "full name",
                "address",
                "social media",
                "others"
            ],
            "contact": {
                "email": "contact@samplewebsite.com",
                "phoneNumber": "08134263292",
                "webPage": "https://www.samplewebsite.com/contact.html"
            },
            "_id": "639a0cb3ad698ff32a00f7d5"
        },
        "policyType": "NDPR",
        "_id": "639a0cb3ad698ff32a00f7d4",
        "createdAt": "2022-12-14T17:49:39.276Z",
        "updatedAt": "2022-12-14T17:49:39.276Z",
        "__v": 0
    }
}
```

#### GET /terms
- General:
    - Fetches all terms and conditions
    - Request Arguments: none
    - Returns: An object with details of all the terms and conditions
- Sample: `https://team-vulture2-backend.vercel.app/terms`
```
{
    "success": true,
    "message": "Terms and Condditions found",
    "terms": [
        {
            "_id": "639a0cb3ad698ff32a00f7d4",
            "name": "Sample Website Terms and Conditions",
            "user_id": "63962a19683eedcd74dcede0",
            "data": {
                "whereDetails": {
                    "websiteUrl": "https://www.samplewebsite.com",
                    "websiteName": "Sample website",
                    "entityType": "business",
                    "country": "Nigeria"
                },
                "contact": {
                    "email": "contact@samplewebsite.com",
                    "phoneNumber": "08134263292",
                    "webPage": "https://www.samplewebsite.com/contact.html"
                },
                "where": [
                    "website"
                ],
                "informationType": [
                    "email",
                    "full name",
                    "address",
                    "social media",
                    "others"
                ],
                "_id": "639a0cb3ad698ff32a00f7d5"
            },
            "termType": "NDPR",
            "createdAt": "2022-12-14T17:49:39.276Z",
            "updatedAt": "2022-12-14T17:49:39.276Z",
            "__v": 0
        },
        {
            "_id": "639a0d2cad698ff32a00f7d7",
            "name": "Sample Website Two Terms and Conditions",
            "user_id": "63962a19683eedcd74dcede0",
            "data": {
                "whereDetails": {
                    "websiteUrl": "https://www.samplewebsitetwo.com",
                    "websiteName": "Sample website Two",
                    "entityType": "business",
                    "country": "Nigeria"
                },
                "contact": {
                    "email": "support@samplewebsitetwo.com",
                    "phoneNumber": "08133425292",
                    "webPage": "https://www.samplewebsite.com/help"
                },
                "where": [
                    "website"
                ],
                "informationType": [
                    "email",
                    "social media",
                    "others"
                ],
                "_id": "639a0d2cad698ff32a00f7d8"
            },
            "termType": "NDPR",
            "createdAt": "2022-12-14T17:51:40.530Z",
            "updatedAt": "2022-12-14T17:51:40.530Z",
            "__v": 0
        }
    ],
    "total": 2
}
```

#### GET /terms/:id
- General:
    - Fetches a single terms and conditions whose id is passed as parameter in the request url
    - Request Arguments: id of the terms and conditions
    - Returns: An object with details of the terms and conditions whose id was passed as parameter
- Sample: `https://team-vulture2-backend.vercel.app/terms/639a0cb3ad698ff32a00f7d4`
```
{
    "success": true,
    "message": "Terms and Conditions found",
    "term": {
        "_id": "639a0cb3ad698ff32a00f7d4",
        "name": "Sample Website Terms and Conditions",
        "user_id": "63962a19683eedcd74dcede0",
        "data": {
            "whereDetails": {
                "websiteUrl": "https://www.samplewebsite.com",
                "websiteName": "Sample website",
                "entityType": "business",
                "country": "Nigeria"
            },
            "contact": {
                "email": "contact@samplewebsite.com",
                "phoneNumber": "08134263292",
                "webPage": "https://www.samplewebsite.com/contact.html"
            },
            "where": [
                "website"
            ],
            "informationType": [
                "email",
                "full name",
                "address",
                "social media",
                "others"
            ],
            "_id": "639a0cb3ad698ff32a00f7d5"
        },
        "termType": "NDPR",
        "createdAt": "2022-12-14T17:49:39.276Z",
        "updatedAt": "2022-12-14T17:49:39.276Z",
        "__v": 0
    }
}
```

#### PUT /terms/:id
- General:
    - edit/update a specified terms and conditions details using the id of the terms and conditions
    - Request Arguments: the http url containing the id of the terms and conditions and a raw json data request body in the format below
    ```
    {
        "name": "Sample Website Two Terms and Conditions",
        "data": {
                "where": ["website"],
                "whereDetails": {
                    "websiteUrl": "https://www.samplewebsitetwo.com",
                    "websiteName": "Sample website 2",
                    "entityType": "business",
                    "country": "Nigeria"
                },
                "informationType": ["email", "social media", "others"],
                "contact": {
                    "email": "support@samplewebsitetwo.com",
                    "phoneNumber": "08133425292",
                    "webPage": "https://www.samplewebsite.com/help"
                }
        }  
    }
    ```
    - Returns: status message(terms and conditions updated successfully and the details of the terms and conditions updated)
- Sample: `https://team-vulture2-backend.vercel.app/terms/639a0d2cad698ff32a00f7d7`
```
{
    "success": true,
    "message": "Terms and Conditions updated successfully",
    "newTerm": {
        "_id": "639a0d2cad698ff32a00f7d7",
        "name": "Sample Website Two Terms and Conditions",
        "user_id": "63962a19683eedcd74dcede0",
        "data": {
            "whereDetails": {
                "websiteUrl": "https://www.samplewebsitetwo.com",
                "websiteName": "Sample website 2",
                "entityType": "business",
                "country": "Nigeria"
            },
            "contact": {
                "email": "support@samplewebsitetwo.com",
                "phoneNumber": "08133425292",
                "webPage": "https://www.samplewebsite.com/help"
            },
            "where": [
                "website"
            ],
            "informationType": [
                "email",
                "social media",
                "others"
            ],
            "_id": "639a2aa0fda59d3d5f4517fb"
        },
         "termType": "NDPR",
        "createdAt": "2022-12-14T17:51:40.530Z",
        "updatedAt": "2022-12-14T19:57:20.052Z",
        "__v": 0
    }
}
```

#### DELETE terms/:id
- General:
    - Deletes a specified terms and conditions using the id of the terms and conditions
    - Request Arguments: id of the terms and conditions 
    - Returns: deleted successfully message
- Sample: `https://team-vulture2-backend.vercel.app/terms/639a0d2cad698ff32a00f7d7`
```
{
    "success": true,
    "message": "Terms and Conditions deleted successfully"
}
```
