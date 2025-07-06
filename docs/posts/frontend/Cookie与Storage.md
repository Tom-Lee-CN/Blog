---
date: 2025-06-16
category:
  - frontend
tag:
  - html
  - javascript
  - frontend

---



# Cookie与Storage



## Cookie

### **说明**：

cookie由键值对字符串组成, 在设置Cookie时，可以指定以下属性：

对`document.cookie` 重新赋值即可新增该`Cookie`, 而不是替换掉整个`Cookies` 。

注意：如果需要替换某个`Cookie`, 必须保证`Domain`与`Path`一致。其中 Cookie 内容只能包括 Ascii 码字符，所以需要经过一层编码。

### **使用方法**

**expires**：过期时间，使用GMT格式的日期。

**path**：Cookie的路径，默认情况下属于当前页面。

**domain**：Cookie的域名，默认情况下属于设置Cookie的域。

**secure**：指定后，Cookie只有在使用SSL连接时才发送到服务器。

```js
// 设置cookie的方法，使用该方法是新增一条新的cookie而不是覆盖原有的cookie
document.cookie = "username=Tom;expires=Thu, 18 Dec 2043 12:00:00;GMT;path='www.baidu.com';"
// 读取cookie
let allCookie = document.cookie;
let username = getCookie("username")
// 删除或修改cookie,只需将其过期时间设置为过去的时间即可：
document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
```

### 在nodejs中获取cookie

```js
// 原生，需要手动分割以取出其中的有用值
req.headers.cookies
// express 安装cookie-parser用于解析cookie
npm install --save cookie-parser
const cookieParser = require("cookie-parser");

const app = express();
app.use(cookieParser());
let reqCookies = req.cookies
```







## storage

**说明**

- 数据存储在用户浏览器中，其实是保存在硬盘中
- 页面刷新不丢失数据
- sessionStorage和localStorage约 5M 左右

### localstorage

- 使用localStorage 可以将数据永久存储在本地电脑中, 除非手动删除，否则关闭页面也会存在。
- 可以多窗口（页面）共享（同一浏览器可以共享）
- 以键值对的形式存储使用 

使用方法

```js
// 设置和修改Storage  
localStorage.setItem(key, value)
// 获取Storage
localStorage.getItem(key)
// 删除Storage
localStorage.removeItem(key)
```

### sesstionStorage

- 生命周期为关闭浏览器窗口
- 在同一个窗口（页面）下数据可以共享
- 以键值对的形式存储使用
- 值存储的时候全部转换为字符串

使用方法

```js
// 设置和修改Storage  
sessionStorage.setItem(key, value)
// 获取Storage
sessionStorage.getItem(key)
// 删除Storage
sessionStorage.removeItem(key)
```

