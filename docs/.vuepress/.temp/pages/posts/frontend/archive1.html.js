import comp from "D:/工作空间/1.项目/vuepress-starter/docs/.vuepress/.temp/pages/posts/frontend/archive1.html.vue"
const data = JSON.parse("{\"path\":\"/posts/frontend/archive1.html\",\"title\":\"Archive Article1\",\"lang\":\"en-US\",\"frontmatter\":{\"date\":\"1998-01-01T00:00:00.000Z\",\"category\":[\"frontend\"],\"tag\":[\"WWI\"],\"archive\":true},\"headers\":[{\"level\":2,\"title\":\"Heading 2\",\"slug\":\"heading-2\",\"link\":\"#heading-2\",\"children\":[{\"level\":3,\"title\":\"Heading 3\",\"slug\":\"heading-3\",\"link\":\"#heading-3\",\"children\":[]}]}],\"git\":{\"updatedTime\":1750054445000,\"contributors\":[{\"name\":\"Tom-Lee-CN\",\"username\":\"Tom-Lee-CN\",\"email\":\"tomweichat@qq.com\",\"commits\":2,\"url\":\"https://github.com/Tom-Lee-CN\"}],\"changelog\":[{\"hash\":\"38d9d870d0592bc0a14b6c04cd92e6307acdb0e7\",\"time\":1750054445000,\"email\":\"tomweichat@qq.com\",\"author\":\"Tom-Lee-CN\",\"message\":\"test tag\"},{\"hash\":\"89123e6313acd31abf15af0bfd3e6c364f08b180\",\"time\":1750051104000,\"email\":\"tomweichat@qq.com\",\"author\":\"Tom-Lee-CN\",\"message\":\"first commit\"}]},\"filePathRelative\":\"posts/frontend/archive1.md\",\"excerpt\":\"\\n<h2>Heading 2</h2>\\n<p>Here is the content.</p>\\n<h3>Heading 3</h3>\\n<p>Here is the content.aaa</p>\\n\"}")
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
