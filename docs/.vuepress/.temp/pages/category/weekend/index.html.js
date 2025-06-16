import comp from "D:/工作空间/1.项目/vuepress-starter/docs/.vuepress/.temp/pages/category/weekend/index.html.vue"
const data = JSON.parse("{\"path\":\"/category/weekend/\",\"title\":\"Category weekend\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Category weekend\",\"sidebar\":false,\"blog\":{\"type\":\"category\",\"name\":\"weekend\",\"key\":\"category\"},\"layout\":\"Category\"},\"headers\":[],\"git\":{},\"filePathRelative\":null,\"excerpt\":\"\"}")
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
