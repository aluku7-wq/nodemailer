/** @format */

const router = require("express").Router();
const dotenv = require("dotenv");
const { messavalidation } = require("../validation");
const nodemailer = require("nodemailer");
dotenv.config();
user = process.env.EMAIL;
pass = process.env.PASSWORD;
router.post("/email", async (req, res) => {
  const { error } = messavalidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);
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
        <h3>${req.body.name}</h3>
        <br/>
        <h2><u>EMAIL</u></h2>
        <h3> ${req.body.email}</h3>
        <br/>
        <h2><u>MESSAGE</u></h2>
        <h3> ${req.body.message}</h3>

    
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
      res.json(err);
    } else {
      res.json(info);
    }
  });
});
module.exports = router;
