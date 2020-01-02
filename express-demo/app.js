var express = require('express')
var app = express()

app.get('/', function (req, res) {
    res.write('hello')
    res.end()
})

// app.get('/login', function (req, res) {

//     res.end('login')
// })
app.use('/public/', express.static('./public/'))

app.listen(3000, function () {
    console.log('express')
})