const express = require('express');
const morgan = require('morgan');

const app = express();



app.use(morgan('dev'));
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }));




app.get('/', (request, response) => {
    console.log('hello');
    
})



const PORT = 1337;

app.listen(PORT, () => {
    
})