const express = require('express')
const path = require('path')
const app = express()

app.use(express.static('dist'))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + 'dist/index.html'))
})


app.listen(5000, () => console.log('App is running at port 5000!'))