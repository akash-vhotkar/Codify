
const express = require('express');
const app = express();
const ejs = require('ejs');
const path = require('path');
const body_parser = require("body-parser");
const session = require('express-session');
const passport = require('passport');
const mongo = require('mongoose');
const url = require('./database/key').url;
const cookie_parser = require('cookie-parser');
const cokoie_session = require('cookie-session');


app.set("view engine", "ejs");
app.use(body_parser.urlencoded({ extended: true }));
app.use(cookie_parser());
app.use(cokoie_session({
    maxAge: 24 * 60 * 60,
    keys: ["mykey"]
}))
app.use(passport.initialize());
app.use(passport.session());
mongo.set('useFindAndModify', false)

mongo.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log("the database is connected successfully...");
}).catch(err => {
    console.log(err);
})


app.use(session({
    secret: "secreat",
    resave: true,
    saveUninitialized: false
}))



app.use(express.static(path.join(__dirname, 'public')));
app.use("/codify", require('./routes/homepage'));
app.use("/codify/auth", require('./routes/authentication'))

const port = process.env.PORT || 5000;
app.listen(port, (err) => {
    if (err) console.log(err);
    else console.log("server is running on 5000..........");
})
