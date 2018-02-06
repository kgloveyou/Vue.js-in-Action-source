/**
 * Created by Administrator on 2018-01-25.
 */
Vue.directive('clickoutside',{
  bind:function (el,binding,vnode) {
    function documentHandler (e) {
      if(el.contains(e.target)){
        return false;
      }
      if(binding.expression){
        binding.value(/*e*/);
      }
    }
    el._vueClickOutside_=documentHandler;
    document.addEventListener('click',documentHandler);
  },
  unbind:function (el,binding) {
    document.removeEventListener('click',el._vueClickOutside_);
    delete el._vueClickOutside_;
  }
});