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

1. 不同 chunk 的作用， runtime main vendors 分别的作用
   1. runtime 包含Webpack的启动代码和模块加载器。对于每个入口，Webpack都会生成一个运行时代码。这个运行时代码负责在浏览器中加载和解析模块。
   2. main 通常是应用程序的主要代码，即你自己写的源代码。如果你有多个入口点，Webpack将为每个入口点生成一个main块。
   3. vendors 包含所有来自node_modules目录的代码，通常是第三方库和框架，如React、Lodash等。这样做的目的是将应用代码和第三方库代码分离，因为第三方代码变更的频率通常比应用代码要低，这有助于浏览器缓存和优化加载速度。

将代码分割成runtime, main, 和 vendors 块的原因在于性能优化、缓存利用和更快的加载时间。这种划分策略主要基于以下几点考虑：

- 缓存优化：
  - 第三方库（vendors）：通常变动不大，用户浏览器可以长时间缓存这部分代码。当你的应用代码更新时，用户不需要重新下载这些库，因为它们已经被缓存了。
  - 应用代码（main）：包含业务逻辑，可能经常更新。将其与第三方库分开，意味着更新业务逻辑时不会影响到第三方库的缓存。
  - Webpack运行时（runtime）：管理所有模块的互相引用和加载，当你有多个入口点或者使用了代码分割时，它也可能会更新。将runtime代码分割出来，可以确保用户在应用更新后，浏览器只需要加载变化的部分。
- 更快的加载时间：
  - 分离第三方库可以减少主要业务逻辑代码块的大小，从而减少初始加载时间。
    - 用户首次访问页面时可能只需要加载main和runtime块，之后这些块可能被缓存起来，再次访问时只需从缓存中提取。
- 并行下载：
  - 现代浏览器可以并行下载多个文件，分离文件可以让浏览器同时下载main, vendors, 和runtime块，而不是下载一个巨大的文件。
- 维护和更新简化：
  - 开发者可以单独更新应用代码（main）而不影响到vendors块，使得部署和更新变得更加灵活和高效。
- 更好的错误定位：
  - 如果出现问题，可以更容易地区分是由第三方库引起的还是应用代码引起的。
- 可扩展性和管理：
  - 大型项目可能会有许多入口点和代码分割点，合理的划分可以方便对项目的管理，尤其是在团队合作和代码库日益增长的情况下。

总之，这种分割策略有助于提高应用性能，减少不必要的数据传输，利用浏览器缓存机制，同时也使得应用的管理和维护变得更加高效。



### 遇到的问题
1. 把 node_module chunk都打包到一个文件里，会导致动态加载的chunk也会被打包到一起，导致动态加载失效（被同步加载了）

```
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
```

2. 把不同类型的打包的不同chunk
```
 optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          reuseExistingChunk: true,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
        async: {
          name: 'async',
          chunks: 'async',
          minChunks: 2,
          priority: 10,
          reuseExistingChunk: true,
        },
        sync: {
          name: 'sync',
          chunks: 'initial',
          minChunks: 2,
          priority: 20,
          reuseExistingChunk: true,
        },
      },
    },
  },
```

### 感悟


### 总结
- 管理资源：使用 loader 或 内置的  Asset Modules 来引入除 JavaScript 之外的资源（例如图像、字体等）， 不会对文件的内容本身处理。
- 开发环境 development mode
  - devtool: https://www.webpackjs.com/configuration/devtool/