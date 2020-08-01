# toutiao

## 项目设置
```
npm install
```

### 编译和热重装以进行开发
```
npm run serve
是从 .env.development 文件中读取接口地址
```

### 编译并最小化生产
```
npm run build
```

### 整理和修复文件
```
npm run lint
```
### 开发配置文件
```
.env.development 开发时候配置
.evn.production  生产时候配置 139.199.57.206

```
### 生产环境source map 不生成原代码文件
```
productionSourceMap:true, 不需要设置为false 可以加速生产环境构建
```
### 整理和修复文件
See [Configuration Reference](https://cli.vuejs.org/config/).
