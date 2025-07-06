---
date: 2025-06-16
category:
  - backend
tag:
  - node
  - backend
---

### Express框架基础

```javascript
// express 框架生成器
npx express-generator
// 安装express
npm install express
// 安装自动更新包
npm install nodemon
// 基本使用
const express = require('express')
const app = express()
// 静态文件中间件
const path = require('path')
app.use(express.static('public'))
app.use('/static', express.static(path.join(__dirname, 'public')))
// 全局中间件
const myLogger = function(req, res, next){
    console.log('log')
    next()
}
// 根据路由接收请求
app.get('/', (req, res)=>{
    res.send('hello world!')
})
// 局部中间件
app.post('/', function(req, res, next){
    console.log("执行了局部中间件")
    next()
},(req, res)=>{
    res.send('hello world!')
})
app.put('/user', (req, res)=>{
    res.send('hello world!')
})
// 无匹配请求地址处理
app.all('*', (req, res, next)=>{
    res.send("找不到改请求地址")
    next()
})
// 服务器请求的异常处理
app.use((err, req, res, next)=>{
    console.log(err.stack)
    res.status(500).send("服务器出错")
})


app.listen(port, ()=>{
    console.log(`server is runing, port:${port}`)
})



// express 的模板引擎
// 设置模板文件夹和模板引擎
app.set('views', __dirname+"/views")
app.set('view engine', 'ejs')
var indexRouter = require('./routes/index')
app.get('/user', indexRouter)
// 下列代码为routes/index.js路由文件中的代码
router.get('/', function(req, res){
    //调用模板解析引擎渲染页面,名为index的模板并传入一个对象为参数
    res.render('index', {title: 'Express'})
})
module.exports = router





```