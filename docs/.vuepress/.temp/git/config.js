import { GitContributors } from "C:/Users/Tom-Desktop-GIGABYTE/Documents/work space/Blog/node_modules/@vuepress/plugin-git/lib/client/components/GitContributors.js";
import { GitChangelog } from "C:/Users/Tom-Desktop-GIGABYTE/Documents/work space/Blog/node_modules/@vuepress/plugin-git/lib/client/components/GitChangelog.js";

export default {
  enhance: ({ app }) => {
    app.component("GitContributors", GitContributors);
    app.component("GitChangelog", GitChangelog);
  },
};
