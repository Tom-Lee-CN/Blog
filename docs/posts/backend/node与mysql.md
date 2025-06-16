---
date: 2025-06-16
category:
  - backend
tag:
  - node
  - backend
---

# node and mysql

## mysql

```JS
const mysql = require('mysql')
const mysqlCnn = mysql.createConnection({
    user: "admin",
    password: "Mm2332868127.",
    host: "localhost",
    database: "bilibili"
})

mysqlCnn.connect(err=>{
    if(err){
        console.warn(`连接mysql数据库失败！错误原因为: ${err}`)
    }else{
        console.log("连接mysql服务器成功！")
    }
    
})

// // 增
// mysqlCnn.query("INSERT INTO user (user_id, account, password) VALUES (223456, 'Tom3323', '12345678')", (err, result)=>{
//     if(err){
//         console.log(`数据更新出错！错误信息为： ${err}`)
//     }
// })
// // 删
// mysqlCnn.query("DELETE FROM user WHERE user_id = 11111", err=>{
//     if(err){
//         console.log(`数据更新出错！错误信息为： ${err}`)
//     }
// })
// // 改
// mysqlCnn.query("UPDATE user SET account = 'jerry', password = '333333' WHERE user_id = 11111 ", (err, result)=>{
//     if(err){
//         console.log(`数据更新出错！错误信息为： ${err}`)
//     }
// })
// // 查
// mysqlCnn.query(SELECT * FROM user WHERE account='tomweichat@qq.com' and password='12345678' , (err, result)=>{
//     if(err){
//         console.log(`数据更新出错！错误信息为： ${err}`)
//     }
// })
// 断开连接
mysqlCnn.release()
module.exports = mysqlCnn
```