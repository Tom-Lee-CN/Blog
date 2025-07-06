---
date: 2025-06-16
category:
  - backend
tag:
  - node
  - backend
---

# NODE原生HTTP

### 创建基本的Node服务器并接收http请求(原生)

```javascript
const port = 3000;
const hostName = '127.0.0.1';
const http = require('http')
const fs = require('fs')
const url = require('url');
const server = http.createServer((req, res)=>{
    // 接收POST请求
    let data = ""
    if (req.method === 'POST') {
        const { query, pathname } = url.parse(req.url, true);
        if (pathname == "/post/userInfo") {
            req.on('data', chunk => {
                // 拼接数据
                data += (chunk);
            })
            req.on('end', () => {
                data = JSON.parse(data)
                console.log(data)
            })
        }
    }
}.listen(port, hostName, () => {
    console.log(`服务器已启动：${hostName}:${port}`)
})
// 接收GET请求
server.on('request', (requset, response) => {
    const { query, pathname } = url.parse(requset.url, true);
    // 这里使用JSON.stringify(query)和JSON.parse(data)进行转换为对象 防止出现 [Object: null prototype] 的警告
    let data = JSON.stringify(query);
    data = JSON.parse(data);
    response.writeHead(200, { 'Content-type': 'text/plain' });
    response.end('服务器已接收GET请求')
})
```