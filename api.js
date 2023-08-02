const express = require('express')
const app = express()
 const people = require('./express/routes/people')
 const auth  = require('./express/routes/auth')
const bodyParser =require('body-parser')

app.use(express.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use('/api/people', people)
app.use('/login', auth)



app.listen(5000, ()=>{
  console.log('server is listening to port 5000..')
})