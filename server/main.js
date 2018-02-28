const express = require('express')
const token = require('../access_tokens').fb
const facebookService = require('./facebookService')

const app = express()

app.get('/', (req, res) => res.send(`Logan's Website Server!`))
app.get('/album/:album', (req, res) => {
  facebookService.fetchAlbum(token, req.params.album, response => res.send(response), error => res.send(error))
})

const port = 3000
app.listen(port, () => console.log(`Logan's Website Server Running on Port ${port}`))
