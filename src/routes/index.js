const express = require('express');
const Empresas = require('../models/Empresas');
const Servicoes = require('../models/servicoes');
const UsuarioController = require('../controller/UsuarioController');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        "status": "API RODANDO NA PORTA 3333"
    })
})

router.get('/pong', (req, res) => {
    res.json({
        "Pong": "True"
    })
})

router.get('/empresas', (req, res) => {
    res.json({
        "empresas": Empresas
    })
})

router.get('/servicoes', (req, res) => {
    res.json({
        "servicoes": Servicoes
    })
})

router.post('/login', UsuarioController.login);

module.exports = router;