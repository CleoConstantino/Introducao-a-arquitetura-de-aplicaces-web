const express = require('express');
const server = express();

server.get('/', (_,res) => {
    res.end('Hello Express');
});

server.listen(3000, '127.0.0.1');