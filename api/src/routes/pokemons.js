const { Router } = require('express');
const { Type, Pokemon} = require('../db.js');
const  axios = require('axios');
const { getPoke, pokemonsAll } = require('../controllers/pokemon.controller.js');
const { API_URL_ID }= process.env;

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
//Ansa joya :)
router.get('/:id', async (req, res, next) => {
    const id = req.params.id
    try{
     if(id.length >= 36){
        const pokes = await Pokemon.findOne({
            where: {id: {[Op.eq]:id }},
            include: {model: Type}
        })
        if(pokes){
            return res.json(pokes)
        }
     }else if(id.length<36){
        const pokeid = await axios(`${API_URL_ID}/${id}`)
        const pd = pokeid.data;
        const data= {
           name: pd.name,
           hp: pd.stats[0].base_stat,
           attack: pd.stats[1].base_stat,
           defense: pd.stats[2].base_stat,
           speed: pd.stats[5].base_stat,
           height: pd.height,
           weight: pd.weight,
           sprite: pd.sprites.other.dream_world.front_default,
        } /**/
        return res.json(data)//me devuelve un json :)
     } else {
        res.status(404).send('This Pokemon is not available')
     }
    }
    catch(error){
      next(error)
    }
});


/* get pokemons/?name:... : 
 - Obtener el pokemon que coincida exactamente con el nombre pasado como query parameter (Puede ser de pokeapi o creado por nosotros)
  - Si no existe ningún pokemon mostrar un mensaje adecuado
*/

/* post pokemons : 
 - Recibe los datos recolectados desde el formulario controlado de la ruta de creación de pokemons por body
  - Crea un pokemon en la base de datos
*/
router.post('/', (req, res, next) => {
    try{

    }
    catch{
        
    }
});

module.exports = router;