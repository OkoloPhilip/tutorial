
const sayHi = (name) =>{
  console.log(`hello dear ${name}`);
}

module.exports = sayHi

const http = require('http')
const {readFileSync} = require('fs');


// get all files
const homePage = readFileSync('./index.html')
 const server = http.createServer((req, res)=>{
 //console.log(req.url);
 const url = req.url;
 if(url === '/'){

  res.writeHead(200,{'content-type': 'text/html'})
  res.write(homePage)
  res.end()
 }
 else if(url === '/about'){
  
res.writeHead(200,{'content-type': 'text/html'})
res.end('<h1>about page  </h1>')
 }
 else{
  
res.writeHead(404,{'content-type': 'text/html'})
res.end('<h1>page not found  </h1>')
 }
 })
 server.listen(5000)