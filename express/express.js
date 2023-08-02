const express = require('express')
const path = require('path');

const app = express()

// all the static files (ie. css,js,svg,html that make up the web page) is kept in this folder
//setup static and middleware
app.use(express.static('./public'))

app.get('/',(req, res)=>{
  res.sendFile(path.resolve(__dirname, './tutorial/index.html'))
  console.log('user hit the resource');
  res.status(200).send('Home Page')
})

app.get('/about',(req, res)=>{
  console.log('user hit the resource');
  res.status(200).send('About Page')
})
app.all('*',(req, res)=>{
  res.status(404).send('<h1>resource not found</h1>')

})
app.listen(5000, ()=>{
  console.log('server is listening to port 5000..')
})
  // express js

//app.get
//app.post
//app.put
//app.delete
//app.all
//app.use
//app.listen

