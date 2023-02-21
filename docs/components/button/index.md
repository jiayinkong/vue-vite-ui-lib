# Button
## 基础用法
:::demo 使用`color`属性定义样式

```vue
<div style="margin-bottom: 20px;">
    <MyButton />
    <MyButton color="green">绿色按钮</MyButton>
</div>

<div style="margin-bottom: 20px;">
    <MyButton color="gray" round plain icon="delete">删除</MyButton>
    <MyButton round plain icon="search"></MyButton>
</div>

<div class="custom-style">custom style</div>

<style scoped>
.custom-style {
    color: red;
    font-size: 20px;
    line-height: 1.5em;
}
</style>
```
:::