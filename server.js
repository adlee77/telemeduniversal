var express = require('express')
var exphbs = require('express-handlebars')
var enforce = require('express-sslify');


var db = require('./models')

var app = express()
var PORT = process.env.PORT || 3000
app.use(enforce.HTTPS({ trustProtoHeader: true }));
const bodyParser = require('body-parser')
const path = require('path')

// Middleware
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(express.static('public'))

// This will make our form data much more useful
app.use(bodyParser.urlencoded({ extended: true }))

// This will set express to render our views folder, then to render the files as normal html
app.set('view engine', 'ejs')
app.engine('html', require('ejs').renderFile)
app.use(express.static(path.join(__dirname, './views')))

// Handlebars
app.engine(
  'handlebars',
  exphbs({
    defaultLayout: 'main'
  })
)
app.set('view engine', 'handlebars')


// Routes
// require('./routes/apiRoutes')(app)
require('./routes/htmlRoutes')(app)
require('./routes/apiRoutes')(app)

var syncOptions = { force: false }

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === 'test') {
  syncOptions.force = true
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function () {
  app.listen(PORT, function () {
    console.log(
      '==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.',
      PORT,
      PORT
    )
  })
})

module.exports = app