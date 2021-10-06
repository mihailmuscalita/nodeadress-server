
const mongoose = require('mongoose');
const express  = require('express');

const adress = require('./routes/adress');
const adressdetails = require('./routes/adressdetails');
const app = express();

app.use(express.json());
app.use('/adress', adress);
app.use('/adressdetails',adressdetails);

const port = process.env.PORT || 3000;
const host = "192.168.0.10";
app.listen(port, host, () => console.log("Listening on port 3000 ..."));

mongoose.connect('mongodb://localhost/worldwidedb')
.then(() => console.log("Connected to mongodb adress!"))
.catch(error => console.log(error));