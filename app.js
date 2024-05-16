const express = require('express');
const app = express();
const indexRoute = require('./routes/indexRoute');
const aboutRoute = require('./routes/aboutRoute');
const contactRoute = require('./routes/contactRoute');
const addRepasRoute = require('./routes/addRepasRoute');
const {loggerHandler} = require('./Middlewares/logger');


app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(loggerHandler);
    
app.use(indexRoute, aboutRoute, contactRoute, addRepasRoute);

app.use((req, res, next) => {
    res.status(404).render('404', {pageTitle: 'Page Not Found'});
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

