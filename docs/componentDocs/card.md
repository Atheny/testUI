# Card
卡片组件

### 示例1

<m-card imgSrc="/java.png" summary="Java系统化精讲  重塑你的编程思想 打造坚实的开发基础" />

### 代码1
```html
<m-card imgSrc="/java.png" summary="Java系统化精讲  重塑你的编程思想 打造坚实的开发基础" />
```

---


### 代码2
```html
<m-card imgSrc="/c.png" summary="C语言系统化精讲  重塑你的编程思想 打造坚实的开发基础">
      <template v-slot:footer>
        <div class="footer">
          <div class="level">中级 . 528人报名</div>
          <div class="price">￥2999.00</div>
        </div>
      </template>
</m-card>
```
---

### 代码3
```html
<m-card imgSrc="/spring.jpg" :width="295" :imgHeight="60">
      本路线旨在帮助想快速掌握Vue应用的工程师，全方位多角度带你升级。
      <template v-slot:footer>
        <div class="footer-spring">
          <div class="level">4步骤 . 6门课</div>
          <div class="level">10965收藏</div>
        </div>
      </template>
</m-card>
```
---

### Attributes
| 参数 | 说明 | 类型 | 是否必要 | 默认值 | 
| --- | ---  | ---  | ---     | ---    |
| width | 卡片的宽度 | Number | false | - |
| imgSrc | 图片资源地址 | String | true | - |
| imgHeight | 图片高度 | Number | false | - |
| summary | 卡片概要 | String/Slot | false | - |
| footer | 卡片底部 | Slot | false | - |
 
