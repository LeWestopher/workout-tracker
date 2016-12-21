'use strict';

let express = require('express');
let app = express();
let homepageTpl = require('../templates/homepage');

app.get('/', function (req, res) {
    res.write(homepageTpl);
    res.end();
});

app.listen(30000, () => {
    console.log('Workout app running on port 30000.');
});