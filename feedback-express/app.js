var express = require('express')
var app = express()
var bodyParser = require('body-parser')

app.engine('html', require('express-art-template'));

app.use('/public/', express.static('./public/'))
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

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

app.post('/post', function (req, res) {
    //req.query只能获取get请求参数
    // 配置body-parser 会在请求对象上多出来一个属性: body
    // 通过req.body来获取表单POST请求体数据
    console.log(req.body)

})

app.listen(3000, function () {
    console.log('server is on ...')
})