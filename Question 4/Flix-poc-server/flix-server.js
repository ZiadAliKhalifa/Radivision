let express = require('express')
let cors = require('cors')
let app = express()
let json = require('./data.json');


app.get('/movies', cors(), function (req, res) {
    res.type('json')
    res.send(JSON.stringify(json))
})

app.listen(5000, () => {
    console.log(`Movies app listening at http://localhost:${5000}`)
})