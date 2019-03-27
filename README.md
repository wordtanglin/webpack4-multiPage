```
├── build
│   ├── webpack.base.conf.js    webpack公共文件
│   ├── webpack.dev.conf.js     webpack开发环境配置文件
│   └── webpack.prod.conf.js    webpack生产环境配置文件
├── index.html                  入口页面模板
├── package.json
├── postcss.config.js
├── src
│   ├── app                     应用
│   │   ├── home                  模块（每个模块走自己的路由）
│   │   │   ├── app.vue
│   │   │   ├── assets            资源
│   │   │   ├── components        组件
│   │   │   ├── main.js
│   │   │   ├── router.js
│   │   │   ├── store.js
│   │   │   └── views
│   │   └── login                 模块（每个模块走自己的路由）
│   │       ├── app.vue
│   │       ├── assets            资源
│   │       ├── components        组件
│   │       ├── main.js
│   │       ├── router.js
│   │       ├── store.js
│   │       └── views
│   ├── assets                公共资源
│   │   ├── fonts
│   │   │   └── mui.ttf
│   │   ├── images
│   │   │   └── icon-smail.png
│   │   └── styles
│   ├── common
│   │   ├── config.js
│   │   ├── directive.js
│   │   ├── filter.js
│   │   └── request.js
│   └── components          公共组件
│       └── toast
│           ├── index.js
│           └── index.vue
├── static                静态资源
│   ├── fonts
│   │   └── mui.ttf
│   ├── images
│   │   └── snivel.png
│   └── styles
│       └── css_reset.scss
└── README.md
```

`
## 安装
npm install ##运行
npm run dev

## 编译
npm run build

`
