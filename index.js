const express = require('express')
const app = express()

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.listen(5000, () => console.log('App is running at port 5000!'))