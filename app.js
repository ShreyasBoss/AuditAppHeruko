const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv/config');
const ExpenceRoute = require('./Routes/expRoute');

app.use(cors());

app.use(express.json());

app.get('/',(req,res)=>{
res.send('audit app running')
});

app.use('/api/expe',ExpenceRoute);




app.listen(process.env.PORT || 5000)