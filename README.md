# vue-start

> vue-start，一个简洁创建前端项目的脚手架，主要面向后端开发攻城狮，可以更方便的搭建前端工具项目

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## 页面样式
> 页面样式的控制，主要在/src/assets/目录下<br>
> 侧边栏的顶部"Demo系统"是由/libs/constant.js中的SYSTEM_NAME控制<br>

## 页面布局
> 页面布局组件是Layout组件 <br>   

## 账号
> 在/src/store/modules/user.js中，会向Vuex存入登录账号信息，还会向cookie中存放token，需要重写login、getCurrentInfo方法

## API接口
> 1、需要在/api/modules新增api，测试环境和线上环境的域名通过dev.env.js和prod.env.js配置<br>
> 2、在index中export出去</br>
> 3、net.js中有axios的请求拦截器

## 新增页面
> 1、在/src/view下新建组件<br>
> 2、在/src/router的index新增路由，其中icon的配置是/src/icons/svg中的svg图片


