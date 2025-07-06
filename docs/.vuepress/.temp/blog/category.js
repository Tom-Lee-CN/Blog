export const categoriesMap = JSON.parse("{\"category\":{\"/\":{\"path\":\"/category/\",\"map\":{\"frontend\":{\"path\":\"/category/frontend/\",\"indexes\":[0,1,2,3,4,5,6,7,8]},\"backend\":{\"path\":\"/category/backend/\",\"indexes\":[9,10,11,12,13,14,15,16,17,18]},\"weekend\":{\"path\":\"/category/weekend/\",\"indexes\":[19,20]}}}},\"tag\":{\"/\":{\"path\":\"/tag/\",\"map\":{\"node\":{\"path\":\"/tag/node/\",\"indexes\":[4,11,12,13,14,15,16,17,18,8]},\"backend\":{\"path\":\"/tag/backend/\",\"indexes\":[4,5,11,12,13,14,15,16,17,18,8]},\"html\":{\"path\":\"/tag/html/\",\"indexes\":[6,7]},\"javascript\":{\"path\":\"/tag/javascript/\",\"indexes\":[2,3,5,7]},\"frontend\":{\"path\":\"/tag/frontend/\",\"indexes\":[2,3,5,7]},\"css\":{\"path\":\"/tag/css/\",\"indexes\":[6]},\"common sense\":{\"path\":\"/tag/common-sense/\",\"indexes\":[9,5]},\"nodejs\":{\"path\":\"/tag/nodejs/\",\"indexes\":[5]},\"http\":{\"path\":\"/tag/http/\",\"indexes\":[2,3]},\"WWII\":{\"path\":\"/tag/wwii/\",\"indexes\":[1]},\"Game\":{\"path\":\"/tag/game/\",\"indexes\":[20]},\"Game option\":{\"path\":\"/tag/game-option/\",\"indexes\":[20]},\"GIT\":{\"path\":\"/tag/git/\",\"indexes\":[19]},\"tag E\":{\"path\":\"/tag/tag-e/\",\"indexes\":[10,0]}}}}}");

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogCategory)
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoriesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ categoriesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoriesMap);
  });

