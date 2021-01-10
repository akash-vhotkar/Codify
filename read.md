# <h1 align="center"> codify
> ## thise is online courses website in which we sell the courses of python , machine learning , data science and web development

># Features of Codify
> * codify provide google sigh in option while login
> * it was storing courses which you want purchase letter
> * UI of codify easy  to understand
> *  for payment we use stripe api which having easy to make payment


># Technical features of codify
>   * for login  passport-google-oauth20 was use for authentication which make user experience better
>* in some caeses  ajax is used to avoid loading of pages again and again
>* bootstrap is use to make website responsive and attractive


> # build with
```
    1) HTML
    2) CSS
    3) JAVASCRIPT
    4) AJAX
    5) MONGODB
    6) NODE JS
    7) STRIPE API
    7) EXPRESS JS
    8) NPM PACKAGE MANAGER
    9) BOOTSTRAP
```




>### installation

    * Clone the repo
        
        git clone https://github.com/akash-vhotkar/codify

    * Install NPM package

        npm install <package name>
    * create account on mongodb atlas

        https://www.mongodb.com/

    * create account on stripe developer website

    *  install all dependencies  


># dependencies
```
{
    "bcrypt": "^5.0.0",
    "body-parser": "^1.19.0",
    "bootstrap": "^4.5.3",
    "cookie-parser": "^1.4.5",
    "cookie-session": "^1.4.0",
    "ejs": "^3.1.5",
    "express": "^4.17.1",
    "express-session": "^1.17.1",
    "jquery": "^3.5.1",
    "mongoose": "^5.11.8",
    "node": "^15.4.0",
    "node-sass": "^5.0.0",
    "nodemon": "^2.0.6",
    "passport": "^0.4.1",
    "passport-google-oauth20": "^2.0.0",
    "passport-local": "^1.0.0",
    "path": "^0.12.7",
    "popper.js": "^1.16.1",
    "stripe": "^8.130.0",
    "workbox-build": "^6.0.2"
  }


```
### project structure

```
---main.js
|
|---routes
|        |
|        |--authentication.js
|        |---homepage.js
|
|
|----views
|        |
|        |-----partials-------|
|        |                    |--customernavbar.ejs
|        |                    |--loginerr.ejs
|        |                    |--registererr.ejs
|        |                    |--loginregisternav.ejs
|        |
|        |--login.ejs
|        |
|        |--register.ejs
|        |
|        |--home.ejs
|        |--mycart.ejs
|
|---config
|        |
|        |--passport.js
|        
|
|
|---database
|        |
|        |----schema.js
         |--key.js   

```

> # some pictures of codify
  ![login](https://user-images.githubusercontent.com/59597612/97988956-d1e34600-1e03-11eb-9564-818ed960210b.PNG)
