import { App } from 'vue';
import MyButton from './Button';
import SFCButton from './button/SFCButton.vue';
import TSXButton from './Button/TSXButton';

// 单独导出
export { MyButton, SFCButton, TSXButton };

// 插件
export default {
  install(app: App) {
    app.component(MyButton.name, MyButton);
    app.component(SFCButton.name, SFCButton);
    app.component(TSXButton.name, TSXButton);
  },
};
