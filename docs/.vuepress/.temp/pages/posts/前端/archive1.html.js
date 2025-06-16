import comp from "D:/工作空间/1.项目/my-blog/vuepress-starter/docs/.vuepress/.temp/pages/posts/前端/archive1.html.vue"
const data = JSON.parse("{\"path\":\"/posts/%E5%89%8D%E7%AB%AF/archive1.html\",\"title\":\"Archive Article1\",\"lang\":\"en-US\",\"frontmatter\":{\"date\":\"1998-01-01T00:00:00.000Z\",\"category\":[\"frontend\"],\"tag\":[\"WWI\"],\"archive\":true},\"headers\":[{\"level\":2,\"title\":\"Heading 2\",\"slug\":\"heading-2\",\"link\":\"#heading-2\",\"children\":[{\"level\":3,\"title\":\"Heading 3\",\"slug\":\"heading-3\",\"link\":\"#heading-3\",\"children\":[]}]}],\"git\":{},\"filePathRelative\":\"posts/前端/archive1.md\",\"excerpt\":\"\\n<h2>Heading 2</h2>\\n<p>Here is the content.</p>\\n<h3>Heading 3</h3>\\n<p>Here is the content.aaa</p>\\n\"}")
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
