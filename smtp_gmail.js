var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your@gmail.com',
    pass: 'yourpassword'
  }
});

var mailOptions = {
  from: 'your@gmail.com',
  to: 'recipient@gmail.com',
  subject: 'Subject',
  text: 'Message body'
};

transporter.sendMail(mailOptions, function(error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
