
---

#### 部署

```cmd
ng deploy --base-href=https://vacantthinker-deployed.github.io/angular-blogs/ --repo=https://github.com/vacantthinker-deployed/angular-blogs.git

```

#### 访问

[https://vacantthinker-deployed.github.io/angular-blogs/](https://vacantthinker-deployed.github.io/angular-blogs/)


#### 实践

1. http请求转化为json 对象再处理成bean, 而不是使用Set<string> string等单个数据类型.
    
    - 失败, 无法显示数据
    
    - 原因已找到, http请求转化为json 对象再处理成bean, 需要json的key-(value-type) 和bean的variable-(data-type) 一一对应


---
end
