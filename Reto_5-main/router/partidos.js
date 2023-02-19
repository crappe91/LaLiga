const express = require('express');
const Partidos = require('../models/partidos');
const router = express.Router();


router.get('/', async (req, res) => {
    try {
        console.log('Entrando en partidos');
        //TODO descomentar siguiente linea:
        const arrayPartidosDB = await Partidos.find();

        console.log('Partidos disponibles: ' + arrayPartidosDB);
        res.render("partidos", {
            arrayPartidos: arrayPartidosDB
        })
    } catch (error) {
        console.error(error)
    }
})

router.get('/crearPartido', (req, res) => {
    res.render('crearPartido'); //nueva vista que llamaremos Crear
})


router.post('/', async (req, res) => {
    const body = req.body
    //Gracias al body parser, de esta forma
    //podremos recuperar todo lo que viene del body
    console.log(body) //Para comprobarlo por pantalla
    try {
        const arrayPartidosDB = new Partidos(body) //Creamos un nuevo Pokemon, gracias al modelo
        await arrayPartidosDB.save() //Lo guardamos con .save(), gracias a Mongoose
        res.redirect('/partidos') //Volvemos al listado
    } catch (error) {
        console.log('error', error)
    }
})



router.get('/:id', async (req, res) => { //El id vendrá por el GET (barra de direcciones)
    const id = req.params.id //Recordemos que en la plantilla "pokemon.ejs" le pusimos
    //a este campo pokemon.id, por eso lo llamados con params.id
    try {
        const partidosDB = await Partidos.findOne({ _id: id }) //_id porque así lo indica Mongo
        //Esta variable “Pokemon” está definida arriba con el “require”
        //Buscamos con Mongoose un único documento que coincida con el id indicado
        console.log(partidosDB) //Para probarlo por consola
        res.render('detallesPartidos', { //Para mostrar el objeto en la vista "detalle", que tenemos que crear
            partidos: partidosDB,
            error: false
        })
    } catch (error) { //Si el id indicado no se encuentra
        console.log('Se ha producido un error', error)
        res.render('detallesPartidos', { //Mostraremos el error en la vista "detalle"
            error: true,
            mensaje: 'Partido no encontrado!'
        })
    }
})

//DELETE

router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    console.log('id desde backend', id)
    try {
        //En la documentación de Mongoose podremos encontrar la
        //siguiente función para eliminar
        const partidosDB = await Partidos.findByIdAndDelete({ _id: id });
        console.log(partidosDB)
        // https://stackoverflow.com/questions/27202075/expressjs-res-redirect-not-working-as-expected
        // res.redirect('/pokemon') //Esto daría un error, tal y como podemos ver arriba
        if (!partidosDB) {
            res.json({
                estado: false,
                mensaje: 'No se puede eliminar el Partido.'
            })
        } else {
            res.json({
                estado: true,
                mensaje: 'Partido eliminado.'
            })
        }
    } catch (error) {
        console.log(error)
    }
})

//UPDATE / CREATE (introduce datos)

router.put('/:id', async (req, res) => {
    const id = req.params.id;
    const body = req.body;
    console.log(id)
    console.log('body', body)
    try {
        const partidosDB = await Partidos.findByIdAndUpdate(
            id, body, { useFindAndModify: false }
        )
        console.log(partidosDB)
        res.json({
            estado: true,
            mensaje: 'Partido editado'
        })
    } catch (error) {
        console.log(error)
        res.json({
            estado: false,
            mensaje: 'Problema al editar el Partido'
        })
    }
})




module.exports = router;