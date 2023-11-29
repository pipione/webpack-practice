module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        "targets": "> 0.25%, not dead", // 指定目标环境
        "useBuiltIns": "usage", // 根据使用情况自动导入polyfill
        "corejs": 3, // 指定core-js版本
        "modules": false // 允许webpack使用其内置的模块系统处理模块
      },
    ],
    [
      '@babel/preset-react',
      {
        runtime: 'automatic',
      },
    ],
  ],
}
