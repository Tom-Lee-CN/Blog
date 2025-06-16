---
date: 2025-06-16
category:
  - frontend
tag:
  - node
  - backend

---

# seesion and jwt

## Session

### **说明**

session类似服务器端的cookie，保存于服务器端，类似于服务器缓存。用户登陆了总需要验证吧，那么就在session中验证即可，session和cookie是一一对应关系。

session的创建顺序

1. 生成全局唯一标识符（sessionid）；
2. 开辟数据存储空间。一般会在内存中创建相应的数据结构，但这种情况下，系统一旦掉电，所有的会话数据就会丢失，如果是电子商务网站，这种事故会造成严重的后果。不过也可以写到文件里甚至存储在数据库中，这样虽然会增加I/O开销，但session可以实现某种程度的持久化，而且更有利于session的共享；
3. 将session的全局唯一标示符发送给客户端。
   问题的关键就在服务端如何发送这个session的唯一标识上。联系到HTTP协议，数据无非可以放到请求行、头域或Body里，基于此，一般来说会有两种常用的方式：cookie和URL重写。

4. Cookie是如何被设置的呢？是被服务器返回的请求设置的。

5. 服务器会返回一个set-cookie的消息，通知浏览器要设置cookie了，于是浏览器会根据set-cookie里的字段来设置信息了.

### 使用方法

我们以client-session（express-session基本完全一样）为例，为项目配置session

当前端发送的账户密码和后端匹配后通过req.session方法生成新的session对象，sessionID此时就在req.sessionID中，再将该sessionID发送至浏览器的cookie中保存，每次发送请求就携带该sessionID。

```js
// 安装模块
const session = require('client-sessions');
// 配置session。
// 1）secret：一个随机字符串，因为客户端的数据都是不安全的，所以需要进行加密
// 2) duration：session的过期时间，过期了就必须重新设置
// 3) activeDuration: 激活时间，比如设置为30分钟，那么只要30分钟内用户有服务器的交互，那么就会被重新激活。
app.use(session({
  cookieName: 'session',
  secret: 'random_string_goes_here',
  duration: 30 * 60 * 1000,
  activeDuration: 5 * 60 * 1000,
}));
//当express-session中间件配置成功后，即可通过req.session来访问和使用session对象，从而存储用户的关键信息，如下所示：
app.post('/api/login', (req, res) => {
    // 判断用户提交的登录信息是否正确
    if (req.body.username !== 'admin' && req.body.password !== '123456') {
        return res.send({ status: 1, msg: '用户名或密码错误' })
    }
    req.session = req.body; // 保存用户信息到session中
    req.session.isLogin = true; // 标记用户已经登录
    res.send({ status: 0, msg: '登录成功' })
})

//我们也可以直接从req.session对象中获取之前存储的数据，如下所示：
// 获取用户姓名接口
app.get('/api/username', (req, res) => {
    // 判断用户是否登录
    if (!req.session.isLogin) {
        return res.send({ status: 1, msg: '用户未登录' })
    }
    res.send({ status: 0, msg: 'success', data: req.session.user.username })
})

------------------------------------------------------------------------------------
// 如果用户逻辑在没有登陆时必须登陆，那我们可以继续加一个路由
function requireLogin (req, res, next) {
  if (!req.user) {
    res.redirect('/login');
  } else {
    next();
  }
};
app.get('/dashboard', requireLogin, function(req, res) {
  res.render('dashboard.jade');
});
------------------------------------------------------------------------------------
// Session层中间件,此后所有请求都将检查或生成session
app.use(session({
    name: 'sessionCookie',
    secret: 'session code', // 加密字符串
    resave: true,  // 即使session没有改变，依然保存
    saveUninitialized: true, // 即使session没有初始化，依然保存
    cookie: {
        maxAge: oneDay,
        HttpOnly: true
    }
}))

// 安全性 我们可以在登出时重置session
app.get('/logout', function(req, res) {
  req.session.reset();
  res.redirect('/');
});
// 退出登录接口
app.post('/api/logout', (req, res) => {
    req.session.destroy(); // 销毁session信息
    res.send({ status: 0, msg: '退出登录成功' })
})
// 其他
// 还可以加一些安全性
// httpOnly：用来保证cookie只能通过http访问，而不能用js来读取
// secure：强制使用https
// ephemeral：关闭浏览器时同时关闭cookie
```

 [前端数据存储全解析：localStorage、sessionStorage 与 Cookie_localstorage和sessionstorage和cookie-CSDN博客.mhtml](文档数据\HTML\前端数据存储全解析：localStorage、sessionStorage 与 Cookie_localstorage和sessionstorage和cookie-CSDN博客.mhtml) 

 [前端必备技能：全面解析 Session 在 Web 开发中的应用_前端session-CSDN博客.mhtml](文档数据\HTML\前端必备技能：全面解析 Session 在 Web 开发中的应用_前端session-CSDN博客.mhtml) 



## JWT



### 说明

JSON Web Token (JWT)是一种开放标准，使用数字签名安全传输信息。JWT常用场景：授权（Authorization）和信息交换（Information Exchange）。授权是最常用JWT的场景。

JWT就是一个由‘.’分隔的字符串，这个字符串包含三个部分：**Header、Payload、Signature**。因此JWT的形式就是**xxxxx.yyyyy.zzzzz**。

### 使用方法

1.在express项目中安装jsonwebtoken依赖

```js
// 1.在express项目中安装jsonwebtoken依赖
npm i jsonwebtoken --save
```

2.新建authorization.js

```js
// 2.新建authorization.js
const jwt = require("jsonwebtoken");

const secretKey = "secretKey";

// 生成token
module.exports.generateToken = function (payload) { 
  const token =
    "Bearer " +
    jwt.sign(payload, secretKey, {
      expiresIn: 60 * 60,
    });
  return token;
};

// 验证token
module.exports.verifyToken = function (req, res, next) {
  const token = req.headers.authorization.split(" ")[1];
  jwt.verify(token, secretKey, function (err, decoded) {
    if (err) {
      console.log("verify error", err);
      return res.json({ code: "404", msg: "token无效" });
    }
    console.log("verify decoded", decoded);
    next();
  });
};
```

**注意：生成 token 时加了前缀'Bearer '，验证时要把'Bearer '去掉， req.headers.authorization.split(" ")[1]，不然会出现JsonWebTokenError: invalid token的错误，验证失败**.

3.登录接口生成token返回给前端

```js
// 3.登录接口生成token返回给前端
// login.js
const express = require("express");
const router = express.Router();
const { generateToken } = require("./authorization");

// 路由
router.post("/", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const token = generateToken({ username: username });
  res.json({
    code: 200,
    msg: "登录成功",
    data: { token },
  });
});

module.exports = router;
```

4.在app.js中注册中间件

```js
// 4.在app.js中注册中间件
const loginRouter = require("./login");
const auth = require("./authorization");
const userRouter = require("./user");

app.use("/api/login", loginRouter);
app.use("/api/*", auth.verifyToken); // 注册token验证中间件
app.use("/api/user", userRouter);
```

**注意：验证token的中间件要放在login路由之后，其他需要验证的路由之前**

 [JSON Web Token 入门教程 - 阮一峰的网络日志.mhtml](文档数据\HTML\JSON Web Token 入门教程 - 阮一峰的网络日志.mhtml) 



















