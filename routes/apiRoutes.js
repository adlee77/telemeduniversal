var db = require('../models')

module.exports = function(app) {
    app.get('/api/support', function (req, res) {
        db.Questions.findAll({}).then(function (products) {
          res.json(products)
        })
      })

    app.post('/api/support', function(req, res) {
        db.Questions.create(req.body).then((newQuestion) => {
            res.json(newQuestion)
        })
    })
}