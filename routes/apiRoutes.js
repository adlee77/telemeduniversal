var db = require('../models')

module.exports = function(app) {
    app.get('/api/support', function (req, res) {
        db.Questions.findAll({}).then(function (products) {
          res.json(products)
        })
      })

    app.post('/api/support', function(req, res) {
        console.log(req.body)
        db.Questions.create({
          name: req.body.name,
          email: req.body.email,
          message: req.body.message
        }).then((newQuestion) => {
            res.json(newQuestion)
        })
    })
}