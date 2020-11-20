var db = require('../models')

module.exports = function (app) {
    app.get('/api/support', function (req, res) {
        db.Products.findAll({}).then(function (products) {
          res.json(products)
        })
      })
}