export const typesMap = JSON.parse("{\"article\":{\"/\":{\"path\":\"/article/\",\"indexes\":[10,0,21,17,5,20,9,8,18,16,15,14,13,12,11,7,6,4,3,2,19]}},\"timeline\":{\"/\":{\"path\":\"/timeline/\",\"indexes\":[17,5,20,9,8,18,16,15,14,13,12,11,7,6,4,3,2,19,0,10,1]}}}");

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
  });

