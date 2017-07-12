## webSite

#### 轻松的打造一个个人站点
可以查找指定文件目录下的html文件来生成前端网页
[DEMO](http:tideh.bid)
![enter image description here](http://atideh.com/pageindex.jpg)

#### 1.构建方式
```javascript
npm install
```
#### 2.运行
```javascript
node index.js
```
#### 3.个人配置
1.修改端口和项目查找目录配置
文件目录：
``/config/default.js``
```javascript
module.exports = {
    //basic config
    name:'my Site',
    port:3000,
    //the basic projects path : ./public/project+pathHtmlFind[]
    pathProjectsBasic:'projects',
    pathProjectsFind:[
        'test'
    ],
    pathProjectsImg:'projects_img',
    pathProjectsInfo:'projects_info.json'

}
```
`pathProjectsBasic` 项目查找基础目录
`pathProjectsFind` 项目目录的子文件夹
`pathProjectsImg` 项目的显示图片目录
`pathProjectsInfo`项目的配置信息文件

2.修改页面元素显示信息
``/public/config/index_info.js``
```js
module.exports = {
    pannel:{
        title:'this is title',
        message:'all the pannel config is on pbulic/index_info.js',
        head_portrait:'/img/me.jpg',
        about_me:'need config',
        sayhi:'need config!',
        e_mail:'need config',
        github:'need config',
        link:[]
    },
    content:{
        title:'this is content title '
    }
}
```

3.修改项目显示配置
``pathProjectsInfo``

```json
{
    "projectsIn":{
        "test.html":{
            "info":"This is test page"
        }
    },
    "projectsOut":[
        {
            "href":"http://baidu.com",
            "img_href":"test.jpg",
            "info":"BAIDU"
        }
    ]
}
```
projectsIn 为本地目录下放的项目信息定义。
projectsOut 则针对放在其他位置的信息定义。
