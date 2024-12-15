const express = require('express');
const app = express();
const db = require('./db');
require('dotenv').config();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000 ;


app.get('/', (req, res)=>{
    res.send('walcome to our hotel')
})

//import the router files
const personRoutes = require('./Routes/PersonRountes');
const ManuItemRoutes = require('./Routes/menuRoutes');

// use router file
app.use('/person', personRoutes);
app.use('/getManuitem', ManuItemRoutes);


app.listen(PORT, (  )=>{
    console.log("listening on port 3000")
})
