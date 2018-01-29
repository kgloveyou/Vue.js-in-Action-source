/**
 * Created by Administrator on 2018-01-25.
 */
var app=new Vue({
  el:'#app',
  data:{
    show:false
  },
  methods:{
    handleClose:function () {
      this.show=false;
    }
  }
});