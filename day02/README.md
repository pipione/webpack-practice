# 作用

一周熟练Webpack 计划
1. Shimming 预置依赖
2. Tree Shaking


## Shimming
- 全局变量的作用(webpack 会自动导入)， 可以在代码中直接使用，不需要导入，但是需要在 webpack 配置中配置（不推荐这么做，依赖不明确）


## 疑问

- Tree Shaking package.json 配置 sideEffects 和 不配置的区别？
  - 在 mode: 'production' 下，不配置 sideEffects 也会自动开启 Tree Shaking
- 使用ProvidePlugin 和 import-loader 的区别？
  - 它们都是自动加载模块的工具（自动import等）
  - ProvidePlugin 是针对全局的注入依赖
  - import-loader 是针对局部的注入依赖



### 遇到的问题

- 安装webpack 官网配置了 optimization 和 "sideEffects": false， Tree Shaking 无效
```javascript
 // 需要配置 minimize 才会生效
  optimization: {
    usedExports: true
    // minimize: true,
  }
```


### 感悟


### 总结

- 关于输出优化，基本配置 mode: 'production' 就可以了，不需要额外配置.
- sideEffects 的作用
  - 配置sideEffects可以提高Tree Shaking的效率，帮助Webpack更精确地识别并移除未使用的代码
