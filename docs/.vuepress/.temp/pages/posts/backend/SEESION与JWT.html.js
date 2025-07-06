import comp from "C:/Users/Tom-Desktop-GIGABYTE/Documents/work space/Blog/docs/.vuepress/.temp/pages/posts/backend/SEESION与JWT.html.vue"
const data = JSON.parse("{\"path\":\"/posts/backend/SEESION%E4%B8%8EJWT.html\",\"title\":\"SEESION与JWT\",\"lang\":\"en-US\",\"frontmatter\":{\"date\":\"2025-06-16T00:00:00.000Z\",\"category\":[\"backend\"],\"tag\":[\"node\",\"backend\"]},\"headers\":[{\"level\":2,\"title\":\"Session\",\"slug\":\"session\",\"link\":\"#session\",\"children\":[{\"level\":3,\"title\":\"说明\",\"slug\":\"说明\",\"link\":\"#说明\",\"children\":[]},{\"level\":3,\"title\":\"使用方法\",\"slug\":\"使用方法\",\"link\":\"#使用方法\",\"children\":[]}]},{\"level\":2,\"title\":\"JWT\",\"slug\":\"jwt\",\"link\":\"#jwt\",\"children\":[{\"level\":3,\"title\":\"说明\",\"slug\":\"说明-1\",\"link\":\"#说明-1\",\"children\":[]},{\"level\":3,\"title\":\"使用方法\",\"slug\":\"使用方法-1\",\"link\":\"#使用方法-1\",\"children\":[]}]}],\"git\":{\"updatedTime\":1751795114000,\"contributors\":[{\"name\":\"Tom-Lee-CN\",\"username\":\"Tom-Lee-CN\",\"email\":\"tomweichat@qq.com\",\"commits\":2,\"url\":\"https://github.com/Tom-Lee-CN\"}],\"changelog\":[{\"hash\":\"3f2e749601bd7757724bc54b5f58ffaa265d06ff\",\"time\":1751795114000,\"email\":\"tomweichat@qq.com\",\"author\":\"Tom-Lee-CN\",\"message\":\"更新旧文章结构.\"},{\"hash\":\"e0b494e91703a4447a9723c1c58141b1fd0ff96a\",\"time\":1750089735000,\"email\":\"tomweichat@qq.com\",\"author\":\"Tom-Lee-CN\",\"message\":\"新增几个文档\"}]},\"filePathRelative\":\"posts/backend/SEESION与JWT.md\",\"excerpt\":\"\\n<h2>Session</h2>\\n<h3><strong>说明</strong></h3>\\n<p>session类似服务器端的cookie，保存于服务器端，类似于服务器缓存。用户登陆了总需要验证吧，那么就在session中验证即可，session和cookie是一一对应关系。</p>\\n<p>session的创建顺序</p>\\n<ol>\\n<li>\\n<p>生成全局唯一标识符（sessionid）；</p>\\n</li>\\n<li>\\n<p>开辟数据存储空间。一般会在内存中创建相应的数据结构，但这种情况下，系统一旦掉电，所有的会话数据就会丢失，如果是电子商务网站，这种事故会造成严重的后果。不过也可以写到文件里甚至存储在数据库中，这样虽然会增加I/O开销，但session可以实现某种程度的持久化，而且更有利于session的共享；</p>\\n</li>\\n<li>\\n<p>将session的全局唯一标示符发送给客户端。\\n问题的关键就在服务端如何发送这个session的唯一标识上。联系到HTTP协议，数据无非可以放到请求行、头域或Body里，基于此，一般来说会有两种常用的方式：cookie和URL重写。</p>\\n</li>\\n<li>\\n<p>Cookie是如何被设置的呢？是被服务器返回的请求设置的。</p>\\n</li>\\n<li>\\n<p>服务器会返回一个set-cookie的消息，通知浏览器要设置cookie了，于是浏览器会根据set-cookie里的字段来设置信息了.</p>\\n</li>\\n</ol>\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
