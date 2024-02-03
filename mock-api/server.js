/* eslint-disable no-undef */
const express = require('express')
const bodyParser  = require("body-parser");
const cors = require('cors');
const app = express()
app.use(express.static('downloads'));

const corsOptions = {
  exposedHeaders: ['Authorization', 'Items-Offset','Items-Limit','Items-Total'],
};
app.use(cors(corsOptions));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req,res,next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header("Access-Control-Allow-Headers", "Custom-Header");
    res.header('Content-Type', 'application/json');
    next()
});


 require('./routes/users')(app);
 require('./routes/company')(app);
 require('./routes/memberType')(app);
 require('./routes/role')(app);
 require('./routes/teams')(app);
 require('./routes/rsp')(app);
 require('./routes/partner')(app);
 require('./routes/dowload_mock')(app);


app.listen(4000, () => {
  console.log('Start server at port 4000.');
  console.log('run==>http://localhost:4000/')
})
