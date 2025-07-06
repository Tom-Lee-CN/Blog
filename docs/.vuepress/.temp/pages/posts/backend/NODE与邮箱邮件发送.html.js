import comp from "C:/Users/Tom-Desktop-GIGABYTE/Documents/work space/Blog/docs/.vuepress/.temp/pages/posts/backend/NODE与邮箱邮件发送.html.vue"
const data = JSON.parse("{\"path\":\"/posts/backend/NODE%E4%B8%8E%E9%82%AE%E7%AE%B1%E9%82%AE%E4%BB%B6%E5%8F%91%E9%80%81.html\",\"title\":\"NODE与邮箱邮件发送\",\"lang\":\"en-US\",\"frontmatter\":{\"date\":\"2025-06-16T00:00:00.000Z\",\"category\":[\"backend\"],\"tag\":[\"node\",\"backend\"]},\"headers\":[{\"level\":3,\"title\":\"NODE与邮箱邮件发送\",\"slug\":\"node与邮箱邮件发送-1\",\"link\":\"#node与邮箱邮件发送-1\",\"children\":[]}],\"git\":{\"updatedTime\":1751795114000,\"contributors\":[{\"name\":\"Tom-Lee-CN\",\"username\":\"Tom-Lee-CN\",\"email\":\"tomweichat@qq.com\",\"commits\":2,\"url\":\"https://github.com/Tom-Lee-CN\"}],\"changelog\":[{\"hash\":\"3f2e749601bd7757724bc54b5f58ffaa265d06ff\",\"time\":1751795114000,\"email\":\"tomweichat@qq.com\",\"author\":\"Tom-Lee-CN\",\"message\":\"更新旧文章结构.\"},{\"hash\":\"e0b494e91703a4447a9723c1c58141b1fd0ff96a\",\"time\":1750089735000,\"email\":\"tomweichat@qq.com\",\"author\":\"Tom-Lee-CN\",\"message\":\"新增几个文档\"}]},\"filePathRelative\":\"posts/backend/NODE与邮箱邮件发送.md\",\"excerpt\":\"\\n<h3>NODE与邮箱邮件发送</h3>\\n<p>邮箱验证码思路</p>\\n<p>验证码发送阶段</p>\\n<p>客户端上传邮箱地址到服务端，服务端通过生成随机验证码，并将这个验证码发送到用户上传的这个邮箱中。此时服务端需要将这个邮箱和验证码保存到数据库的某张表中（后文中使用Code来称呼这个表），同时保证这条记录的唯一性。并在有效时间内将这条记录删除（此时间就是验证码的有效时间）</p>\\n<p>验证码验证阶段</p>\\n<p>客户端将收到的验证码和邮箱重新发送到服务端，服务端开始验证：</p>\\n<p>是否能够从Code中查询到这条验证码和邮箱与客户端发送一致的记录\\n是：验证通过，并删除这条记录\\n否：验证不通过\\n验证码发送阶段\\n————————————————</p>\"}")
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
