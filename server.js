const express = require('express');
const app = express();
const db = require('./db');

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/', (req, res)=>{
    res.send('walcome to our hotel')
})

//import the router files
const personRoutes = require('./Routes/PersonRountes');
const ManuItemRoutes = require('./Routes/menuRoutes');

// use router file
app.use('/person', personRoutes);
app.use('/getManuitem', ManuItemRoutes);


app.listen(3000, (  )=>{
    console.log("listening on port 3000")
})
