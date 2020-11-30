var db = require('../models')

module.exports = function(app) {
    app.get('/', function(req, res) {
        res.render('home')
    })

    app.get('/purchase', function(req, res) {
        res.render('purchase')
    })

    app.get('/purchase-confirm', function(req, res) {
        console.log('test')
        res.render('purchase-confirmation')
    })

    app.post('/purchase-confirm', function(req, res) {
        console.log('test')
        res.render('purchase-confirmation', req.body)
    })
}