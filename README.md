# auth-passport

Authors: Haryana Wisnu Wardhana

Key : Auth, jwt , passwordhas,passport,passport-local

### Definition

Implementation authentication login with passport-local,passwordhas and jwt.

### Installation

Install the dependencies and devDependencies and start the server.

```sh
$ cd auth-passport
$ npm install
$ npm start
```

### Access

localhost:3000

| Route | HTTP |Description|
| ------ | ------ |------ |
|/api/signup       |   POST   |      sign up with new user info|
|/api/signin       |   POST   |      sign in while get an access token based on credentials|
|/api/users       |   GET   |      get all the users(admin)|
|/api/users/:id   |   GET      |   get a single users(admin and Authenticaticated user)|
|/api/users       |   POST     |   create a user (admin only)|
|/api/users/:id   |   DELETE    |  delete a user (admin only)|
|/api/users/:id   |   PUT        | update a user with new info (admin and Authenticated user)|
