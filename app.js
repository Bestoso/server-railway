const express = require('express');
const hbs = require('hbs');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

// Servir contenido estatico

app.use(express.urlencoded({ extended: true }));
app.use(express.static('./public'));

// Handlebars configuracion inicial

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', (err) => {
    console.log(err);
})

app.get('/', (req,res) => {
    res.render('home', {
        name: 'Santiago Bestoso',
        title: 'Learning Node'
    })
})

app.get('/products', (req, res) => {
    res.render('products', {
        name: 'Products',
        title: 'Products'
    })
})

app.get('/contact', (req, res) => {
    res.render('contact', {
        name: 'Contact',
        title: 'Contact Page'
    })
})

app.get('*', (req, res) => {
    res.status(404).sendFile( __dirname + '/public/404.html')
})

app.listen(port, () => {
    console.log('Listening on port' + port);
})