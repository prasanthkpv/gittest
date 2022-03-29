const expres  = require('express');
const bodyParser = require('body-parser');
const port = 5300;
const router = require('./src/routes/index');
app = expres();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);
//server is listening port
app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/`)
  })