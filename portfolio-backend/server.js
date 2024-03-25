// server.js
const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

app.post("/send-email", (req, res) => {
  const { name, email, text } = req.body;

  if (!name || !email || !text) {
    return res
      .status(400)
      .json({ error: "Name, email, and message are required" });
  }

  if (!isValidEmail(email)) {
    return res.status(400).json({ error: "Invalid email address" });
  }

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "mpa1998.ma@gmail.com",
      pass: "enlv hyzf ekiq avit",
    },
  });

  const mailOptions = {
    from: "mpa1998.ma@gmail.com",
    to: "mpa1998.ma@gmail.com",
    subject: `New Message from ${name} (${email})`,
    text: text,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      return res.status(500).send("Error sending email");
    } else {
      console.log("Email sent: " + info.response);
      return res.status(200).send("Email sent successfully");
    }
  });
});

function isValidEmail(email) {
  // Regular expression for validating email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
