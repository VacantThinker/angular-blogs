
##### deploy build on angular-blogs-deploy

```cmd
ng build --prod --base-href=https://vt-angular.github.io/angular-blogs-deploy/
```


```cmd
ng deploy --base-href=https://vt-angular.github.io/angular-blogs-deploy/ --repo=https://github.com/vt-angular/angular-blogs-deploy.git


```

##### access the deploy

[https://vt-angular.github.io/angular-blogs-deploy/](https://vt-angular.github.io/angular-blogs-deploy/)

---

#### 个人建议

1. 建议 http请求json转化为bean, 不建议 使用Set<string> string. 理由: 单纯数据类型, 使用起来很麻烦
    
    - 失败, 诡异原因, 无法显示数据
    
    - 原因已找到, http请求json转化为bean, 需要json的key-(value-type) 和bean的variable-(data-type) 一一对应


---
end
