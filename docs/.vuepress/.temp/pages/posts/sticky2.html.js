import comp from "D:/工作空间/1.项目/my-blog/vuepress-starter/docs/.vuepress/.temp/pages/posts/sticky2.html.vue"
const data = JSON.parse("{\"path\":\"/posts/sticky2.html\",\"title\":\"Sticky Article with Higher Priority\",\"lang\":\"en-US\",\"frontmatter\":{\"date\":\"2020-01-01T00:00:00.000Z\",\"category\":[\"backend\"],\"tag\":[\"tag E\"],\"sticky\":10},\"headers\":[{\"level\":2,\"title\":\"Heading 2\",\"slug\":\"heading-2\",\"link\":\"#heading-2\",\"children\":[{\"level\":3,\"title\":\"Heading 3\",\"slug\":\"heading-3\",\"link\":\"#heading-3\",\"children\":[]}]}],\"git\":{\"updatedTime\":1750051104000,\"contributors\":[{\"name\":\"Tom-Lee-CN\",\"username\":\"Tom-Lee-CN\",\"email\":\"tomweichat@qq.com\",\"commits\":1,\"url\":\"https://github.com/Tom-Lee-CN\"}],\"changelog\":[{\"hash\":\"89123e6313acd31abf15af0bfd3e6c364f08b180\",\"time\":1750051104000,\"email\":\"tomweichat@qq.com\",\"author\":\"Tom-Lee-CN\",\"message\":\"first commit\"}]},\"filePathRelative\":\"posts/sticky2.md\",\"excerpt\":\"\\n<p>Excerpt information which is added manually.</p>\\n\"}")
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
