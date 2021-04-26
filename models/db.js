const mongoose= require('mongoose');
mongoose.createConnection('mongodb://localhost:27017/invoice_dataset',{useNewUrlParser: true, useUnifiedTopology: true},(err)=>{
    if (!err) { console.log('MongoDB Connection Succeeses. ')}
    else { console.log('Error in DB connection : ' + err)}   
});
require('./customer.model');