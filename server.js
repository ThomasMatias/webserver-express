const express = require('express')
const app = express();

const hbs = require('hbs');

// Helpers
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

// Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    //res.send('Hola Mundo');

    // let salida = {
    //     nombre: 'Emmanuel',
    //     edad: 19,
    //     url: req.url
    // }

    res.render('home', {
        nombre: "Emmanuel"
    });
})

app.get('/about', (req, res) => {
    //res.send('Hola Mundo');

    // let salida = {
    //     nombre: 'Emmanuel',
    //     edad: 19,
    //     url: req.url
    // }

    res.render('about');
})

// app.get('/data', (req, res) => {
//     res.send('Hola Data');
// })

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${ port }`);
});