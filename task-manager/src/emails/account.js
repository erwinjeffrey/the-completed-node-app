const sgMail = require('@sendgrid/mail');

const sendgridAPIKey =
  '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';

sgMail.setApiKey(sendgridAPIKey);

const sendEmail = async function() {
  try {
    await sgMail.send({
      to: 'erwinjefly@gmail.com',
      from: 'erwinjefly@gmail.com',
      subject: 'This is my first creation!',
      text: 'I hope this one actually get to you.'
    });
  } catch (error) {
    console.log(`error ${error}`);
  }
};

sendEmail();
