let app = require('express')();
const cors = require('cors')

app.use(cors())
app.use(require('express').json());
app.use('/', require('./routes'));

app.listen(3001, () => {
    console.log('Working!!!');
});