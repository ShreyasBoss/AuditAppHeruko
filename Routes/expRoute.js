const Route = require('express').Router();
const Expences = require('../Module/Expences');

Route.post('/insert', async (req,res)=>{
const expences = new Expences({
    name:req.body.name,
    DateOfExpence:req.body.DateOfExpence,
    Amount:req.body.Amount,
    Description:req.body.Description

})
try{
 await expences.save();
res.status(200).send('Data Saved Successfully...!!!')
}
catch(err){
    console.log(err);
}
})

module.exports = Route