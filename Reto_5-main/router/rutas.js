const express = require('express') //Requerimos Express
const router = express.Router();

// Ahora, CORTAMOS del fichero principal 01-express.js
// las dos rutas que tenemos: la principal ( / ) y la 
// de contactos ( /contaco )
// Importante que ya no usaremos el app.get(...), ahora
//vamos a utilizar las rutas, por lo que deberemos poner:
router.get('/', (req, res) => {
    res.render("login")
})

// router.get('/inicio', async(req, res) => {
//     res.render("inicio")
    
// })

router.get('/registro', (req, res) => {
    res.render("registro")
})




// Por último, vamos a exportarlo:
module.exports = router;