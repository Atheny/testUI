# 快速开始

#### 安装组件库

```bash
npm i test-ui-atheny
```


#### 使用组件库
> 在main.js中引用组件库

```javascript
// 全部引用
import 'test-ui-atheny/dist/css/index.css';
import MUI from 'test-ui-atheny';
Vue.use(MUI);


// 按需引用
import 'test-ui-atheny/dist/css/card.css';
import { Card } from 'test-ui-atheny';
Vue.use(Card);
```