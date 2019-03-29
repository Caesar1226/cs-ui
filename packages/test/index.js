// 为组件提供install方法，供组件对外按需引入
import XrTest from './src/test.vue';
XrTest.install = Vue => {
    Vue.component(XrTest.name, XrTest);
}
export default XrTest;