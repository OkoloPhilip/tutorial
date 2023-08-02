//express is used mostly in API and SSR(server side rendering)

const { log } = require('console');
const express = require('express')
const path = require('path');

const app = express()
const morgan = require('morgan')
const { isNumber } = require('lodash');

const logger = require('./express/logger')

const authorize = require('./express/authorize')
//req => middleware => res

// app.use([logger,authorize])
//options - ourown / express / third party middleware uses morgan
app.use(morgan('tiny'))
 
app.get('/', (req, res)=>{
  
  res.send('Home')
})

app.get('/about', (req, res)=>{
  res.send('About')
})
 

app.listen(5000, ()=>{
  console.log('server is listening to port 5000..')
})