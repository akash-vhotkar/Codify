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
> ## home page
![Capture1](https://user-images.githubusercontent.com/59597612/104131242-4a81f800-539b-11eb-85f1-bd731ae51731.PNG)
> ## courses
![Capture2](https://user-images.githubusercontent.com/59597612/104131245-4f46ac00-539b-11eb-9276-f0fa7c5f257f.PNG)
> ## footer
![Capture3](https://user-images.githubusercontent.com/59597612/104131257-5a99d780-539b-11eb-922b-0a5c47593d33.PNG)
> ## login page
![Capture4](https://user-images.githubusercontent.com/59597612/104131259-5d94c800-539b-11eb-8bde-39bf9fa51ef8.PNG)
>## register page
![Capture5](https://user-images.githubusercontent.com/59597612/104131262-61284f00-539b-11eb-9b2e-c8b477bb1a61.PNG)
> ## passport-google-auth20
![Capture6](https://user-images.githubusercontent.com/59597612/104131268-65546c80-539b-11eb-98ec-5077752b9344.PNG)
> ## mycourses page
![Capture7](https://user-images.githubusercontent.com/59597612/104131270-684f5d00-539b-11eb-95e4-7a870479dbee.PNG)
> ## cart 
![Capture8](https://user-images.githubusercontent.com/59597612/104131278-6be2e400-539b-11eb-90dc-05c2515403bb.PNG)


