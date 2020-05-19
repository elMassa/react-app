const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://torquil23:paramongo2020@cluster0-mwrr6.gcp.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true }).then(() => {console.log('Db Connected')}).catch(err => console.error(err));


app.get('/', (req, res) => {
    res.send('hello world')
});



app.listen(5000);
