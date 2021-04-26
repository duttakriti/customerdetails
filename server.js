require('./models/db');
const express = require('express');
var app = express();
app.listen(3000, () => {
    console.log('Express server started at port : 3000');
})