# 参考element自定义主题的实现方式

1、拷贝[脚本]
* 1、拷贝一份样式less变量文件夹vars到同级目录命名为temp-vars;
```
    npm run copy
```
2、修改[手动]
* 修改temp-var文件夹内的变量;

3、重新编译[脚本]
* 1、删除output.css
* 2、编译less打包样式到dist/output.css
    * 遍历style文件
    * 替换变量vars
    * 打包
    * 替换变量temp-vars
```
npm run compile
```

```

实现效果:
    用户每次修改temp-vars增量文件，编译后，项目的主题将会改变
```