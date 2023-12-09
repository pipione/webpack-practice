# 作用
一周熟练Webpack 计划

- 构建性能
- 内容安全策略
- 模块热替换（热更新）
- 生产环境
- 懒加载
- ECMAScript 模块
- Typescript
- 公共路径

## 构建性能 （https://www.webpackjs.com/guides/build-performance/）

- 升级版本 node, webpack。 像webpack4 可以用 SplitChunksPlugin. webpack5 可以使用cache
  - 不是 webpack5 想使用cache 可以使用 `hard-source-webpack-plugin` https://zhuanlan.zhihu.com/p/84014459
- 缓存 webpack5 可以使用 cache
- loader ,应用于最少数量的必要模块
```javascript
// bad
module.exports = {
  //...
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
    ],
  },
};

// good
const path = require('path');

module.exports = {
  //...
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        loader: 'babel-loader',
      },
    ],
  },
};
```

- dll (在webpack4 中已经不推荐使用了)
- devtool 不通过的值有不同的编译性能。 https://webpack.js.org/configuration/devtool/#devtool
  - 开发环境： 如果不要调试可以设置为 eval
  - 生产环境：可以设置为 source-map， map 文件单独存放
  - 最佳选择是 eval-cheap-module-source-map
- 避免在非生产环境使用 压缩插件 ，因为这会增加编译时间


1. **升级到最新版本**：
   确保你使用的是Webpack的最新版本。随着时间的推移，Webpack在其更新中通常会包含性能改进和bug修复。

2. **配置优化**：
  - **使用`cache-loader`或者`hard-source-webpack-plugin`**：这些插件可以缓存某些资源的构建结果，减少重复构建的时间。
  - **使用`thread-loader`进行多线程打包**：在耗时的loader之前添加`thread-loader`可以将工作分布到多个进程中，加快构建速度。
  - **最小化entry points**：减少入口点数量，避免不必要的模块重复编译。
  - **优化resolve配置**：减少模块查找的路径，指定extensions减少文件解析消耗。

3. **代码分割**：
   使用`splitChunks`插件将公共的依赖分离出去，这样可以更好地利用浏览器缓存，也可以减少构建时需要处理的代码量。

4. **减少代码量**：
  - **Tree shaking**：移除JavaScript中未引用的代码。
  - **懒加载**：通过动态`import()`语句实现代码分割和懒加载，减少初始加载时间。

5. **减少资源大小**：
  - **Minification**：使用`TerserPlugin`等插件压缩JavaScript代码。
  - **Image optimization**：使用`image-webpack-loader`等压缩图片。

6. **启用模块缓存**：
   在Webpack 5中，可以使用内置的缓存机制。对于Webpack 4，可以使用`cache-loader`。

7. **减少插件**：
   确认所有使用的插件是否必要，移除不需要的插件来减少构建负担。

8. **Profile构建**：
   使用`--profile`和`--json`选项来收集构建统计信息，可以帮助你分析构建过程中的瓶颈。

9. **使用DLL**：
   对于一些不经常改变的库，使用`DllPlugin`提前打包，可以加快主构建过程。

10. **开发环境优化**：
  - **使用`eval-source-map`开发工具**：这种模式下的Source Map构建更快，但仍提供精确的映射。
  - **HMR（Hot Module Replacement）**：启用HMR可以避免在开发中重新加载整个应用。
  - **DevServer优化**：比如`watchOptions`中的轮询（polling）选项。

11. **限制文件监听**：
    限制Webpack的文件监听范围，避免监听不必要的文件和目录。

12. **排除不必要的代码**：
    使用`externals`配置从bundle中排除某些依赖，如CDN引入的库。


## 模块热替换（热更新）
- 问题，没有热更新，每次都是刷新了页面
  - 修改 js需要手动处理更新逻辑， 修改 css 会自动更新
- 如果不想手动处理每个文件的热更新要怎么办呢
```
    // 这样配置，但是渲染处理的dom有问题，可能渲染两份（更新了几次就有几份）。
  module.hot.accept(err => {
    if (err) {
      console.error('Cannot apply HMR update.', err);
    }
  });

```
```
  devServer: {
    hot: true
  }
  
  // 需要这样手动处理热更新逻辑
  
  if (module.hot) {
      module.hot.accept('./printMe.js', function() {
        console.log('Accepting the updated printMe module!');
        printMe();
      })
    }
```

## 疑问

### 遇到的问题


### 感悟


### 总结

- React 模块热替换（热更新 （https://www.webpackjs.com/guides/hot-module-replacement/）
  - 老旧的React可以使用 react-hot-loader React 16.8 之前用这个
  - 推荐：新的React可以使用 react-refresh (@pmmmwh/react-refresh-webpack-plugin, react-refresh)， React 16.8 之后用这个
  - create-react-app-从 4 开始支持了 react-refresh