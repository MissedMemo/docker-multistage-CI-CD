"use strict"

const express = require('express')
const routes = require('./routes')
const app = express()

const baseRoute = '/api/v1' // move to config

routes.forEach( route => app.use( baseRoute, route ) )

const port = process.env.PORT || 3001

app.listen( port, () => {
  console.log(`
  ///////////////////////////////////////////
     API SERVER listening on port ${port}
  //////////////////////////////////////////
  `)
})