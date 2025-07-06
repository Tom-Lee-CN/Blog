import comp from "C:/Users/Tom-Desktop-GIGABYTE/Documents/work space/Blog/docs/.vuepress/.temp/pages/posts/backend/NODE中使用UUID.html.vue"
const data = JSON.parse("{\"path\":\"/posts/backend/NODE%E4%B8%AD%E4%BD%BF%E7%94%A8UUID.html\",\"title\":\"NODE中使用UUID\",\"lang\":\"en-US\",\"frontmatter\":{\"date\":\"2025-06-16T00:00:00.000Z\",\"category\":[\"backend\"],\"tag\":[\"node\",\"backend\"]},\"headers\":[],\"git\":{\"updatedTime\":1751795114000,\"contributors\":[{\"name\":\"Tom-Lee-CN\",\"username\":\"Tom-Lee-CN\",\"email\":\"tomweichat@qq.com\",\"commits\":2,\"url\":\"https://github.com/Tom-Lee-CN\"}],\"changelog\":[{\"hash\":\"3f2e749601bd7757724bc54b5f58ffaa265d06ff\",\"time\":1751795114000,\"email\":\"tomweichat@qq.com\",\"author\":\"Tom-Lee-CN\",\"message\":\"更新旧文章结构.\"},{\"hash\":\"e0b494e91703a4447a9723c1c58141b1fd0ff96a\",\"time\":1750089735000,\"email\":\"tomweichat@qq.com\",\"author\":\"Tom-Lee-CN\",\"message\":\"新增几个文档\"}]},\"filePathRelative\":\"posts/backend/NODE中使用UUID.md\",\"excerpt\":\"\\n<div class=\\\"language-javascript line-numbers-mode\\\" data-highlighter=\\\"prismjs\\\" data-ext=\\\"js\\\"><pre><code><span class=\\\"line\\\"><span class=\\\"token comment\\\">// 用于生成UUID</span></span>\\n<span class=\\\"line\\\"><span class=\\\"token keyword\\\">const</span> crypto <span class=\\\"token operator\\\">=</span> <span class=\\\"token function\\\">require</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token string\\\">'crypto'</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span></span>\\n<span class=\\\"line\\\"><span class=\\\"token comment\\\">// 生成UUID</span></span>\\n<span class=\\\"line\\\"><span class=\\\"token keyword\\\">const</span> uuid <span class=\\\"token operator\\\">=</span> crypto<span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">randomUUID</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span></span>\\n<span class=\\\"line\\\"></span></code></pre>\\n<div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\" style=\\\"counter-reset:line-number 0\\\"><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div></div></div>\"}")
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
