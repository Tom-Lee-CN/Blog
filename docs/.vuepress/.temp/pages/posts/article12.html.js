import comp from "D:/工作空间/1.项目/my-blog/vuepress-starter/docs/.vuepress/.temp/pages/posts/article12.html.vue"
const data = JSON.parse("{\"path\":\"/posts/article12.html\",\"title\":\"Article 12\",\"lang\":\"en-US\",\"frontmatter\":{\"date\":\"2022-01-12T00:00:00.000Z\",\"category\":[\"frontend\"],\"tag\":[\"tag C\",\"tag D\"]},\"headers\":[{\"level\":2,\"title\":\"Heading 2\",\"slug\":\"heading-2\",\"link\":\"#heading-2\",\"children\":[{\"level\":3,\"title\":\"Heading 3\",\"slug\":\"heading-3\",\"link\":\"#heading-3\",\"children\":[]}]}],\"git\":{\"updatedTime\":1750051104000,\"contributors\":[{\"name\":\"Tom-Lee-CN\",\"username\":\"Tom-Lee-CN\",\"email\":\"tomweichat@qq.com\",\"commits\":1,\"url\":\"https://github.com/Tom-Lee-CN\"}],\"changelog\":[{\"hash\":\"89123e6313acd31abf15af0bfd3e6c364f08b180\",\"time\":1750051104000,\"email\":\"tomweichat@qq.com\",\"author\":\"Tom-Lee-CN\",\"message\":\"first commit\"}]},\"filePathRelative\":\"posts/article12.md\",\"excerpt\":\"\\n<h2>Heading 2</h2>\\n<p>Here is the content.</p>\\n<h3>Heading 3</h3>\\n<p>Here is the content.</p>\\n\"}")
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
