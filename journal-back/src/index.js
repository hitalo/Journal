const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();
app.use(bodyParser.json()); //allow app understand json requests
app.use(bodyParser.urlencoded({ extended: false})); //allow app understand url parameters
app.use(cookieParser());

require('./controllers/authController')(app); //linking the controllers with app
require('./controllers/projectController')(app);

app.listen(3003);