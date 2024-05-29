import nodemailer from "nodemailer";

export class SmtpGmailTransport {
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "csdkleer@gmail.com",
        pass: "ubcn zwyj bhjs ngsk",
      },
    });
  }
  sendMail(message) {
    this.transporter.sendMail(message, (err, info) => {
      if (err) {
        console.log(err);
      } else {
        console.log("EMAIL SENT TO: " + message.to);
      }
    });
  }
}