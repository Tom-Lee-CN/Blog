---
date: 2025-06-16
category:
  - weekend
tag:
  - node
  - backend
---

# Cookie的跨域传输

## 问题描述

1.后端已设置允许跨域，使用Express传递携带session的cookie给前端，在响应体的`set-cookie` 里面有值，但前端没有存储cookie同时在Application中并没有存储cookie值。

2.原因是前端没有设置允许跨域传递cookie，给`xhr`的属性`withCredentials`赋值为true即可。





### 解决方法





1.后端允许跨域

```js
app.use((req, res, next)=>{
    // 设置允许跨域的域名
    res.set('Access-Control-Allow-Origin', req.headers.origin);
	res.set('Access-Control-Allow-Methods', '*');
	res.set('Access-Control-Allow-headers', '*');
	res.set('Access-Control-Allow-Max-age', '*');
    // 允许跨域传递cookie
	res.set('Access-Control-Allow-Credentials', true);
    next();
})

```

2.前端请求允许携带cookie

```js
const xhr = new XMLHttpRequest;
xhr.open('GET', `http://127.0.0.1:80`)
// 允许携带cookie
xhr.withCredentials = true;
xhr.onload = () => {
	f (xhr.status == 200) {
        console.log(xhr.responseText)
   } else {
       console.log("请求失败!")
   }
}
xhr.send()
```

## 注意

1. 跨域传递cookie 前后端的域名和协议需要一致，端口号不用一致。

2. 设置跨域传递cookie后，POST请求传递的数据格式只能是以下方式

```
application/x-www-form-urlencoded
multipart/form-data
text/plain
```

