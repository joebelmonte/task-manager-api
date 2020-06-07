const sgMail = require('@sendgrid/mail')
 
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'joseph.belmonte@gmail.com',
        subject: 'Thanks for signing up!',
        text: `Welcome to the app, ${name}.  Let me know how you get along with the app.`
    })
}

const sendCancelEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'joseph.belmonte@gmail.com',
        subject: 'Account Terminated',
        text: `Hello ${name}, this email confirms your account has been terminated. We are sorry to see you go.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}