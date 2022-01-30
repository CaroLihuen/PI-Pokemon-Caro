const { Router } = require('express');
const { Type } = require('../db.js');
const  axios = require('axios')
const { API_KEY  }= process.env;
const { getTypes } = require('../controllers/type.controller')

const router = Router(); 

/* get types : 
  - Obtener todos los tipos de pokemons posibles
  - En una primera instancia deberán traerlos desde pokeapi y guardarlos en su propia base de datos y luego ya utilizarlos desde allí
*/
router.get('/', getTypes);
//trae un array de objetos
module.exports = router;