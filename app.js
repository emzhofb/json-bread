const express = require('express');
const app = express();
const port = 3000;

app.set('views', './views'); // specify the views directory
app.set('view engine', 'ejs'); // register the template engine

app.use(express.static(__dirname + '/views'));

app.get('/', (req, res) => res.render('index'));
app.get('/add', (req, res) => res.render('add'));
app.get('/edit', (req, res) => res.render('edit'));

app.listen(port, () => console.log(`json-bread listening on port ${port}!`));
