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
    //provar de otra manera!
     const all = totalinfo.map( el=> axios.get(el.url))
     let infopokes = Promise.all(all)
     console.log(infopokes)
     


    return res.send(totalinfo)
    }
    catch(error){
     next(error)
    }
}


module.exports={
    getPoke,
    //funcion
}