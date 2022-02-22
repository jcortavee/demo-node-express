const express = require('express');
const bodyParser = require('body-parser');
const handlebars = require('express-handlebars');

const path = require('path');

const app = express();

// Routes
const adminData = require('./routes/admin');
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

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
    // res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
    res.status(404).render('404', {pageTitle: 'Page not found'});
});



// const server = http.createServer(app);
// server.listen(3000);

app.listen(3000);
