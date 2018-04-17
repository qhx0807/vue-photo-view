import vuePhotoView from './vue-photo-view.vue'

const photoView = {
  install (Vue, opts) {

  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(paykeyboard)
}

export default photoView
