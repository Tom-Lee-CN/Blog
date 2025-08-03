---
date: 2025-06-16
category:
  - weekend
tag:
  - GIT

---



# GIT的基本使用

## 基本使用

```js
// 这个命令，会在“~/.gitconfig”中以如下形式输出设置文件。
$ git config --global user.name "Firstname Lastname"
$ git config --global user.email "your_email@example.com"
[user]
  name = Firstname Lastname
  email = your_email@example.com

// 将 color.ui 设置为 auto 可以让命令的输出拥有更高的可读性。
git config --global color.ui auto
// “~/.gitconfig”中就会增加下面一行。
[color]
  ui = auto

//生成SSH后复制至GitHub同步
git-keygen -t rsa -C
// 1. git初始化 (必须初始化)
git init
// 2. 查看仓库状态
git status
// 3. 向暂存区添加文件
git add
// 4. 保存仓库的历史纪录 git commit -m "快速备注"。vim编辑器使用i进行输入，写详细备注时第一行是简要内容，第二行空行，第三行是详细内容。输入完成后按ESC输入:wq完成编辑
git commit
// 中止提交
如果在编辑器启动后想中止提交，提交信息留空并直接关闭编辑器，随后提交就会被中止。
// 修改上一条提交的信息
git commit --amend
// 5. 查看提交日志 git log -p可查看文件的改动
git log
// 6. 查看当前暂存区与工作树的差别,git diff HEAD是最新差别
git diff

// 显示分支一览表  git branch -a可以查看当前仓库和远程仓库的分支信息
git branch 
// 切换分支
git checkout -b 分支名
// 合并分支
git merge --no-ff 分支名
// 以图标形式查看分支
git log --graph
// 回溯历史版本
git reset --head 历史版本的哈希值
// 查看当前仓库执行过的操作的日志
git reflog

// 添加远程仓库
git remote add origin git@github.com:用户名称/仓库名.git
// 推送至远程仓库 -u参数是设置为本地仓库的上游(upstream)
git push -u origin master
// 获取远程仓库
git clone git@github.com:用户名称/仓库名.git

// 本地commit回退.回退到某次commit
git reset --hard commitID
// 本地commit回退后，提交让远程仓库同步回退
git push -f origin main
```

## gitnone语法

以”#”号开头表示注释；
以斜杠“/”开头表示目录；
以星号“*”通配多个字符；
以问号“?”通配单个字符
以方括号“[]”包含单个字符的匹配列表；
以叹号“!”表示不忽略(跟踪)匹配到的文件或目录；
*.txt  ，*.xls  表示过滤某种类型的文件
target/ ：表示过滤这个文件夹下的所有文件
/test/a.txt ，/test/b.xls  表示指定过滤某个文件下具体文件
!*.java , !/dir/test/     !开头表示不过滤
*.[ab]    支持通配符：过滤所有以.a或者.b为扩展名的文件
/test  仅仅忽略项目根目录下的 test 文件，不包括 child/test等非根目录的test目录