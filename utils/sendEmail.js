const fs = require("fs");
const path = require("path");

const handlebars = require("handlebars");
const nodemailer = require("nodemailer");

const sendEmail = async (email, subject, payload, template) => {
  try {
    // const transporter = nodemailer.createTransport({
    //   host: "smtp.ethereal.email",
    //   port: 587,
    //   auth: {
    //     user: "della88@ethereal.email",
    //     pass: "sDUbkDzBAfhvuaSrCU",
    //   },
    // });

    const transporter = nodemailer.createTransport({
      host: "mail.privateemail.com",
      port: 587,
      auth: {
        user: process.env.NAMECHEAP_NAME,
        pass: process.env.NAMECHEAP_PASSWORD,
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

    const emailDirectory = path.join(process.cwd(), "email");
    // const source = fs.readFileSync(path.join(__dirname, template), "utf8");
    const source = fs.readFileSync(emailDirectory + `/${template}`, "utf-8");
    const compiledTemplate = handlebars.compile(String(source));

    const message = {
      from: '"E.P.I.C." <contact@asva.tech>',
      to: email,
      subject: subject,
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
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

module.exports = sendEmail;
