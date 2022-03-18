let app = require('express')();
const cors = require('cors')
app.all('/', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next()
  });
/* app.use(cors()) */
app.use(require('express').json());
app.use('/', require('./routes'));

app.listen(3001, () => {
    console.log('Working!!!');
});