const { Router } = require('express');
const { Type, Pokemon} = require('../db.js');
const  axios = require('axios');
const { pokemonsAll } = require('../controllers/pokemon.controller.js');
const { API_URL }= process.env;

const router = Router();

/*router.get('/', async(req,res,next)=>{
  const datas = await pokemonsAll();
  try{
   return res.status(200).json(datas)
  }
  catch(error){
   next(error)
  }
});*/
//Anda 
router.get('/:id', async (req, res, next) => {
    const id = req.params.id
    let datas = await pokemonsAll();
    try{
     if(id.length >=30){
        let aux = await datas.filter((e)=>e.id === id )
        let obj = {...aux}
        console.log(obj)
        if(aux){
          return res.json(obj[0])
        }else {
          return res.status(404).send("There is no pokemon with that ID")
        } 
     }else if(id.length<30){
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
           types: pd.types.map((t) => t.type.name).join(', ')
        } 
        return res.json(data)//me devuelve un json :)
     } else {
        res.status(404).send('This Pokemon is not available')
     }
    }
    catch(error){
      next(error)
    }
});
//Funciona!! :)
router.get('/', async (req, res, next) =>{
  const name = req.query.name;
  try{
    let info = await pokemonsAll(); 
   if(name){
    let nameP = info.filter((d)=>
    d.name.toLowerCase() === name.toLowerCase()
    )
     if(nameP.length){
       return  res.status(200).send(nameP)
     } else {
       return res.status(404).send("Not pokemon whit that name")
     }
   }
    else if (name)  {
    if(name.toLowerCase()){ 
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
   }
    return res.status(200).send([data])
  }
   } else{
    return res.status(200).json(info)
   }
   
  }
  catch(error){
      next(error)
  }
});
 //Anda Joya!
router.post('/', async (req, res, next) => {
   try{ 
  const {name, hp, attack, defense, speed, height, weight, sprite, types} = req.body
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
     where: { name: types } 
   }) 
   newPoke.addType(dbtype)
   console.log(types)
   res.status(200).send('Pokemon created successfully')
   return newPoke;
  }
  catch(error){
    next(error)    
  }
});
/*
router.put('/:id', async (req, res) => {
  const {id}= req.params
  const poke1 = req.body
  try{
   let aux = await Pokemon.update(poke1, {
     where: {id: id}
   })
   return res.json({cambiado:true})
  }
  catch(error){
    next(error)
  }
});

router.delete('/:id', async (req, res) => {
  const {id}= req.params
  try{
   let aux = await Pokemon.destroy({
     where: {id: id}
   })
   return res.json({borrado:true})
  }
  catch(error){
    next(error)
  }
});*/

module.exports = router;