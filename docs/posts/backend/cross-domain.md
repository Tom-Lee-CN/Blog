# cross-domain

```js
// 设置后端响应头
// 设定运行访问的源(域，协议，端口)
response.setHeader('Access-Control-Allow-Origin', '*');
// 设定运行访问的方法
response.setHeader('Access-Control-Allow-Methods', '*');
// 设定运行访问的自定义请求头
response.setHeader('Access-Control-Allow-headers', '*');
// 是否允许携带身份凭证
response.setHeader('Access-Control-Allow-Credentials', '*');
// 指定预检请求的缓存时间
response.setHeader('Access-Control-Allow-Max-age', '*');
```

