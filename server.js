const express = require('express');

const mongodb = require('./data/connect');
const app = express()

const port = process.env.PORT || 3000;

app.use('/', require('./routes'));

mongodb.initDb((err) => {
    if(err) {
        console.log(err)
    }
    else {
        app.listen(port, () => {console.log(`Database is listening and node Running on port ${port}`)});
    }
});


//ROUTES
app.use('/', require('./routes/index.js'))