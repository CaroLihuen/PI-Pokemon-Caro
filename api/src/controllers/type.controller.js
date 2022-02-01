require('dotenv').config();
const { Type, Pokemon } = require('../db.js');
const axios = require('axios')
const { Op } = require('sequelize')
const { API_URL_TYPE }= process.env;
//Anda joya! :)
const getTypes =  async(req, res, next)=>{
    try{
     const typesApi = await axios.get(`${API_URL_TYPE}`)
     const types = typesApi.data.results.map(t=>t.name)
     types.map(el=>
        {Type.findOrCreate({
           where: {
            name: el}})
        })
     const allTypes = await Type.findAll();
     res.json(allTypes)
    }
    catch(error){
     return(error)
    }
}

module.exports={
    getTypes,
    //funcion
}