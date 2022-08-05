const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const errorController = require('./controllers/errorController');
const mongoConnect = require('./utils/database').mongoConnect;

const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

const adminRoutes = require('./routes/admin.route');
const publicRoutes = require('./routes/home.route');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(publicRoutes);

mongoConnect(() => {
  app.listen(3000);
});
