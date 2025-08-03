---
date: 2025-07-11
category:
  - frontend
tag:
  - node
  - frontend
  - session


---



# 前端必备技能：全面解析 Session 在 Web 开发中的应用

**目录**

[初识Session](https://blog.csdn.net/qq_53123067/article/details/143867803#t0)

[Session工作原理](https://blog.csdn.net/qq_53123067/article/details/143867803#t1)

[Session配置使用](https://blog.csdn.net/qq_53123067/article/details/143867803#t2)

------

#### 初识Session

​    **什么是Session**：是在[客户端](https://so.csdn.net/so/search?q=客户端&spm=1001.2101.3001.7020)和服务器之间维持用户状态的一种机制，由于HTTP协议本身是无状态的，每次请求都是独立的，服务器无法直接记住之前的请求状态，Session就是为了弥补这个问题让服务器能够在多个请求之间存储并识别用户的状态信息。

> 简单来说Session就是一个用于**跟踪用户会话的数据存储结构**：
>
> 1）**会话开始**：当用户首次访问网站时服务器会生成一个唯一的Session ID，并将其发送给客户端(通常通过浏览器的Cookie存储)，这标识着该用户的会话。
>
> ​    **解释**：Session ID是服务器用来识别、操作存储session值对象的，在服务器端Session的存储方式有文件方式、数据库方式、Session ID就是用来这边这个文件，也就是说识别数据库中的某一条记录，其会以类似cookie的方式返回给客户端
>
> 2）**会话维持**：在之后的每次请求中客户端会自动将Session ID发送给服务器，服务器通过这个ID查找到该用户的会话信息从而识别用户。
>
> 3）**会话结束**：当用户关闭浏览器或者Session到期，服务器会销毁该用户的会话数据。

了解HTTP协议的无状态性是进一步学习Session认证机制的必要前提，HTTP协议的无状态性指的是客户端的每次HTTP请求都是独立的，连续多个请求之间没用直接关系，服务器不会主动保存每次HTTP请求的状态·，如下所示：

![img](https://i-blog.csdnimg.cn/direct/0727f77846214b4eb009aea8764d0dad.png)

对于超市来说，为了方便收银员在进行结算时给VIP用户打折，超市可以为每个VIP用户发放会员卡，这种会员卡就是类似cookie的机制，如下所示：

![img](https://i-blog.csdnimg.cn/direct/9e6662517b464e3dbcc0bf87ecb8929e.png)

但是会存在一些人通过伪造会员卡来骗过超市收银员获取不正当利益，为了防止客户伪造会员卡，收银员在拿到客户出示的会员卡之后，可以在收银机上进行刷卡认证，只有收银机确认存在的会员卡才能被正常使用，这种会员卡+刷卡认证的设计理念就是**Session认证机制的精髓**：

![img](https://i-blog.csdnimg.cn/direct/da10342781b64f48907883aeb08ef4c6.png)

​    **Session的特点**：Session特点主要有以下这几个方面：

> 1）**状态保持**：即便HTTP协议本身是无状态的，Session使得用户的多次请求能够关联在一起。
>
> 2）**服务器端存储**：Session的数据通常存储在服务器端，不同于Cookie，Session中的数据不会直接暴露给用户。
>
> 3）**个性化设置**：Session可以用于存储用户的偏好设置，如主题颜色、语言等信息。

​    **Session与cookie的区别**：都是Web开发中用于保持客户端和服务器之间状态的技术，但它们的工作原理和使用场景有一些重要的区别，了解它们之间的关系有助于更好地管理用户状态：

|   区别   |                        Session                         |                      Cookie                      |
| :------: | :----------------------------------------------------: | :----------------------------------------------: |
| 存储位置 |                      存储服务器端                      |                 存储客户端浏览器                 |
| 存储方式 |    存储更多的数据（如用户的登录信息、购物车内容等）    |   存储少量的数据（如用户偏好设置、认证信息等）   |
| 生命周期 |             通常在用户关闭浏览器后就会过期             |             生命周期可以由开发者设置             |
| 安全性能 |    数据存储在服务器端，不容易被客户端直接访问和篡改    | 比Session更容易被窃取或篡改（例如通过 XSS 攻击） |
| 使用场景 | 适合存储较为敏感的信息，如用户的登录状态、购物车内容等 |      适合存储一些小型、轻量级、可公开的数据      |

​    **为什么需要Session和cookie**：主要源于web系统的发展和变迁：

> 1）web1.0：强调资源共享，http协议是一种无状态的协议
>
> 2）web2.0：强调资源交互，引入session和cookie机制记录状态，实现请求之间的依赖
>
> 3）web3.0：强调的是双赢

#### Session工作原理

​    Session是Web开发中用来保持客户端和服务器之间的状态的一种机制，它通常用于在用户与网站交互时，跨多个请求保持用户的信息，比如登录状态、购物车内容等，以下是 Session 的工作原理简述：

> 1）**客户端发起请求**：当用户首次访问一个网站时，客户端向服务器发送一个请求。
>
> 2）**服务器生成Session ID**：服务器接收到请求后会生成一个唯一的Session ID(会话标识符)，这个Session ID是用来唯一标识该用户会话的通常是一个随机的字符串。
>
> 3）**服务器发送Session ID到客户端**：服务器通过HTTP响应将Session ID发送给客户端，通常是通过Cookie来传递这个Session ID。
>
> 4）**客户端保存Session ID**：客户端浏览器收到服务器发送的Cookie 后，会将Session ID存储在本地，之后客户端在每一次向该服务器发送请求时，都会携带这个SessionID。
>
> 5）**后续请求携带Session ID**：当客户端发起后续请求时浏览器会自动将存储的Session ID通过Cookie附带到HTTP请求头中(例如：Cookie: JSESSIONID=123456)。
>
> 6）**服务器根据Session ID查找会话数据**：服务器接收到客户端请求后会从请求中读取Session ID，并用这个ID查找服务器端存储的会话数据。
>
> 7）**服务器更新Session数据**：服务器根据需要更新用户的Session数据(例如：更新用户登录状态、购物车内容等)。
>
> 8）**会话结束或超时**：如果用户关闭浏览器或者会话超时，Session会被销毁。

![img](https://i-blog.csdnimg.cn/direct/a164c73cb6e14f97b3c90dad5305177b.png)

#### Session配置使用

接下来我们开始讲解如何使用Session进行身份认证，这里我们使用Node中的Express框架，来实现如何在项目当中进行身份认证，终端执行如下命令进行安装操作Session的中间件：

```coffeescript
npm install express-session
AI写代码
```

express-session中间件安装完成之后，需要通过app.use()来注册session中间件，代码如下：

```javascript
// 1. 导入session中间件



const session = require('express-session');



 



// 2. 配置session中间件



app.use(session({



    secret: 'keyboard cat', // 加密字符串



    resave: false, // 即使session没有改变，依然保存



    saveUninitialized: true, // 即使session没有初始化，依然保存



}))
AI写代码javascript
运行
```

当express-session中间件配置成功后，即可通过req.session来访问和使用session对象，从而存储用户的关键信息，如下所示：

```javascript
app.post('/api/login', (req, res) => {



    // 判断用户提交的登录信息是否正确



    if (req.body.username !== 'admin' && req.body.password !== '123456') {



        return res.send({ status: 1, msg: '用户名或密码错误' })



    }



    res.session.user = req.body; // 保存用户信息到session中



    res.session.isLogin = true; // 标记用户已经登录



    res.send({ status: 0, msg: '登录成功' })



})
AI写代码javascript
运行
```

我们也可以直接从req.session对象中获取之前存储的数据，如下所示：

```javascript
// 获取用户姓名接口



app.get('/api/username', (req, res) => {



    // 判断用户是否登录



    if (!req.session.isLogin) {



        return res.send({ status: 1, msg: '用户未登录' })



    }



    res.send({ status: 0, msg: 'success', data: req.session.user.username })



})
AI写代码javascript
运行
```

调用req.session.destory()函数即可清空服务器保存的session信息，如下所示：

```javascript
// 退出登录接口



app.post('/api/logout', (req, res) => {



    req.session.destroy(); // 销毁session信息



    res.send({ status: 0, msg: '退出登录成功' })



})
```

