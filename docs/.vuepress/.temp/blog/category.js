export const categoriesMap = JSON.parse("{\"category\":{\"/\":{\"path\":\"/category/\",\"map\":{\"frontend\":{\"path\":\"/category/frontend/\",\"indexes\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13]},\"backend\":{\"path\":\"/category/backend/\",\"indexes\":[14,15]},\"weekend\":{\"path\":\"/category/weekend/\",\"indexes\":[16]}}}},\"tag\":{\"/\":{\"path\":\"/tag/\",\"map\":{\"WWI\":{\"path\":\"/tag/wwi/\",\"indexes\":[13]},\"html\":{\"path\":\"/tag/html/\",\"indexes\":[12]},\"javascript\":{\"path\":\"/tag/javascript/\",\"indexes\":[12]},\"frontend\":{\"path\":\"/tag/frontend/\",\"indexes\":[12]},\"WWII\":{\"path\":\"/tag/wwii/\",\"indexes\":[11]},\"tag A\":{\"path\":\"/tag/tag-a/\",\"indexes\":[16,4,5,6,15,10]},\"tag B\":{\"path\":\"/tag/tag-b/\",\"indexes\":[16,4,5,6,15,10]},\"tag C\":{\"path\":\"/tag/tag-c/\",\"indexes\":[1,2,3,7,8,9]},\"tag D\":{\"path\":\"/tag/tag-d/\",\"indexes\":[1,2,3,7,8,9]},\"tag E\":{\"path\":\"/tag/tag-e/\",\"indexes\":[14,0]}}}}}");

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogCategory)
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoriesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ categoriesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoriesMap);
  });

