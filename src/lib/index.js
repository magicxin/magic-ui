import imageViewer from '../components/imageViewer.vue'
const components = {
  install: function(Vue) {
    Vue.component(imageViewer.name, imageViewer)
  }
}
// 这里的判断很重要
if (typeof window !== 'undefined' && window.Vue) { 
    window.Vue.use(components) 
}
export default components