const mongoose = require('mongoose')

const requireLogin = require('../middlewares/requireLogin')
const requireCredits = require('../middlewares/requireCredits')
const Survey = mongoose.model('surveys')

module.exports = app => {
    app.post('/api/surveys', requireLogin, (req,res) => {
        const {title, subject, body, recipients} = req.body

        const survey = new Survey({
            title: title,
            body: body,
            subject: body,
            recipients: recipients.split(',').map(email => ({
                return {email: email.trim()}
            })),
            _user: req.user.id,
            dateSent: Date.now()
        })
    })
}