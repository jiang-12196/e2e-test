# codecept-demo

# 文件目录

> ### 文件目录介绍

* output/ - Reports and Screenshots
* pages / - Put common locators and methods
* tests/ - test files

## Setup

### 安装 codeceptjs

使用 npm 全局安装 codeceptjs，这样的话我们就可以在 shell 里面直接使用 codeceptjs 命令

```
[sudo] npm install -g codeceptjs
```

本地安装, 这样的话我们可以执行./node_modules/.bin/codeceptjs

```
npm install --save-dev codeceptjs
```

### 全局安装 webdriverio

```
[sudo] npm install -g webdriverio
```

### 安装 selenium-standalone

因为这些 helper i.e. webdriverio, protractor 都是需要 selenium 作为后端与 browser 通信的服务，所以我们也需要安装 selenium。

安装

```
npm install selenium-standalone@latest -g
selenium-standalone install
```

启动selenium

```
selenium-standalone start
```

### 启动项目

```
npm install
codeceptjs run
codeceptjs run --debug
```
