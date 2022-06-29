const { Router } = require('express');

const router = Router();

const typeRouter = require('./types.js')
const pokemonsRouter = require('./pokemons.js')

// Configurar los routers
router.use('/types', typeRouter);
router.use('/pokemons', pokemonsRouter);

module.exports = router;

