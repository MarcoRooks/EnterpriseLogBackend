var app = require('express')();
const cors = require("cors");

app.use(cors());

port = 3000;

app.use(require('express').json());
app.use('/v1', require('./routes'));


app.listen(port, () => {
    console.log('Working!!!')
});