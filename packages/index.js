import Vue from "vue"
import vueExcel from './l-excel'

const components = [
  vueExcel
];
Object.keys(components).forEach(name => {
  Vue.component(name, components[name])
});
export default vueExcel
