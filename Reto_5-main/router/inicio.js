const express = require('express');
const Partidos = require('../models/partidos');
const router = express.Router();


router.get('/', async (req, res) => {
    try {
        console.log('Entrando en inicio');
        //TODO descomentar siguiente linea:
        const arrayPartidosDB = await Partidos.find();

        console.log('Partidos disponibles(Inicio): ' + arrayPartidosDB);
        res.render("inicio", {
            arrayPartidos: arrayPartidosDB
        })
    } catch (error) {
        console.error(error)
    }
})


module.exports = router;