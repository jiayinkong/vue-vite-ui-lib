import { createApp } from 'vue/dist/vue.esm-bundler.js';
// import MyButton from './button';
// import SFCButton from './button/SFCButton.vue';
import VueViteUI from './entry';

createApp({
    template: `
        <div>
            <MyButton>普通按钮</MyButton>
            <MyButton color="red">红色按钮</MyButton>
            <MyButton color="gray">灰色按钮</MyButton>
            <MyButton color="pink">粉色按钮</MyButton>
            <MyButton color="green">绿色按钮</MyButton>
            <MyButton color="indigo">靛蓝色按钮</MyButton>
            <MyButton color="purple">紫色按钮</MyButton>
        </div>
    `
})
.use(VueViteUI)
.mount('#app');