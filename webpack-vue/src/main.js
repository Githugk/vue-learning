import  Vue from 'vue'//在webpack中使用这一句，功能不完整，只提供了runtime-only的方式
// import Vue from '../node_modules/vue/dist/vue.js'//第一种方法

//第二种方法，在webpack-config-js中添加resolve结点
// import  Vue from 'vue'

// var login = {
//   template:'<h1>这是login组件</h1>'
// }


//导入login组件
import login from './login.vue'
var vm = new Vue({
  el:  '#app',
  data: {
    msg: '123'
  },
  methods: {},
  // components:{
  //   login
  // }
  // render: function(createElements){
  //   return createElements(login)
  // }

  render: c => c(login)
})

import m1,{title,content} from './test.js'
console.log(m1)
console.log(title+'---'+content)