export const typesMap = JSON.parse("{\"article\":{\"/\":{\"path\":\"/article/\",\"indexes\":[13,1,8,9,10,2,3,4,15,5,6,7,14,11]}},\"timeline\":{\"/\":{\"path\":\"/timeline/\",\"indexes\":[8,9,10,2,3,4,15,5,6,7,14,11,1,13,12,0]}}}");

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
  });

