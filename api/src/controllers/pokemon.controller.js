require('dotenv').config();
const { Type, Pokemon } = require('../db.js');
const axios = require('axios')
const { Op } = require('sequelize')
const { API_URL, API_URL_ID , API_URL_NAME }= process.env;

const getPoke = async(req, res, next)=>{
    try{
     const api= await axios.get(`${API_URL}`)
     const data1 = api.data.results// primera pagina
     const api2 = await axios.get(api.data.next)
     const data2 = api2.data.results//segunda pagina
     const totalinfo =[...data1,...data2] //me trae los 40 :)!
    
     let arr = []
     const all = totalinfo.forEach((data)=>arr.push(data.url)) //las url de los pokes
     let promise= []
     arr.forEach((e)=>{ //promesa pendiente
        let aux = axios.get(e)
        promise.push(aux)
     })
     let infopokes = await Promise.all(promise)//toda la info de las urls
     let arrinfo =[]
     const pokes = infopokes.map((p)=>{
      arrinfo.push({
          id: p.data.id,
          name: p.data.name,
          hp: p.data.stats[0].base_stat,
          attack: p.data.stats[1].base_stat,
          defense: p.data.stats[2].base_stat,
          speed: p.data.stats[5].base_stat,
          height: p.data.height,
          weight: p.data.weight,
          sprite: p.data.sprites.other.dream_world.front_default,
      })
     })
     return res.send(arrinfo)//array de objetos :)
    }
    catch(error){
     return error;
    }
}

const pokeDb = async()=>{
    try{
     const dt = await Pokemon.findAll({
         include: Type /*{
             model: ,
             attributes: ['name'],
             through: {
                 attributes: []
             }
         }*/
     })
     const pokedb = dt.map((p)=>{
         return{
            id: p.id,
            name: p.name,
            hp: p.hp,
            attack: p.attack,
            defense:p.defense,
            speed: p.speed,
            height: p.height,
            weight: p.weight,
            sprite: p.sprite
         }
     })
     return pokedb;
    }
    catch(error){
     next(error)
    }
}
//ver bien porque no me deja concatenar!!
async function pokemonsAll(){
    const api = await getPoke();
    const dbs = await pokeDb();
    const allpokes = api.concat(dbs)
    return allpokes;
}



module.exports={
    getPoke,
    pokemonsAll,
    //funcion
}