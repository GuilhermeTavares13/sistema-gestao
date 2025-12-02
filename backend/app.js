const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.set('view engine', 'ejs');
app.set('views','views');

const User = require('./models/user');

const authRoutes = require('./routes/auth');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(
    session({ secret: 'my secret', resave: false, saveUninitialized: false })
);

app.use(cors({
    origin: 'http://localhost:3000',
    methods: 'POST',
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(authRoutes);


mongoose
.connect(process.env.MONGODB_URI)
.then(result => {
    User.findOne()
        .then(user => {
            // It will be removed later
            if(!user) {
                const user = new User({
                    email: process.env.ADMIN_EMAIL,
                    password: process.env.ADMIN_PASSWORD,
                    name: process.env.ADMIN_NAME
                });
                user.save();
            }
        })
        .catch(err => console.log(err));
    app.listen(4000);
})
.catch(err => console.log(err));



