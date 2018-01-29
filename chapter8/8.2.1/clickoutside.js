/**
 * Created by Administrator on 2018-01-25.
 */
Vue.directive('clickoutside',{
  bind:function (el,binding,vnode) {
    function documentHandle (e) {
      if(el.contains(e.target)){
        return false;
      }
      if(binding.expression){
        binding.value(e);
      }
      el._vueClickOutside_=documentHandle;
      document.addEventListener('click',documentHandle);
    }
  },
  unbind:function (el,binding) {
    document.removeEventListener('click',el._vueClickOutside_);
    delete el._vueClickOutside_;
  }
});