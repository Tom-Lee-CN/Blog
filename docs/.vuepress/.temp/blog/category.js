export const categoriesMap = JSON.parse("{\"category\":{\"/\":{\"path\":\"/category/\",\"map\":{\"frontend\":{\"path\":\"/category/frontend/\",\"indexes\":[0,1,2,3,4,5,6,7,8,9,10,11,12]},\"backend\":{\"path\":\"/category/backend/\",\"indexes\":[13,14]},\"weekend\":{\"path\":\"/category/weekend/\",\"indexes\":[15]}}}},\"tag\":{\"/\":{\"path\":\"/tag/\",\"map\":{\"WWII\":{\"path\":\"/tag/wwii/\",\"indexes\":[12]},\"tag A\":{\"path\":\"/tag/tag-a/\",\"indexes\":[15,5,6,7,14,11]},\"tag B\":{\"path\":\"/tag/tag-b/\",\"indexes\":[15,5,6,7,14,11]},\"tag C\":{\"path\":\"/tag/tag-c/\",\"indexes\":[2,3,4,8,9,10]},\"tag D\":{\"path\":\"/tag/tag-d/\",\"indexes\":[2,3,4,8,9,10]},\"tag E\":{\"path\":\"/tag/tag-e/\",\"indexes\":[13,1]},\"WWI\":{\"path\":\"/tag/wwi/\",\"indexes\":[0]}}}}}");

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogCategory)
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoriesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ categoriesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoriesMap);
  });

