# BackEnd Developer Technical Test News Paper Server


### Description
It is aNewspaper Management System. The system will have an Administrator or Admin. Admin will manage the entire system. Admin can add a new editor or remove an old editor. That is, all editors can manage the content. Only one editor will be active in the system. Adding a new editor will make the previous editor inactive. Active editors will post new articles.

### Features

In this system has two user rule
- Admin
- Editor 
- Admin manages all editor 
- Add new editor
- Remove privies editor
- In this system only one editor active who is post new article in newspaper 
- If admin add new editor then inactive or remove previous editor




## Tech Stack

**Back-End:** 
- Node.js
- Express

**Database:** 
- MongoDB
- Mongoose.

**NPM Package:**
- jsonwebtoken
- cros
- dotenv
- md5
- multer
- nodemon

# Table of Contents

  - [Quick Start](#quick-start)
  - [Quick Start](#Using-API)
  - [File Structure](#file-structure)
  - [Browser Support](#browser-support)
  - [Follow Us](#follow-us)
  - [Licensing](#licensing)

## Quick Start

You can use following method to get started with Server Application of Your system.

### Part 1: Direct Download
[Dowload from Github](https://github.com/abudaudhossain/Technical-Test-for-Backend-Developer--Singularity-Limited/archive/refs/heads/main.zip)

### Part 2: Using NPM
Start working with the EHKit system
1. Clone Git Repo
```
git clone abudaudhossain/Technical-Test-for-Backend-Developer--Singularity-Limited
```
2. Install Dependency
```
npm install
```

3. Run on development 
```
npm start
```

## Using API

1. Impotent Variable 
```
const baseUrl = "http://localhost:8000/api";

const adminJWT = "JWT";

```

0. Create New Admin Profile:

```
  const userAccount = {
    "name": "abu Admin",
    "email":"abu@admin.com",
    "password":"admin1",
    "phone": "01932434321",
    "image": "/skj.jpg"
}
  axios.post(`${baseUrl}/create/admin`, userAccount,{
      headers: {
        'devicetoken': `device-token`
      }
    })
    .then(function (response) {
      console.lot(response)
      })
    .catch(function (error) {
      console.log(error)
      });

```

1. User Login By Email and Password:

```
  axios.post(`${baseUrl}/login`, { 
    "email":"au2@admin.com",
    "password":"admin1"
  },{
      headers: {
        'devicetoken': `device-token`
      }
    })
    .then(function (response) {
      console.lot(response)
      })
    .catch(function (error) {
      console.log(error)
      });

```

2. Create New Editor Account:


```
 only for admin api
  const userAccount = {
    "name": "abu Admin",
    "email":"abu@admin.com",
    "password":"admin1",
    "phone": "01932434321",
    "image": "/skj.jpg"
}
  axios.post(`${baseUrl}/create/admin`, userAccount,{
      headers: {
        'devicetoken': `device-token`,
        'userToken' :`${userToken}`,
        'sessionToken' :`${sessionToken}`,
      }
    })
    .then(function (response) {
      console.lot(response)
      })
    .catch(function (error) {
      console.log(error)
      });

```

3. Get all Editor Account:


```
 only for admin api
  
  axios.get(`${baseUrl}/create/editors`,{
      headers: {
        'devicetoken': `device-token`,
        'userToken' :`${userToken}`,
        'sessionToken' :`${sessionToken}`,
      }
    })
    .then(function (response) {
      console.lot(response)
      })
    .catch(function (error) {
      console.log(error)
      });

```
4. Remove or Delete Editor Account:


```
 only for admin api
  const account = {
    "editorToken":`${editorToken} 
}
  axios.post(`${baseUrl}/create/removeEditor`, account,{
      headers: {
        'devicetoken': `device-token`,
        'userToken' :`${userToken}`,
        'sessionToken' :`${sessionToken}`,
      }
    })
    .then(function (response) {
      console.lot(response)
      })
    .catch(function (error) {
      console.log(error)
      });

```
5. Create New Article:


```

  const article = {
    "title":"This is Title 2", 
    "description":"I am writing this request requestdays leave. The reason I have a week off is because I have a lot of personal problems and family problems. These problems need to be addressed.",
    "category":"Progrmaing",
    "image": "src/img/muimg.jpg",
    "tags":["c++","Java"]
}
  axios.post(`${baseUrl}/create/removeEditor`, account,{
      headers: {
        'devicetoken': `device-token`,
        'userToken' :`${userToken}`,
        'sessionToken' :`${sessionToken}`,
      }
    })
    .then(function (response) {
      console.lot(response)
      })
    .catch(function (error) {
      console.log(error)
      });

```


## Newspaper Server Admin API List : 
```
 1. Editor Status Change  api: ${baseUrl}/changeStatus

```
## Newspaper Server Get All Article API List : 
```
 1. api: ${baseUrl}/articles

```

## File Structure
Within the download you'll find the following directories and files, logically grouping common assets and providing both compiled and minified variations. You'll see something like this:
```
github/hope-ui-admin-dashboard/

NEWSPAPER_SERVER
  ├── App
  │    ├── controllers
  │    │    ├── article.js
  │    │    ├── user.js
  │    │    └── userAuth.js
  │    ├── exceptions
  │    │    ├── handlers.js
  │    │    ├── NotAcceptableError.js
  │    │    ├── NotFountError.js
  │    │    ├── UnauthorizedError.js
  │    │    └── ValidationError.js
  │    ├── helpers    
  │    │    ├── setters.js
  │    │    └── utils.js
  │    ├── middleware  
  │    │    └── validUserRequestMiddleware.js
  │    ├── models  
  │    │    ├── article.js
  │    │    ├── authSession.js
  │    │    ├── category.js
  │    │    ├── comment.js
  │    │    ├── tag.js
  │    │    └── user.js
  │    ├── services  
  │    │    ├── article.js
  │    │    ├── changeEditorStatus.js
  │    │    ├── createNewSession.js
  │    │    ├── removeEditorAccount.js
  │    │    ├── updateStatus.js
  │    │    └── userAccount.js
  │    ├── validations
  │    │    ├── AuthValidation
  │    │    │    └── loginAuthValidation.js
  │    │    ├── request
  │    │    │    ├── addNewArticleRequestValidation.js
  │    │    │    ├── changeEditorStatusRequestValidation.js
  │    │    │    ├── createEditorRequestValidation.js
  │    │    │    ├── findAllEditorRequestValidation.js
  │    │    │    ├── loginRequestValidation.js
  │    │    │    └── removeEditorRequestValidation.js
  │    │    ├── ServiceValidation
  │    │    └── ValidationHelpers
  │    │    │    └──ValidationHelper.js
  ├── routes
  │    └── api.js
  ├── .env
  ├── .gitignore
  ├── index.js
  ├── package-lock.json
  ├── package.json
  └── README.md
```
## Browser Support
![chrome](https://assets.iqonic.design/hope-ui/github/chrome.png)
![Firefox](https://assets.iqonic.design/hope-ui/github/Firefox.png)
![Safari](https://assets.iqonic.design/hope-ui/github/Safari.png)
![Microsoft](https://assets.iqonic.design/hope-ui/github/Microsoft%20edge.png)
![Operamini](https://assets.iqonic.design/hope-ui/github/Operamini.png)

## Follow Us
- [Twitter](https://twitter.com/webexpert24abu)
- [Facebook](https://www.facebook.com/abudaud.dev/)
- [LinkedIn](https://www.linkedin.com/in/abudauddev/)
- [Instagram](https://www.instagram.com/abudauddev/)

## Licensing
- Code and Documentation Copyright 2022 All Rights Reserved by [Abu Daud Hossain](https://github.com/abudaudhossain) Development.