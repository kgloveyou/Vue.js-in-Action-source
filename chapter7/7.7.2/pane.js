/**
 * Created by Administrator on 2018-01-25.
 */
Vue.component('pane',{
  template:'<div class="pane" v-show="show">' +
              '<slot></slot>' +
            '</div>',
  data:function () {
    return{
      show:true
    }
  },
  props:{
    name:{
      type:String
    },
    label:{
      type:String,
      default:''
    }
  },
  methods:{
    updateNav:function () {
      this.$parent.updateNav();
    }
  },
  watch: {
    label(){
      this.updateNav();
    }
  },
  mounted(){
    this.updateNav();
  }

});
