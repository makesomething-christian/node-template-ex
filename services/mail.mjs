import nodemailer from 'nodemailer'
import config from '../config/index.mjs'
import log from '../lib/logger.mjs'

const mailConfig = config.getMailConfig()

const transporter = nodemailer.createTransport({
  host: mailConfig.HOST,
  port: 587,
  secure: false, 
  auth: mailConfig.CREDENTIALS
})

const mail = async (to, subject, text, html) => {
  const mailOptions = {
    from: mailConfig.SUPPORT,
    to,
    subject,
    text,
    html
  }
  let results = null
  try {
    results = await transporter.sendMail(mailOptions)
    log.info('Message sent: %s', results.messageId)
  }
  catch (err) {
    log.err(err)
  }
  return results
}

export default {
  mail
}
