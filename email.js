const email = require('nodemailer')

const transporter = nodemailer.creatTransport({
  service: 'gmail',
  auth:{
    user: 'okolophilip68@gmail.com',
    pass: 'Philip1234$'
  }
});

const mailOption = {
  from: 'okolophilip68@gmail.com',
  to: 'okolophilip@yahoo.ca',
  subject: 'Send email using Node.js',
  text: 'That was easy!!!'
};

transporter.sendMail(mailOption, (err, info)=>{
  if(err){
    console.log(err);
  }
  else{
    console.log('Email sent!!!' + info.response);
  }
});