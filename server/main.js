const path = require('path')
const express = require('express')
const token = require('../functions/access_tokens').fb
const facebookService = require('../functions/facebookService')

const app = express()
app.use(express.static(path.join(__dirname, '../client/dist')))

app.get('/getAlbum', (req, res) => {
  facebookService.fetchAlbum(token, req.query.album, response => res.send(response), error => res.status(500).send(error))
})

app.use((req, res) => res.sendFile(path.join(__dirname, '../client/dist/index.html')))

const port = 3000
app.listen(port, () => console.log(`Logan's Website Server Running! \nNavigate to http://localhost:${port}`))
