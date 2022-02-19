var app = require('express')();
port = 3000;

app.use(require('express').json());
app.use('/v1', require('./routes'));


app.listen(port, () => {
    console.log('Working!!!')
});