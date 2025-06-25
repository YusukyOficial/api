const express = require('express');
const rotas = require('./src/routes');
const cors = require('cors');


const server = express();
server.use(cors())


server.use(rotas);
server.use((req, res) => {
    res.send('Rota não encontrada')
});

server.listen(3333)