const express = require('express')
const DeeweeCtrl = require('../controllers/deewee-ctrl')

const router = express.Router()

router.post('/ticket',DeeweeCtrl.createTicket)
router.put('/ticket/:id',DeeweeCtrl.updateTicket)
router.delete('/ticket/:id', DeeweeCtrl.deleteTicket)
router.get('/ticket/:id', DeeweeCtrl.getTicketById)
router.get('/tickets', DeeweeCtrl.getTicket)

module.exports = router
