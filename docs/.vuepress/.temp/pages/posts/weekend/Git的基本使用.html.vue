<template><div><h1 id="git的基本使用" tabindex="-1"><a class="header-anchor" href="#git的基本使用"><span>GIT的基本使用</span></a></h1>
<h2 id="基本使用" tabindex="-1"><a class="header-anchor" href="#基本使用"><span>基本使用</span></a></h2>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// 这个命令，会在“~/.gitconfig”中以如下形式输出设置文件。</span></span>
<span class="line">$ git config <span class="token operator">--</span>global user<span class="token punctuation">.</span>name <span class="token string">"Firstname Lastname"</span></span>
<span class="line">$ git config <span class="token operator">--</span>global user<span class="token punctuation">.</span>email <span class="token string">"your_email@example.com"</span></span>
<span class="line"><span class="token punctuation">[</span>user<span class="token punctuation">]</span></span>
<span class="line">  name <span class="token operator">=</span> Firstname Lastname</span>
<span class="line">  email <span class="token operator">=</span> your_email@example<span class="token punctuation">.</span>com</span>
<span class="line"></span>
<span class="line"><span class="token comment">// 将 color.ui 设置为 auto 可以让命令的输出拥有更高的可读性。</span></span>
<span class="line">git config <span class="token operator">--</span>global color<span class="token punctuation">.</span>ui auto</span>
<span class="line"><span class="token comment">// “~/.gitconfig”中就会增加下面一行。</span></span>
<span class="line"><span class="token punctuation">[</span>color<span class="token punctuation">]</span></span>
<span class="line">  ui <span class="token operator">=</span> auto</span>
<span class="line"></span>
<span class="line"><span class="token comment">//生成SSH后复制至GitHub同步</span></span>
<span class="line">git<span class="token operator">-</span>keygen <span class="token operator">-</span>t rsa <span class="token operator">-</span><span class="token constant">C</span></span>
<span class="line"><span class="token comment">// 1. git初始化 (必须初始化)</span></span>
<span class="line">git init</span>
<span class="line"><span class="token comment">// 2. 查看仓库状态</span></span>
<span class="line">git status</span>
<span class="line"><span class="token comment">// 3. 向暂存区添加文件</span></span>
<span class="line">git add</span>
<span class="line"><span class="token comment">// 4. 保存仓库的历史纪录 git commit -m "快速备注"。vim编辑器使用i进行输入，写详细备注时第一行是简要内容，第二行空行，第三行是详细内容。输入完成后按ESC输入:wq完成编辑</span></span>
<span class="line">git commit</span>
<span class="line"><span class="token comment">// 中止提交</span></span>
<span class="line">如果在编辑器启动后想中止提交，提交信息留空并直接关闭编辑器，随后提交就会被中止。</span>
<span class="line"><span class="token comment">// 修改上一条提交的信息</span></span>
<span class="line">git commit <span class="token operator">--</span>amend</span>
<span class="line"><span class="token comment">// 5. 查看提交日志 git log -p可查看文件的改动</span></span>
<span class="line">git log</span>
<span class="line"><span class="token comment">// 6. 查看当前暂存区与工作树的差别,git diff HEAD是最新差别</span></span>
<span class="line">git diff</span>
<span class="line"></span>
<span class="line"><span class="token comment">// 显示分支一览表  git branch -a可以查看当前仓库和远程仓库的分支信息</span></span>
<span class="line">git branch </span>
<span class="line"><span class="token comment">// 切换分支</span></span>
<span class="line">git checkout <span class="token operator">-</span>b 分支名</span>
<span class="line"><span class="token comment">// 合并分支</span></span>
<span class="line">git merge <span class="token operator">--</span>no<span class="token operator">-</span>ff 分支名</span>
<span class="line"><span class="token comment">// 以图标形式查看分支</span></span>
<span class="line">git log <span class="token operator">--</span>graph</span>
<span class="line"><span class="token comment">// 回溯历史版本</span></span>
<span class="line">git reset <span class="token operator">--</span>head 历史版本的哈希值</span>
<span class="line"><span class="token comment">// 查看当前仓库执行过的操作的日志</span></span>
<span class="line">git reflog</span>
<span class="line"></span>
<span class="line"><span class="token comment">// 添加远程仓库</span></span>
<span class="line">git remote add origin git@github<span class="token punctuation">.</span>com<span class="token operator">:</span>用户名称<span class="token operator">/</span>仓库名<span class="token punctuation">.</span>git</span>
<span class="line"><span class="token comment">// 推送至远程仓库 -u参数是设置为本地仓库的上游(upstream)</span></span>
<span class="line">git push <span class="token operator">-</span>u origin master</span>
<span class="line"><span class="token comment">// 获取远程仓库</span></span>
<span class="line">git clone git@github<span class="token punctuation">.</span>com<span class="token operator">:</span>用户名称<span class="token operator">/</span>仓库名<span class="token punctuation">.</span>git</span>
<span class="line"></span>
<span class="line"><span class="token comment">// 本地commit回退.回退到某次commit</span></span>
<span class="line">git reset <span class="token operator">--</span>hard commitID</span>
<span class="line"><span class="token comment">// 本地commit回退后，提交让远程仓库同步回退</span></span>
<span class="line">git push <span class="token operator">-</span>f origin main</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="gitnone语法" tabindex="-1"><a class="header-anchor" href="#gitnone语法"><span>gitnone语法</span></a></h2>
<p>以”#”号开头表示注释；
以斜杠“/”开头表示目录；
以星号“<em>”通配多个字符；
以问号“?”通配单个字符
以方括号“[]”包含单个字符的匹配列表；
以叹号“!”表示不忽略(跟踪)匹配到的文件或目录；
<em>.txt  ，</em>.xls  表示过滤某种类型的文件
target/ ：表示过滤这个文件夹下的所有文件
/test/a.txt ，/test/b.xls  表示指定过滤某个文件下具体文件
!</em>.java , !/dir/test/     !开头表示不过滤
*.[ab]    支持通配符：过滤所有以.a或者.b为扩展名的文件
/test  仅仅忽略项目根目录下的 test 文件，不包括 child/test等非根目录的test目录</p>
</div></template>


