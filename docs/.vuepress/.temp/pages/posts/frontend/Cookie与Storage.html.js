import comp from "C:/Users/Tom-Desktop-GIGABYTE/Documents/work space/Blog/docs/.vuepress/.temp/pages/posts/frontend/Cookie与Storage.html.vue"
const data = JSON.parse("{\"path\":\"/posts/frontend/Cookie%E4%B8%8EStorage.html\",\"title\":\"Cookie与Storage\",\"lang\":\"en-US\",\"frontmatter\":{\"date\":\"2025-06-16T00:00:00.000Z\",\"category\":[\"frontend\"],\"tag\":[\"html\",\"javascript\",\"frontend\"]},\"headers\":[{\"level\":2,\"title\":\"Cookie\",\"slug\":\"cookie\",\"link\":\"#cookie\",\"children\":[{\"level\":3,\"title\":\"说明：\",\"slug\":\"说明\",\"link\":\"#说明\",\"children\":[]},{\"level\":3,\"title\":\"使用方法\",\"slug\":\"使用方法\",\"link\":\"#使用方法\",\"children\":[]},{\"level\":3,\"title\":\"在nodejs中获取cookie\",\"slug\":\"在nodejs中获取cookie\",\"link\":\"#在nodejs中获取cookie\",\"children\":[]}]},{\"level\":2,\"title\":\"storage\",\"slug\":\"storage\",\"link\":\"#storage\",\"children\":[{\"level\":3,\"title\":\"localstorage\",\"slug\":\"localstorage\",\"link\":\"#localstorage\",\"children\":[]},{\"level\":3,\"title\":\"sesstionStorage\",\"slug\":\"sesstionstorage\",\"link\":\"#sesstionstorage\",\"children\":[]}]}],\"git\":{\"updatedTime\":1751795114000,\"contributors\":[{\"name\":\"Tom-Lee-CN\",\"username\":\"Tom-Lee-CN\",\"email\":\"tomweichat@qq.com\",\"commits\":2,\"url\":\"https://github.com/Tom-Lee-CN\"}],\"changelog\":[{\"hash\":\"3f2e749601bd7757724bc54b5f58ffaa265d06ff\",\"time\":1751795114000,\"email\":\"tomweichat@qq.com\",\"author\":\"Tom-Lee-CN\",\"message\":\"更新旧文章结构.\"},{\"hash\":\"1730e27956d90197fafcf7fbab1a029731accc03\",\"time\":1750055232000,\"email\":\"tomweichat@qq.com\",\"author\":\"Tom-Lee-CN\",\"message\":\"更新 cookie and storage博客文档\"}]},\"filePathRelative\":\"posts/frontend/Cookie与Storage.md\",\"excerpt\":\"\\n<h2>Cookie</h2>\\n<h3><strong>说明</strong>：</h3>\\n<p>cookie由键值对字符串组成, 在设置Cookie时，可以指定以下属性：</p>\\n<p>对<code>document.cookie</code> 重新赋值即可新增该<code>Cookie</code>, 而不是替换掉整个<code>Cookies</code> 。</p>\\n<p>注意：如果需要替换某个<code>Cookie</code>, 必须保证<code>Domain</code>与<code>Path</code>一致。其中 Cookie 内容只能包括 Ascii 码字符，所以需要经过一层编码。</p>\"}")
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
