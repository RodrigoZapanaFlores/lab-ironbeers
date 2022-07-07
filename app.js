const express = require('express');

const app = express();

/** Configs */
require('./config/hbs.config');


app.set('views', `${__dirname}/views`);
app.set('view engine', 'hbs');

/** Middlewares */
app.use(express.static(`${__dirname}/public`));

const routes = require('./config/routes.config');
app.use('/', routes);

app.listen(3000, () => console.log('🏃‍ on port 3000'));