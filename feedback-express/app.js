var express = require('express')
var app = express()

app.engine('html', require('express-art-template'));

app.use('/public/', express.static('./public/'))

app.get('/', function (req, res) {
    //res.send('/page')
    res.render('404.html')
})

app.get('/admin', function (req, res) {
    res.render('admin/index.html', {
        title: '管理系统'
    })
})

app.get('/post', function (req, res) {
    res.send('post page')
})

app.listen(3000, function () {
    console.log('server is on ...')
})