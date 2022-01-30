const { Router } = require('express');
const { Type, Pokemon} = require('../db.js');
const  axios = require('axios');
const { getPoke } = require('../controllers/pokemon.controller.js');
const { API_KEY  }= process.env;

const router = Router(); 

router.get('/', getPoke);
/* get pokemons: 
- Obtener un listado de los pokemons desde pokeapi.
  - Debe devolver solo los datos necesarios para la ruta principal
*/ 

/* get pokemons/{idpokemons}: 
 - Obtener el detalle de un pokemon en particular
  - Debe traer solo los datos pedidos en la ruta de detalle de pokemon
  - Tener en cuenta que tiene que funcionar tanto para un id de un pokemon existente en pokeapi o uno creado por ustedes
*/ 


/* get pokemons/?name:... : 
 - Obtener el pokemon que coincida exactamente con el nombre pasado como query parameter (Puede ser de pokeapi o creado por nosotros)
  - Si no existe ningún pokemon mostrar un mensaje adecuado
*/

/* post pokemons : 
 - Recibe los datos recolectados desde el formulario controlado de la ruta de creación de pokemons por body
  - Crea un pokemon en la base de datos
*/


module.exports = router;