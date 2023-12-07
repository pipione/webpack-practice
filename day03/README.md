# 作用
一周熟练Webpack 计划
- 管理资源
  - 加载图片
  - 加载CSS
  - 加载字体文件
- 管理输出
- 开发环境
- 代码分离
  - 防止重复 使用 入口依赖 或者 SplitChunksPlugin 去重和分离 chunk。
  - 动态导入 通过模块的内联函数调用分离代码。
    - prefetch（预获取）：将来某些导航下可能需要的资源
    - preload（预加载）：当前导航下可能需要资源
- 缓存


## Shimming

## 疑问

### 遇到的问题



### 感悟


### 总结
- 管理资源：使用 loader 或 内置的  Asset Modules 来引入除 JavaScript 之外的资源（例如图像、字体等）， 不会对文件的内容本身处理。
- 开发环境 development mode
  - devtool: https://www.webpackjs.com/configuration/devtool/