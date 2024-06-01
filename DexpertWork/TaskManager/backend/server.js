import express from 'express';
import cors from 'cors';
import mysql from 'mysql2';
import session from 'express-session';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import router from './router.js';


const app = express();
app.use(express.json());

// Server setup
app.listen(8182, () => {
    console.log("Server is running on port 8182");
});

// Middleware setup
app.use(cors({
    origin: ['http://localhost:3000'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));
app.use(cookieParser());

// Configure session middleware
app.use(session({
    secret: 'my_secretkey',
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false, // Should be true in production with HTTPS
        maxAge: 1000 * 60 * 60 * 24  // 1 day
    }
}));
app.use(bodyParser.json());

// Use the router
app.use('/', router);