const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv/config');
const mongoose = require('mongoose');
const ExpenceRoute = require('./Routes/expRoute');
const { Mongoose } = require('mongoose');

app.use(cors());

app.use(express.json());

app.get('/',(req,res)=>{
res.send('audit app running')
});

app.use('/api/expe',ExpenceRoute);


mongoose.connect(process.env.MONGODB_URL,()=>{
    console.log('Connected to DB..!!!');
})

app.listen(process.env.PORT || 5000);