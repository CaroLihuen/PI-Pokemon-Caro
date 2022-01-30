const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

const typeRouter = require('./types.js')
const pokemonsRouter = require('./pokemons.js')

// Configurar los routers
router.use('/types', typeRouter);
router.use('/pokemons', pokemonsRouter);

module.exports = router;

