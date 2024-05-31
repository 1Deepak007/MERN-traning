import express from 'express';
import cors from 'cors';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import router from './router.js';

const app = express();

// Middleware setup
app.use(express.json());
app.use(cors({
    origin: ['http://localhost:3000'],
    methods: ["POST", "GET"],
    credentials: true
}));
app.use(cookieParser());

// Configure session middleware
app.use(session({
    secret: 'secretkey',
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

// Start the server
app.listen(8182, () => {
    console.log('Server is running on port: 8182');
});
