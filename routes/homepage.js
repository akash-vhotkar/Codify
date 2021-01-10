const express = require('express');
const router = express.Router();
const mycustdb = require('../database/schema')
const passport = require('passport');
const mongodb = require('mongoose');
const publish_key = require('../database/key').publish_key;
const secrete_key = require('../database/key').secret_key;

const stripre = require('stripe')(secrete_key);

router.get("/home/cart", (req, res) => {
    const login_err = [];

    if (req.session.myuser) {

        mycustdb.findOne({ username: req.session.myuser }).then((user) => {
            req.session.custid = user.id;
            res.render("mycart", { courses: user.cart, key: publish_key, total: user.total, username: user.username, mytotal: user.total * 100 });

        })
            .catch(err => {
                console.log(err);
            })

    }
    else {
        login_err.push({ err_msg: "please login firse" })
        res.render("login", { login_err });
    }
})


router.get("/home/mycourses", (req, res) => {
    const login_err = [];
    if (req.session.myuser) {

        mycustdb.findOne({ username: req.session.myuser }).then((user) => {
            res.render("mycourses", { courses: user.mycourses, key: publish_key, total: user.total, username: user.username, mytotal: user.total * 100 });

        })
            .catch(err => {
                console.log(err);
            })

    }
    else {
        login_err.push({ err_msg: "please login first" })
        res.render("login", { login_err });
    }
})



router.post("/home/payment", (req, res) => {



    mycustdb.findOne({ username: req.session.myuser }).then(user => {


        stripre.customers.create({
            email: req.body.stripeEmail,
            source: req.body.stripeToken,
            name: req.session.myuser,

        })
            .then((customer) => {

                return stripre.charges.create({
                    amount: user.total,    // Charing Rs 25 
                    description: 'Web Development Product',
                    currency: 'INR',
                    customer: customer.id
                });
            })
            .then((charge) => {
                if (charge) {


                    mycustdb.findOne({ username: req.session.myuser }).then(user => {
                        console.log("useer is " + user);
                        console.log("charge is " + charge);

                        let data_course = user.mycourses;
                        let real_courses = user.cart.concat(data_course);



                        mycustdb.findByIdAndUpdate({ _id: req.session.custid }, {
                            mycourses: real_courses,
                            cart: [],
                            total: 0
                        }, { new: true }, (err, data) => {
                            if (err) console.log("myerrors are" + err);
                        })
                        res.redirect('/codify/home/mycourses')


                    }).catch(err => { console.log(err); })



                }
            })
            .catch((err) => {
                res.send(" thise is a error   " + err)    // If some error occurs 
            });
    }).catch(err => { if (err) console.log(err); })

})










router.get("/removecourse", (req, res) => {

    mycustdb.findOne({ username: req.session.myuser }).then(user => {


        mycustdb.findOneAndUpdate({ username: req.session.myuser }, {
            $pull: {
                cart: {
                    coursename: req.query.coursename


                }
            },
            total: req.query.total

        }, { new: true }, (err, data) => { if (err) console.log(err); })


    }).catch(err => console.log(err));




})






router.get("/home", (req, res) => {
    if (req.session.myuser) {
        let str = "welcome " + req.session.myuser;
        res.render("home", { username: str })

    }
    else {
        res.render("home", { username: "welcome" });

    }
})



router.get("/addtocart", (req, res) => {







    mongodb.connect("mongodb+srv://akash:akash1234@cluster0.4ayge.mongodb.net/bookmytaxi?retryWrites=true&w=majority", (err, db) => {
        if (err) console.log(err);
        else {
            db.collection("sample").findOne({ courseid: req.query.id }).then((col) => {

                mycustdb.findOne({ username: req.session.myuser }).then(user => {

                    let flag = true;
                    let total_amount = user.total + parseInt(req.query.price);


                    user.cart.forEach(element => {
                        if (element.coursename == col.name) flag = false;

                    });

                    if (flag == true) {







                        mycustdb.findOneAndUpdate({ username: req.session.myuser }, {
                            $push: { cart: { coursename: col.name, coursedetails: col.desc, rating: col.rating, price: col.price, img: col.img, video: col.video } },
                            total: total_amount


                        }, { new: true }, (err, data) => {
                            if (err) {
                                console.log(err);
                            }

                        })










                    }
                    else {
                        console.log("product already added");
                    }




                }).catch(err => {
                    console.log(err);
                })






            })
                .catch((err) => {
                    console.log(err);
                })

        }

    })



})







module.exports = router;