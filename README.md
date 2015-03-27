# TechChat

[![build status][travis-image]][travis-url]
[![Coverage Status][coveralls-image]][coveralls-url]
[![gitter][gitter-image]][gitter-url]

[travis-image]: https://api.travis-ci.org/leoliew/TechChat.svg?branch=master
[travis-url]: https://travis-ci.org/leoliew/TechChat
[coveralls-image]: https://coveralls.io/repos/leoliew/TechChat/badge.svg?branch=master
[coveralls-url]: https://coveralls.io/r/leoliew/TechChat?branch=master
[gitter-image]: https://badges.gitter.im/Join%20Chat.svg
[gitter-url]: https://gitter.im/leoliew/TechChat?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge

The chat app for Technician and software designer

[about Sails framework](http://sailsjs.org) application


## Clone
Clone the project from github

    git clone https://github.com/leoliew/TechChat

## Install
从官方源安装依赖模块

    npm install
    
从国内源安装依赖模块

    make install

## Test
运行测试用例

    make test

运行测试用例并生成Unit Test的覆盖率（运行结束后会在coverage目录下生成覆盖率报告）

    make coverage

sails测试环境构建文件

    test/bootstrap.test.js

测试用例目录结构

> `test` 测试文件存放目录(主要测试api目录下的所有文件)
> > `Controllers` Controllers测试文件夹，测试对应Controllers文件夹下的所有内容
> > >   `UserControllers.test.js`  Test UserControllers.js

> >  `models`

> >  `services`

> >   `scene`  场景测试目录



## 定时任务
定时任务初始化配置

> TechChat/config/bootstrap.js

定时任务时间以及执行内容配置

> TechChat/config/crontab.js

## deploy
deploy脚本位置

    TechChat/bin

Display all processes status

    pm2 status

Restart processes with PM2

    pm2 restart  <app_name|id|all>

## APIs
restful api

- [restful api](http://sailsjs.org/#/documentation/reference/blueprint-api)

其他api配置

    router: config/routers
    controllers: api/controllers
    models: api/models

## 代码规范
response数据

    response返回对象实例
    {
        data:{} -- 返回的数据
        code:0, -- 0代表没有错误，非0代表有错误
        msg:'get user info success!' -- 接口信息
        err:'find mongodb err!' -- 错误信息
    }

## 开发流程

![develop flow](http://image.beekka.com/blog/201207/bg2012070507.png)

  * 1.从master分支分出功能分支（可以采用feature-*的形式命名）

        git checkout -b feature-x master

  * 2.开发完成后，申请合并到master分支

  * 3.删除feature分支

        git branch -d feature-x





## Support
Need help or have a question?

- [Sails](http://sailsjs.org)
- [Tutorials](https://github.com/balderdashy/sails-docs/blob/master/FAQ.md#where-do-i-get-help)
- [Stackoverflow](http://stackoverflow.com/questions/tagged/sails.js)
- [#sailsjs on Freenode](http://webchat.freenode.net/) (IRC channel)
- [Professional/Enterprise Options](https://github.com/balderdashy/sails-docs/blob/master/FAQ.md#are-there-professional-support-options)
- [Git/manager](http://www.ruanyifeng.com/blog/2012/07/git.html)

