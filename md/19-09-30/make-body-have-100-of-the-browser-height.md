
## make-body-have-100-of-the-browser-height

---

##### code

```html
html {
  height: 100%;
}
body {
  min-height: 100%; // min-height: 100vh;
}
```

##### reason

body元素向html元素(父元素)寻求height属性 --> (css继承的特性)

即html元素设置 height: 100%

再考虑到body元素可能动态设置, 再次 body元素再设置 min-height: 100%

即可

##### reference link

- https://makandracards.com/makandra/39473-stretching-an-html-page-to-full-height
- https://stackoverflow.com/questions/6654958/make-body-have-100-of-the-browser-height


---
end
