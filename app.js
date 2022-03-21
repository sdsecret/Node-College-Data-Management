require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const { authUser } = require('./middlewares/auth');

const router = require('./routes/routes');
const session = require('express-session');

const cookieParser = require("cookie-parser");
var expressLayouts = require('express-ejs-layouts');
const flash = require('express-flash');

// csrf Token
const csrf = require('csurf');
var csrfProtection = csrf({ cookie: true })


// Middlewares
app.use(express.static(__dirname+'/public'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(cookieParser());
app.use(flash());
app.use(session({
    cookie: { maxAge: 60000 },
    // store: sessionStore,
    saveUninitialized: true,
    resave: 'true',
    secret: 'secret'
}));

// must call after session
// app.use(csrfProtection);

// Setting View Engine
app.use(expressLayouts);
app.set('layout', 'layouts/app');
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.use(csrfProtection);

// routes
app.get('*',authUser);
app.use(router);


// App Host and Port
app.listen(process.env.PORT,process.env.HOST,() => {
    console.log(`Server Started : http://${process.env.HOST}:${process.env.PORT}`);
});