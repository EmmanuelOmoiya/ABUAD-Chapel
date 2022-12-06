// const sendEmail = async (email, subject, payload, template) => {
//   try {
//     // const transporter = nodemailer.createTransport({
//     //   host: "smtp.ethereal.email",
//     //   port: 587,
//     //   auth: {
//     //     user: "della88@ethereal.email",
//     //     pass: "sDUbkDzBAfhvuaSrCU",
//     //   },
//     // });

import nodemailer from "nodemailer";
import Handlebars from "handlebars";
import fs from "fs";
import path from "path";

export default async (req, res) => {
  let payload = {
    fullname: req.body.name,
    email: req.body.email,
    body: req.body.body,
  };
  console.log(payload);
  console.log("Hellloooo");
  const transporter = nodemailer.createTransport({
    // host: "mail.privateemail.com",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      // user: "contact@asva.tech",
      // pass: "o14ZM6YwAepyalpH",
      user: process.env.USER,
      pass: process.env.PASS,
    },
  });

  await new Promise((resolve, reject) => {
    // Verify Connection Configuration
    transporter.verify(function (error, success) {
      if (error) {
        console.log("Unable to verify");
        console.log(error);
        reject(error);
      } else {
        console.log("Server is ready to take our messages");
        resolve(success);
      }
    });
  });

  const emailDirectory = path.join(process.cwd(), "utils");
  // const source = fs.readFileSync(path.join(__dirname, template), "utf8");
  const source = fs.readFileSync(
    emailDirectory + `/contact.handlebars`,
    "utf-8"
  );
  const compiledTemplate = Handlebars.compile(String(source));
  console.log("Hellloooo, again");

  const message = {
    from: "ABUAD Chapel Website",
    to: "emmanuelomoiya6@gmail.com",
    subject: ` ABUAD Chapel Website`,
    html: compiledTemplate(payload),
  };

  await new Promise((resolve, reject) => {
    transporter.sendMail(message, function (err, info) {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        console.log(info);
        console.log("Message sent: %s", info?.messageId);
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        resolve(info);
      }
    });
  });
  console.log("Hellloooo confirm again");
  res.status(200);
};
