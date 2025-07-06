<template><div><h1 id="node与mysql" tabindex="-1"><a class="header-anchor" href="#node与mysql"><span>NODE与MYSQL</span></a></h1>
<h2 id="mysql" tabindex="-1"><a class="header-anchor" href="#mysql"><span>mysql</span></a></h2>
<div class="language-JS line-numbers-mode" data-highlighter="prismjs" data-ext="JS"><pre v-pre><code><span class="line">const mysql = require('mysql')</span>
<span class="line">const mysqlCnn = mysql.createConnection({</span>
<span class="line">    user: &quot;admin&quot;,</span>
<span class="line">    password: &quot;Mm2332868127.&quot;,</span>
<span class="line">    host: &quot;localhost&quot;,</span>
<span class="line">    database: &quot;bilibili&quot;</span>
<span class="line">})</span>
<span class="line"></span>
<span class="line">mysqlCnn.connect(err=&gt;{</span>
<span class="line">    if(err){</span>
<span class="line">        console.warn(`连接mysql数据库失败！错误原因为: ${err}`)</span>
<span class="line">    }else{</span>
<span class="line">        console.log(&quot;连接mysql服务器成功！&quot;)</span>
<span class="line">    }</span>
<span class="line">    </span>
<span class="line">})</span>
<span class="line"></span>
<span class="line">// // 增</span>
<span class="line">// mysqlCnn.query(&quot;INSERT INTO user (user_id, account, password) VALUES (223456, 'Tom3323', '12345678')&quot;, (err, result)=&gt;{</span>
<span class="line">//     if(err){</span>
<span class="line">//         console.log(`数据更新出错！错误信息为： ${err}`)</span>
<span class="line">//     }</span>
<span class="line">// })</span>
<span class="line">// // 删</span>
<span class="line">// mysqlCnn.query(&quot;DELETE FROM user WHERE user_id = 11111&quot;, err=&gt;{</span>
<span class="line">//     if(err){</span>
<span class="line">//         console.log(`数据更新出错！错误信息为： ${err}`)</span>
<span class="line">//     }</span>
<span class="line">// })</span>
<span class="line">// // 改</span>
<span class="line">// mysqlCnn.query(&quot;UPDATE user SET account = 'jerry', password = '333333' WHERE user_id = 11111 &quot;, (err, result)=&gt;{</span>
<span class="line">//     if(err){</span>
<span class="line">//         console.log(`数据更新出错！错误信息为： ${err}`)</span>
<span class="line">//     }</span>
<span class="line">// })</span>
<span class="line">// // 查</span>
<span class="line">// mysqlCnn.query(SELECT * FROM user WHERE account='tomweichat@qq.com' and password='12345678' , (err, result)=&gt;{</span>
<span class="line">//     if(err){</span>
<span class="line">//         console.log(`数据更新出错！错误信息为： ${err}`)</span>
<span class="line">//     }</span>
<span class="line">// })</span>
<span class="line">// 断开连接</span>
<span class="line">mysqlCnn.release()</span>
<span class="line">module.exports = mysqlCnn</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


