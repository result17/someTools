## arrTool
最初我接触Python时，Python的list是可以支持负数索引的。当我初学JS时，自然而然的以为JS数组也支持，在当时还看不懂报错信息的时候，曾经费半天功夫才找到问题所在。
所以使用es6的proxy写了这个小工具。再加上我个人博客的[第一篇文章](https://github.com/result17/blog/blob/master/js/understanding-Array.prototype.sort.md)所写上的数组乱序方法。使用方法用script标签引入就行了。
```js
// 负数索引
let arr = [1, 3, 5, 7]

// 乱序(修改原数组, 无返回值)
arr.shuffle()
```
```js
let arr = [1, 3, 5, 7]
arr = arr.toProxy()
// 7
console.log(arr[-1])

arr.shuffle()
// Proxy {0: 7, 1: 3, 2: 5, 3: 1}
console.log(arr)
// 5
console.log(arr[-2])
// 7 3 5 1
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i])
}
```
## open with code
在朋友电脑上右键文件夹菜单栏有open with code，可以直接用vs code打开文件夹，比较方便，在网上找到实现，就是仓库的code.reg(仅限windows系统)。
将你电脑上的vs code路径替换C:\\Program Files\\Microsoft VS Code\\Code.exe\。注意是两个反斜杆。保存后，并双击运行即可。
## 简繁体切换
拿别人的简繁体切换做了一下小改动，符合es6 module。使用方法：
```js
import {allSimplify, allTraditional} from 'simTrad.js'
let test = '蛋餅、大麵羹、炒麵、米糕、菜頭粿、豆花'
let res = allSimplify(test)
```
可能会有一些汉字没收录，欢迎补充。