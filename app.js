const express = require("express");
const app = express();
const wetherRoute = require('./routes/weather');

app.use('/', wetherRoute);
app.set('view engine', 'ejs')


const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});