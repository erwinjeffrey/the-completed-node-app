const sgMail = require('@sendgrid/mail');

const sendgridAPIKey =
  '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';

sgMail.setApiKey(sendgridAPIKey);

const sendWelcomeEmail = async (email, name) => {
  try {
    await sgMail.send({
      to: email,
      from: 'erwinjefly@gmail.com',
      subject: 'This is my first creation!',
      text: `Welcome to the app, ${name}. Let me know how  ou get along with the app.`
    });
  } catch (error) {
    console.log(`error ${error}`);
  }
};

const sendCancelationEmail = async (email, name) => {
  try {
    await sgMail.send({
      to: email,
      from: 'erwinjefly@gmail.com',
      subject: 'Sorry to see you go',
      text: `Goodbye ${name}. I hope to see you back sometime soon`
    });
  } catch (error) {
    console.log(`error ${error}`);
  }
};

module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail
};
