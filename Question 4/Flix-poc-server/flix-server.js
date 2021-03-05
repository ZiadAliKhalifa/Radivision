let express = require('express')
let app = express()
var json = require('./data.json');


app.get('/movies', function (req, res) {
    res.type('json')
    res.send(JSON.stringify(json))
})

app.listen(5000, () => {
    console.log(`Movies app listening at http://localhost:${5000}`)
})