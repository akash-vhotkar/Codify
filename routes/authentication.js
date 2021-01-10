const express = require("express");
const router = express.Router();
const db = require('../database/schema');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const passport = require('passport');
const pass_auth = require('../config/passport')





var register = false
var login = false



router.get("/login", (req, res) => {
    res.render("login");
})

const registermid = (req, res, next) => {
    register = true;
    login = false
    next();
}
const loginmid = (req, res, next) => {
    login = true
    register = false
    next();
}



router.get("/google", registermid, passport.authenticate("google", {
    scope: ["profile"]
}));

router.get("/googlelogin", loginmid, passport.authenticate("google", {
    scope: ["profile"]
}));






router.get('/logout', (req, res) => {



    if (req.session.myuser) {

        req.session = null;
        res.redirect("/codify/home")

    }
    else {
        const login_err = [];
        login_err.push({ err_msg: "please login first" })
        res.render("login", { login_err });
    }


})


router.get("/google/redirect", passport.authenticate('google'), (req, res) => {

    if (login == true && register == false) {
        db.findOne({ username: req.user.username }).then((user) => {
            if (user) {
                req.session.myuser = user.username;
                res.redirect('/codify/home');
            }
            else {
                res.redirect('/codify/auth/register')
            }


        })
            .catch(err => {
                console.log(err);
            })




    }
    else {

        db.findOne({ username: req.user.username }).then((user) => {
            if (user) {
                const login_err = [];
                login_err.push({ err_msg: "you already hav a account plaese login" })
                res.render("login", { login_err })
            }
            else {
                req.session.myuser = user.username;

                reverse.redirect("/codify/home")
            }
        })
            .catch(err => {
                console.log(err);
            })

    }



})






router.post('/login', (req, res) => {
    const login_err = [];
    db.findOne({ username: req.body.username }).then((user) => {
        bcrypt.compare(req.body.password, user.password, (err, ok) => {

            if (ok == true) {

                res.render('home');
            }
            else if (ok == false) {
                login_err.push({ err_msg: "user not exist please register " })
                res.render('login', { login_err });
            }
        })


    }).catch(err => {
        console.log(err);
    })
})



router.get("/register", (req, res) => {
    res.render('register');
})

router.post("/register", (req, res) => {
    const register_err = [];

    const data = {
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        confirm_password: req.body.confirm_pass
    }
    console.log(data);
    if (data.name == '' || data.username == '' || data.email == '') {
        register_err.push({ err_msg: "all fields are nessasary " })
    }
    if (String.toString(data.password).length < 6 || String.toString(data.confirm_password).length < 6) {
        register_err.push({ err_msg: "passworld length should be greater than 6" })
    }
    if (String.toString(data.password).localeCompare(String.toString(data.confirm_password))) {
        register_err.push({ err_msg: "confirm password not matching" })
    }
    console.log(data.email);
    if (register_err.length > 0) {
        console.log(register_err);
        res.render('register', { register_err });

    }
    else {



        db.findOne({ username: data.username }).then((database) => {
            if (database) {
                register_err.push({ err_msg: "user already exist " })
                res.render('register', { register_err });
            }
            else {
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(data.password, salt, (err, hash) => {
                        if (err) throw err;
                        data.password = hash;
                        data.confirm_password = hash;
                        console.log(data);
                        db.create(data)
                            .then(() => {

                                // errors.push({ msg: "registeration succefully " })

                                res.render('home');
                            })
                            .catch((err) => {
                                console.log("data was not inserted    " + err);
                            })





                    })
                })





            }


        })
            .catch(err => {
                console.log(err);

            })








        console.log("function running");
    }




})

module.exports = router;