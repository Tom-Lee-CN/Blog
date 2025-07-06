import comp from "C:/Users/Tom-Desktop-GIGABYTE/Documents/work space/Blog/docs/.vuepress/.temp/pages/posts/frontend/JS基础_JS执行环境_作用域(上下文).html.vue"
const data = JSON.parse("{\"path\":\"/posts/frontend/JS%E5%9F%BA%E7%A1%80_JS%E6%89%A7%E8%A1%8C%E7%8E%AF%E5%A2%83_%E4%BD%9C%E7%94%A8%E5%9F%9F(%E4%B8%8A%E4%B8%8B%E6%96%87).html\",\"title\":\"JS执行环境+作用域(上下文)\",\"lang\":\"en-US\",\"frontmatter\":{\"date\":\"2025-07-06T00:00:00.000Z\",\"category\":[\"frontend\"],\"tag\":[\"frontend\",\"backend\",\"common sense\",\"javascript\",\"nodejs\"]},\"headers\":[{\"level\":2,\"title\":\"函数\",\"slug\":\"函数\",\"link\":\"#函数\",\"children\":[{\"level\":3,\"title\":\"执行环境\",\"slug\":\"执行环境\",\"link\":\"#执行环境\",\"children\":[]},{\"level\":3,\"title\":\"预处理\",\"slug\":\"预处理\",\"link\":\"#预处理\",\"children\":[]},{\"level\":3,\"title\":\"全局执行上下文对象\",\"slug\":\"全局执行上下文对象\",\"link\":\"#全局执行上下文对象\",\"children\":[]},{\"level\":3,\"title\":\"函数执行上下文对象\",\"slug\":\"函数执行上下文对象\",\"link\":\"#函数执行上下文对象\",\"children\":[]},{\"level\":3,\"title\":\"作用域\",\"slug\":\"作用域\",\"link\":\"#作用域\",\"children\":[]}]}],\"git\":{\"updatedTime\":1751795114000,\"contributors\":[{\"name\":\"Tom-Lee-CN\",\"username\":\"Tom-Lee-CN\",\"email\":\"tomweichat@qq.com\",\"commits\":1,\"url\":\"https://github.com/Tom-Lee-CN\"}],\"changelog\":[{\"hash\":\"3f2e749601bd7757724bc54b5f58ffaa265d06ff\",\"time\":1751795114000,\"email\":\"tomweichat@qq.com\",\"author\":\"Tom-Lee-CN\",\"message\":\"更新旧文章结构.\"}]},\"filePathRelative\":\"posts/frontend/JS基础_JS执行环境+作用域(上下文).md\",\"excerpt\":\"\\n<h2>函数</h2>\\n<h3>执行环境</h3>\\n<ul>\\n<li>执行环境(执行上下文)是<code>JS</code>中非常重要的一个概念。</li>\\n<li>每个执行环境都有一个与之关联的<strong>虚拟对象</strong>(执行上下文对象)</li>\\n<li>执行环境中定义的所有<strong>变量</strong>和<strong>函数</strong>都保存在这个<strong>执行上下文对象</strong>中，供解析器在处理数据时使用。</li>\\n</ul>\\n<h3>预处理</h3>\\n<ul>\\n<li>将变量和函数作为执行上下文对象的属性放到这个对象上的这个过程，被称为<code>预处理</code></li>\\n<li>预处理发生在代码将要执行之前</li>\\n<li>虽然<code>JS</code>是解释执行的语言，但是在解释执行之前，还是有个<strong>预处理</strong>的过程</li>\\n<li>为代码的执行做准备，提前检查出代码中的错误</li>\\n<li>算是做了一个通篇扫描的过程</li>\\n<li>这也是之前讲过的变量的声明提升和函数提升的原因</li>\\n</ul>\"}")
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
