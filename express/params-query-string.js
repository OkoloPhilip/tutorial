//express is used mostly in API and SSR(server side rendering)

const { log } = require('console');
const express = require('express')
const path = require('path');

const app = express()
const {products} = require('./express/products');
const { isNumber } = require('lodash');



app.get('/',(req, res)=>{
  // res.json([{name:'john'}, {name: 'susan'}])
  
  //res.json(products)
res.send('<h1> Home Page</h1><a href="/express/products">products</a>')
})

app.get('/express/products', (req, res)=>{
  const newProducts = products.map((product)=>{
    const {id,name} = product;
    return { id, name }
  })
  res.json(newProducts)
})


app.get('/express/products/:productID', (req, res)=>{
  // console.log(req.params);
  const {productID} = req.params;

  const singleProduct = products.find ((product)=> product.id === Number(productID))
  if(!singleProduct){
    return res.status(404).send('Product Does Not Exist')
  }
  res.json(singleProduct)
})

app.get('/express/products/:productID/reviews/:reviewID', (req, res)=>{
  console.log(req.params); 
  res.send('hello')
})

app.get('/express/v1/query', (req, res)=>{
 // console.log(req.query); 
 const {search, limit} = req.query
 let sortedProducts = [...products];
 
 if(search){
  sortedProducts = sortedProducts.filter((product)=>{
    return product.name.startsWith(search)
  })
 }
 if(limit){
  sortedProducts = sortedProducts.slice(0,Number(limit))
 }
 if(sortedProducts.length < 1){
  //res.status(200).send('no products matched your search')
  return res.status(200).json({success:true, data:[]})
 }
 res.status(200).json(sortedProducts)

})

app.all('*',(req, res)=>{
  res.status(404).send('resource not found')

})
app.listen(5000, ()=>{
  console.log('server is listening to port 5000..')
})