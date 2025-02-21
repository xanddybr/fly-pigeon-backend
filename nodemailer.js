const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    host: "smtp.hostinger.com", //server SMTP
    port: 587,
    secure: false,
    auth: {
      user: "contato@catarseie.com.br",
      pass: "Nanny@18", // PASSWORD OF GOOGLE XANDDYBR- ojbe skqv holy scrb
    },
  });

  async function send() {
    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: '"Catarse I.E throught site" <contato@catarseie.com.br>', // sender address
      to: "alessouza@live.com", // list of receivers
      subject: "Sua apostila de brinde acaba de chegar!", // Subject line
      text: "", // plain text body
      html: "<h1>Ola!</h1><br><br> Você acaba de receber em anexo o seu brinde, a lei a com calma e atneção para, e começe hoje mmesmo a dar os primeiros passos na sua tranformação pessoal! <br><br>  https://smallpdf.com/file#s=c72b24c0-f00c-4f8d-9d6a-06503a87ce80", // html body
      attachments:  [{ filename: "catarseie_gift.pdf", path: "./catarseie_gift.pdf" }],
    });
        console.log(info.messageId + " - " + info.response);
  }
 

  module.exports = send;