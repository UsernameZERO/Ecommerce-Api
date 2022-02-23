const express = require('express');
const port = process.env.PORT || 1234;
const db = require('./config/mongoose');

const app = express();
app.use(express.urlencoded());// to read it in post requests

app.use('/', require('./routes'))

app.listen(port, function(err){
    if (err) {
        console.log(`error in the creating the port : ${err}`);
    }else{

        console.log(`server running on the port : ${port}`);
    }
});
