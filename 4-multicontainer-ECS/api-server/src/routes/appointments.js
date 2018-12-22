const express = require('express')
const controller = require('../controllers/appointments')

const router = express.Router()

router.route('/appointments').get(controller.getAppointments)

module.exports = router