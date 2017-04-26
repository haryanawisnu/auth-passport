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
|/signup       |   POST   |      sign up with new user info|
|/signin       |   POST   |      sign in while get an access token based on credentials|
|/users       |   GET   |      get all the users (use tokens)|
