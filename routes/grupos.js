const express = require('express')
const router = express.Router()

const gruopController = require('../controllers/groupController')
const financialController = require('../controllers/financialController')


router.get('/grupos/:id', gruopController.busca)
router.get('/grupos', gruopController.index)
router.post('/grupos', gruopController.create) 
router.put('/grupos/:id', gruopController.update)
router.delete('/grupos/:id', gruopController.remove)
router.get('/extract', financialController.extract)
router.post('/payment', financialController.payment)
router.get('/buscap/:nome', financialController.buscap)
router.get('/extractr', financialController.extractR)
router.get('/saldo', financialController.saldo)
router.post('/retirada', financialController.retirada)
router.post('/newuser', financialController.newUser)
router.get('/users', financialController.user)









module.exports = router