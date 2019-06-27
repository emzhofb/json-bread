const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'html');

app.use(express.static(__dirname + '/views'));

app.listen(port, () => console.log(`json-bread listening on port ${port}!`));
