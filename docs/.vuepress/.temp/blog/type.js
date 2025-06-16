export const typesMap = JSON.parse("{\"article\":{\"/\":{\"path\":\"/article/\",\"indexes\":[14,0,12,7,8,9,1,2,3,16,4,5,6,15,10]}},\"timeline\":{\"/\":{\"path\":\"/timeline/\",\"indexes\":[12,7,8,9,1,2,3,16,4,5,6,15,10,0,14,11,13]}}}");

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
  });

