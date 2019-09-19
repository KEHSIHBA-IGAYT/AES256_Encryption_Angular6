import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import encrypt from './modules/encrypt/encryption';
const path  = require('path');
// import mongoose from 'mongoose';
const app = express();
const router = express.Router();
app.use(cors());
app.use(bodyParser.json());

// mongoose.connect('mongodb://[server]/issues');
// const connection = mongoose.connection;
// connection.once('open', () => {
//     console.log('MongoDB database connection established successfully!');
// });

app.use('/', router);

router.route('/encrypt').post((req, res) => {

    console.log("in route", req.body);

    encrypt.encrypt_text(req.body.text).then(val => {
        if (!val)
            console.log(err);
        else
        res.status(200).json({'encrypted': val});
    });
});

app.listen(4000, () => console.log(`Express server running on port 4000`));