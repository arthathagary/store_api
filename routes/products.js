const express = require('express')
const router = express.Router()
const {getAllProductsStatic} = require('../controllers/products')

router.route('/api/v1').get(getAllProductsStatic)


module.exports = router;