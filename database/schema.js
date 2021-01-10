const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true

    },
    password: {
        type: String,
        required: true
    },
    confirm_password: {
        type: String,
        required: true

    },
    cart: [
        {
            coursename: String,
            coursedetails: String,
            rating: Number,
            price: Number,
            img: String,
            video: String
        }
    ]
    ,
    total: {
        required: false,
        type: Number

    },
    mycourses: [{
        coursename: String,
        coursedetails: String,
        rating: Number,
        price: Number,
        img: String,
        video: String

    }],
    tra_id: [{
        ids: String,
        required: false
    }],
    picture: {
        type: String,
        require: false
    },
    Date: {
        type: Date,
        default: Date.now

    }

})
const db = mongoose.model("customer_data", schema);


module.exports = db;
