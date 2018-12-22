const express = require('express')
const controller = require('./controller')

const router = express.Router()

const baseRoute = '/api/v1'

router.route(`${baseRoute}/appointments`).get(controller.getAppointments)

module.exports = router