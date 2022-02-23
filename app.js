const express = require('express');
const bodyParser = require('body-parser');
const handlebars = require('express-handlebars');

const path = require('path');

const utilsController = require('./controllers/utils');

const app = express();

// Routes
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// app.use((req, res, next) => {
//     console.log('In the middleware')
//     next();
// });
//

// app.set('view engine', 'pug');
// app.engine('hbs', handlebars({layoutsDir: 'views/layouts/', defaultLayout: 'main-layout', extname: 'hbs'}));
// app.set('view engine', 'hbs');
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(utilsController.notFound);



// const server = http.createServer(app);
// server.listen(3000);

app.listen(3000);
