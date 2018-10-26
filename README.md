English|[简体中文](./README_zh.md)

# git-deploy-directory

Deploy a directory to a git branch. You can use the configuration file to deploy easily.Useful to deploy to GitHub Pages.


### Installation

``` bash
$ npm install -d git-deploy-directory
or 
$ yarn add -D git-deploy-directory
```

### Usage
// init 
``` bash
$ git deploy init //Initialize the configuration file
```
Configuration file
```
{
  "type": "git",
  "repo": "https://github.com/webkong/xxxx.git",  // git repo
  "branch": "docs", // git branch 
  "dir": "build" // You are going to deploy directory
}
```

```
// deploy
$ git deploy push
```

### License

[MIT](http://opensource.org/licenses/MIT)


## Author

![me](https://s.gravatar.com/avatar/1fe24100ab2109076fd777d1ad0a28c5?s=100)
