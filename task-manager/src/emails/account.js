const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENGRID_API_KEY);

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
