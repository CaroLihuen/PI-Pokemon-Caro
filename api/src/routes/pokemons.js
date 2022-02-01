const { Router } = require('express');
const { Type, Pokemon} = require('../db.js');
const  axios = require('axios');
const { getPoke, pokemonsAll } = require('../controllers/pokemon.controller.js');
const { API_URL }= process.env;
const { Op } = require('sequelize');

const router = Router();
/* get pokemons: 
- Obtener un listado de los pokemons desde pokeapi.
  - Debe devolver solo los datos necesarios para la ruta principal
*/ 
router.get('/', async(req,res,next)=>{
  const datas = await pokemonsAll();
  try{
   return res.status(200).json(datas)
  }
  catch(error){
   next(error)
  }
});// getPokepokemonsAll
/* get pokemons/{idpokemons}: 
 - Obtener el detalle de un pokemon en particular
  - Debe traer solo los datos pedidos en la ruta de detalle de pokemon
  - Tener en cuenta que tiene que funcionar tanto para un id de un pokemon existente en pokeapi o uno creado por ustedes
*/ 
//Anda joya :)
router.get('/:id', async (req, res, next) => {
    const id = req.params.id
    try{
     if(id.length >= 36){
        const pokes = await Pokemon.findOne({
            where: {id: {[Op.eq]:id }},
            include: {model: Type}
        })
        console.log(pokes)
        if(pokes){
            return res.json(pokes)
        }
     }else if(id.length<36){
        const pokeid = await axios(`${API_URL}/${id}`)
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
router.get('/', async (req, res, next) =>{
  const name = req.query.name;
  //Arreglar cuando viene del db
  let info = await getPoke(); 
  try{
   if(info){
    let nameP = info.filter((d)=>
    d.name.toLowerCase().includes(name.toLowerCase())
    )
    res.status(200).json({message:"Busqueda por db"},nameP)
   }
    else{
    const pokeid = await axios(`${API_URL}/${name}`)
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
       types: pd.types.map((t) => t.type.name)
    } /**/
    return res.status(200).json({message:"Busqueda por api"},data)
   } 
   
  //res.status(404).send("There is no Pokemon whit that name.")
  
  }
  catch(error){
      next(error)
  }
});
/* post pokemons : 
 - Recibe los datos recolectados desde el formulario controlado de la ruta de creación de pokemons por body
  - Crea un pokemon en la base de datos
*/
router.post('/', async (req, res, next) => {
  //Ver como llega el types
  const {name, hp, attack, defense, speed, height, weight, sprite, types} = req.body
  try{ 
   const newPoke = await Pokemon.create({
    name, 
    hp, 
    attack, 
    defense, 
    speed, 
    height, 
    weight, 
    sprite
   })
   let dbtype = await Type.findAll({
     where: { name: types } //quizas cambiarlo por type, habria que probarlo
   })
   newPoke.addType(dbtype)
   console.log(types)
   //res.json(newPoke)?
   res.status(200).send('Pokemon created successfully')
   return newPoke;
  }
  catch(error){
    next(error)    
  }
});

module.exports = router;