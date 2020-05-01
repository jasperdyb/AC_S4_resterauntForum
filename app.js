const express = require('express')
const db = require('./models')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const session = require('express-session')
const passport = require('./config/passport')
const flash = require('connect-flash')


//middleware
app.set('view engine', 'pug')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(session({ secret: 'secret', resave: false, saveUninitialized: false }))
app.use(passport.initialize())
app.use(passport.session())
app.use(flash())
app.use((req, res, next) => {
  res.locals.success_messages = req.flash('success_messages')
  res.locals.error_messages = req.flash('error_messages')
  res.locals.user = req.user
  next()
})

app.listen(port, () => {
  console.log(`App is running on port ${port}!`)
})

require('./routes')(app, passport)