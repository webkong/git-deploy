[English](./README.md) | 简体中文
# git-deploy-directory

部署一个目录到指定的git仓库分支。并且可以通过配置文件来轻松管理。当然很轻松的支持 Github Pages。


### 安装

``` bash
$ npm install -D git-deploy-directory
or 
$ yarn add -D git-deploy-directory
```

### 使用

``` bash
// init 初始化
$ git deploy init //初始化配置文件，如果不初始化，会默认将build目录deploy到master分支。
```
配置文件内容
```
{
  "type": "git",
  "repo": "https://github.com/webkong/xxxx.git",  // 仓库地址
  "branch": "docs", // 要部署到的分支
  "dir": "build" // 要部署的文件夹
}
```

```
// 部署
$ git deploy push
```

### License

[MIT](http://opensource.org/licenses/MIT)


## Author

![me](https://s.gravatar.com/avatar/1fe24100ab2109076fd777d1ad0a28c5?s=100)
