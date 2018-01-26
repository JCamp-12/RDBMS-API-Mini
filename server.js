const express = require('express');
const bodyParser = require('body-parser');

const server = express();

server.use(bodyParser.json());

// endpoints here
server.get('/', function(req, res) {
    res.status(200).json({ success: true });
});

const port = 3000;
server.listen(port, function() {
    console.log(`Server Listening on ${port}`);
});

// raw connector || query builder || ORM: Object Relational Mapper
// SQL Injection



// const bear = {
//     name: 'Po',
//     species: 'Panda',
//     latinName: 'Panda Panda Panda'
// };

