# 作用

一周熟练Webpack 计划
1. 使用 webpack 打包一个 React UI 组件
2. 在另一个项目引用上面👆编写的组件



## 1. 使用 webpack 打包一个 React UI 组件

- 需要安装 React 和 React-DOM
- 需要安装 css-loader 和 style-loader 和 file-loader
- 使用sass 需要安装 sass-loader 和 css-loader
- JSX 语法需要安装 babel-loader 和 @babel/core 和 @babel/preset-react

### 遇到的问题
- 提示文件不存在, 原因是jsx结尾的，webpack 去尝试了.js ,.json, .wasm 后缀，需要单独配置 resolve
  - `import Button from './components/button'`
  - `resolve: {
    extensions: ['.js', '.jsx']
    }`

- React17 以上的版本可以不用显示导包React, 但需要如下配置
```js
{
presets: [
  [
    '@babel/preset-react',
      {
      runtime: 'automatic',
      },
  ],
  ]
}
```
- 配置了scss 没生效，最终没有打包出样式文件 (原因是因为没有添加style-loader )

```jsson
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          'css-loader',
          'sass-loader'
        ]
      }
```

- 把 app-lib 打包成一个成组件供 app 使用，但是导包结果为空

```js
import * as appLib from 'app-lib'

console.log('appLib', appLib) // appLib {}

// 原因： 是在app-lib 没有配置 library

{
  library: {
    type: 'umd'
  }
}
```

### 运行方式， 先在 app-lib 中执行 npm run build , npm pack, 然后在 app 中执行 npm i , npm run start

### 总结 从0配置，到完成预期计划，记录出现的问题。 完成于2023-11-28

### 感悟

虽然前端工作多年，开发了很多用 React 和 Vue 编写的项目。 但还没有怎么系统的学习Webpack(以往多停留在文字层面的理解，实际动手比较少)，真正操作起来还是错误百出。