const express = require('express');
const mongoose = require('mongoose');

const db = require('../database/schema')
const passport = require('passport');
const bcrypt = require('bcrypt');

const google_strat = require('passport-google-oauth20');

const g_id = require('../database/key').g_clientid;
const g_se = require('../database/key').g_secret;

passport.serializeUser((user, done) => {
    done(null, user.id);

})




passport.deserializeUser((id, done) => {

    db.findById(id).then((user) => {
        done(null, user)
    })
        .catch((err) => {
            console.log(err);
        })
})






passport.use(new google_strat({
    callbackURL: "/codify/auth/google/redirect",
    clientID: g_id,
    clientSecret: g_se

}
    , (accessstoken, refreshtoken, profile, done) => {






        const data = {
            name: profile.displayName,
            username: profile.displayName,
            email: "googleuser@gmail.com",
            password: profile.id,
            confirm_password: profile.id,
            picture: profile._json.picture
        }

        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(data.password, salt, (err, hash) => {
                if (err) throw err;
                data.password = hash;
                data.confirm_password = hash;

            })
        })


        db.findOne({ username: data.username }).then((database) => {
            if (database) {
                done(null, database)
            }
            else {
                db.create(data).then(() => {
                    done(null, data)
                })


                    .catch((err) => {
                        console.log(err);
                    })
            }
        })
            .catch((err) => {
                console.log(err);
            })










    })
)


