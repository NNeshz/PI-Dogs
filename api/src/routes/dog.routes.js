const { Router } = require('express')

const router = Router()

router.get('/', (req, res) => {
    res.send('Funciona la ruta de dogs')
});

module.exports = router;