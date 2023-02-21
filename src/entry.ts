import { App } from 'vue';
import MyButton from './button';
import SFCButton from './button/SFCButton.vue';
import TSXButton from './button/TSXButton';

// 单独导出
export {
    MyButton,
    SFCButton,
    TSXButton
}

// 插件
export default {
    install(app: App) {
        app.component(MyButton.name, MyButton);
        app.component(SFCButton.name, SFCButton);
        app.component(TSXButton.name, TSXButton);
    }
}