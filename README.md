# analysis-project-dependency
分析项目中的依赖

## 说明

我们需要分析一下项目中到底依赖了哪些npm包，依赖规则如何，实际版本是多少，官方的版本是多少。

[nodegit](http://www.nodegit.org/) 是通过 Node 来操作 git 的工具。但要操作 git ，需要先了解下其原理，可以阅读 [Git 内部原理 - Git 对象](https://git-scm.com/book/zh/v1/Git-%E5%86%85%E9%83%A8%E5%8E%9F%E7%90%86-Git-%E5%AF%B9%E8%B1%A1) 一文。因为 [nodegit 中的 api](http://www.nodegit.org/api/) 中参数和返回值都与 git 的基本原理相关，如果缺乏基础知识，则很难去使用。

![](https://git-scm.com/figures/18333fig0901-tn.png)

使用 [package-json](https://www.npmjs.com/package/package-json) 来获取包的版本信息。