var db = require('../models')

module.exports = function(app) {
    app.get('/', function(req, res) {
        res.render('construction')
    })

    app.get('/home', function(req, res) {
        res.render('home')
    })

    app.get('/purchase', function(req, res) {
        res.render('purchase')
    })

    app.get('/privacy', function(req, res) {
        res.render('privacy')
    })

    app.get('/refund-policy', function(req, res) {
        res.render('refund-policy')
    })

    app.get('/terms-conditions', function(req, res) {
        res.render('terms-conditions')
    })

    app.get('/sign-up', function(req, res) {
        res.render('sign-up')
    })
}