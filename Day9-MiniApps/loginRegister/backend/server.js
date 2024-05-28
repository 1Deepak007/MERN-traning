import express from 'express';
import cors from 'cors';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import routes from './routes.js';

const app = express();
app.use(express.json());
app.use(cors({
    origin: ['http://localhost:3000'],
    methods:["POST","GET"],
    credentials: true
}));
app.use(cookieParser());
app.use(session({
    secret:'secretkey',
    resave:false,
    saveUninitialized: false,
    cookie: {
        secure: false,
        maxAge: 1000 * 60 * 60 * 24       // 1day
    }
}))
app.use(bodyParser.json());

app.use('/', routes);

const PORT = 8181;
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});


