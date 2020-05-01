const express = require('express')
const app = express()
const port = 3000

//middleware
app.set('view engine', 'pug')
app.use(express.static('public'))


app.listen(port, () => {
  console.log(`App is running on port ${port}!`)
})