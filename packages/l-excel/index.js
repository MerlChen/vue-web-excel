import LExcel from './src/index'

LExcel.install = (Vue) => {
  Vue.component(LExcel.name, LExcel)
};
export default LExcel;