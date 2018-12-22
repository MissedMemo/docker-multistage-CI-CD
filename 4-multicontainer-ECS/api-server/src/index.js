"use strict"

const express = require('express')
const routes = require('./routes')
const app = express()

app.use(routes)

const port = process.env.PORT || 3001

app.listen( port, () => {
  console.log(`
  ///////////////////////////////////////////
     API SERVER listening on port ${port}
  //////////////////////////////////////////
  `)
})