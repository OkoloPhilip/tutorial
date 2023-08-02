const mysql = require('mysql')

const con = mysql.createConnection({
  host:"localhost",
  user:"DESKTOP-CRCA7O8",
  password:""

});
con.connect((err)=>{
  if(err){
    throw err;
  }
  console.log('connected!');
})