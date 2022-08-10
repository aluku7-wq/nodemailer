/** @format */

const express = require("express");
const app = express();
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");
dotenv.config();

port = process.env.PORT;
user = process.env.EMAIL;
pass = process.env.PASSWORD;

app.get("/", (req, res) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: user,
      pass: pass,
    },
  });

  let mailOptions = {
    from: "foreveraluku@gmail.com",
    to: "foreveraluku@gmail.com",
    subject: `job hirer`,
    html: `
        <h2><u>NAME</u></h2>
        <h3>aluku godrick</h3>
        <br/>
        <h2><u>EMAIL</u></h2>
        <h3> foreveraluku@gmail.com</h3>
        <br/>
        <h2><u>MESSAGE</u></h2>
        <h3> welcome aluku how can i help youwelcome aluku how can i help youwelcome aluku how can i help you</h3>

    
    `,
    // attachments: [
    //   {
    //     filename: `${name}.pdf`,
    //     path: path.join(__dirname, `../../src/assets/books/${name}.pdf`),
    //     contentType: "application/pdf",
    //   },
    // ],
  };

  transporter.sendMail(mailOptions, function (err, info) {
    if (err) {
      res.send(err);
    } else {
      res.send(info);
    }
  });
});
app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
