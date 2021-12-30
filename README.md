# lightmon

A tool for highlighting text according to keywords

根据关键字文本高亮的一个工具

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f4a2c2fb083743ba9897bcd6922fe956~tplv-k3u1fbpfcp-watermark.image?)

## 安装

`npm install lightmon`

## 使用

```ts
import HL from "lightmon";

const hl = new HL({
  // 需要查找关键字的根元素
  root: document.querySelector(".ant-select-dropdown"),
  // style: 'font-weight: bold;',
});

hl.light(keyword);
```
