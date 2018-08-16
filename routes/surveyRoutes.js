const mongoose = require('mongoose')

const requireLogin = require('../middlewares/requireLogin')
const requireCredits = require('../middlewares/requireCredits')
const Survey = mongoose.model('surveys')
const Mailer = require('../services/mailer')
const surveyTemplate = require('../services/emailTemplates/surveyTemplate')

module.exports = app => {
    app.post('/api/surveys', requireLogin, (req,res) => {
        const {title, subject, body, recipients} = req.body

        const survey = new Survey({
            title: title,
            body: body,
            subject: body,
          recipients: recipients.split(',').map(email => ({
              email: email.trim()
          })),
            _user: req.user.id,
            dateSent: Date.now()
        })

        const mailer = new Mailer(survey, surveyTemplate(survey))
    })
}