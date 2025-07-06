---
date: 2025-06-16
category:
  - backend
tag:
  - node
  - backend
---

# NODE与邮箱邮件发送

### NODE与邮箱邮件发送

邮箱验证码思路

验证码发送阶段

客户端上传邮箱地址到服务端，服务端通过生成随机验证码，并将这个验证码发送到用户上传的这个邮箱中。此时服务端需要将这个邮箱和验证码保存到数据库的某张表中（后文中使用Code来称呼这个表），同时保证这条记录的唯一性。并在有效时间内将这条记录删除（此时间就是验证码的有效时间）

验证码验证阶段

客户端将收到的验证码和邮箱重新发送到服务端，服务端开始验证：

是否能够从Code中查询到这条验证码和邮箱与客户端发送一致的记录
是：验证通过，并删除这条记录
否：验证不通过
验证码发送阶段
————————————————

**安装**

安装提供发送邮件的模块：`nodemailer`、`nodemailer-smtp-transport`

**使用**

**引入发送邮件的模块**

```js
const nodemailer = require('nodemailer')
const smtpTransport = require('nodemailer-smtp-transport')
```

**创建连接对象**

```js
const transport = nodemailer.createTransport(smtpTransport({
    host: 'smtp.163.com', // 服务 由于我用的163邮箱
    port: 465, // smtp端口 默认无需改动
    secure: true,
    auth: {
      user: 'crackerlink@163.com', // 用户名
      pass: 'xxxxxxxxx' // SMTP授权码
    }
}));
```

host:如果发件使用sina邮箱的话就填写 smtp.sina.com；qq邮箱同理
secure:如果为true，则连接到服务器时连接将使用TLS。如果为false（默认值），则在服务器支持STARTTLS扩展名的情况下使用TLS。在大多数情况下，如果要连接到端口465，请将此值设置为true。对于端口587或25，请将其保留为false
auth:发件人身份验证对象
user:用户名
pass：SMTP授权码 (通常在邮箱网站的设置里)
login:认真类型,默认login（普通用户无需填写这一项）



**生成随机验证码函数 及 邮箱验证正则**

```js
const randomFns=()=> { // 生成6位随机数
    let code = ""
    for(let i= 0;i<6;i++){
        code += parseInt(Math.random()*10)
    }
    return code 
}
 const regEmail=/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/ //验证邮箱正则
```

**建立连接发送验证码**

```js
let EMAIL=req.body.e_mail //req为请求体对象 我使用的是post请求方式，所以通过req.body获取用户提交的邮箱
 if (regEmail.test(EMAIL)){  //邮箱验证通过
   let code=randomFns()
   transport.sendMail({
     from: 'crackerlink@163.com', // 发件邮箱
     to: EMAIL, // 收件列表
     subject: '验证你的电子邮件', // 标题
     html: `
     <p>你好！</p>
     <p>您正在注册Cracker社区账号</p>
     <p>你的验证码是：<strong style="color: #ff4e2a;">${code}</strong></p>
     <p>***该验证码5分钟内有效***</p>` // html 内容
   }, 
   function(error, data) {
     assert(!error,500,"发送验证码错误！")
     transport.close(); // 如果没用，关闭连接池
   })
   //....验证码发送后的相关工作 
 }else{
     assert(false,422,'请输入正确的邮箱格式！')
 }
```

**验证码发送后的相关工作**

接下来需要将这个邮箱和验证码保存到**Code**中，同时保证这条记录的唯一性。并在**5分钟**内将这条记录删除

```
const Code = require("../models/Code")
    const e_mail = EMAIL
    await Code.deleteMany({e_mail}) //删除该旧的验证码，保证该邮箱是最新的验证码有效
    const [data] = await Code.insertMany({e_mail,veri_code:code}) //插入新邮箱验证码组合
    setTimeout(async ()=>{    //5分钟后删除
        await Code.deleteMany({e_mail})
    },1000*60*5)
```

**发送阶段完整代码**
**（推荐将其封装为中间件）**

```js
module.exports = app=>{
    const nodemailer = require('nodemailer')
    const smtpTransport = require('nodemailer-smtp-transport')

    const assert = require('http-assert')
    
    const transport = nodemailer.createTransport(smtpTransport({
        host: 'smtp.163.com', // 服务
        port: 465, // smtp端口
        secure: true,
        auth: {
          user: 'crackerlink@163.com', //用户名
          pass: 'xxxxxxx' // SMTP授权码
        }
    }));
      
    const randomFns=()=> { // 生成6位随机数
        let code = ""
        for(let i= 0;i<6;i++){
            code += parseInt(Math.random()*10)
        }
        return code 
    }
    const regEmail=/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/ //验证邮箱正则
      
    return async(req,res,next)=>{
        let EMAIL=req.body.e_mail
        if (regEmail.test(EMAIL)){
          let code=randomFns()
          transport.sendMail({
            from: 'crackerlink@163.com', // 发件邮箱
            to: EMAIL, // 收件列表
            subject: '验证你的电子邮件', // 标题
            html: `
            <p>你好！</p>
            <p>您正在注册Cracker社区账号</p>
            <p>你的验证码是：<strong style="color: #ff4e2a;">${code}</strong></p>
            <p>***该验证码5分钟内有效***</p>` // html 内容
          }, 
          function(error, data) {
            assert(!error,500,"发送验证码错误！")
            transport.close(); // 如果没用，关闭连接池
          })        
          const Code = require("../models/Code")
          const e_mail = EMAIL
          await Code.deleteMany({e_mail})
          const [data] = await Code.insertMany({e_mail,veri_code:code})
          setTimeout(async ()=>{    //5分钟后失效
              await Code.deleteMany({e_mail})
          },1000*60*5)
        }else{
            assert(false,422,'请输入正确的邮箱格式！')
        }
        next()
    }
}
```

**验证码验证阶段**

验证阶段只需要通过获取用户得邮箱和验证码是否在**Code**中查询到即可

```js
router.post('/new',async (req,res)=>{
    const {e_mail,veri_code} = req.body
    // 验证码验证
    const vire = await require('../../models/Code').findOne({e_mail,veri_code})
    assert(vire,422,'验证码出错')
    
    await require('../../models/Code').deleteMany({e_mail})
    return res.send({message:"验证码正确"})

})
```