<template>
  <div id="app">
    <nav-top :logo="ttt" @transferUser="getUser"></nav-top>
    <span :title="message">455454</span>
    <p>用户名{{user}}</p>
    <ul class="ul">
      <li v-for="(el,$index) in todos" @click="toggle($index)" :class="{active:active==$index}">
        <router-link :to='el.link'>{{el.text}}</router-link>
      </li>
    </ul>
    <router-view :logo="ttt" @transferUser="getUser"></router-view>
    <nav-footer ref="navfooter"></nav-footer><br><br>
    
  </div>
</template>

<script>
import NavTop from './components/header.vue'
import NavFooter from './components/footer.vue'
import axios from 'axios'
export default {
  name: 'app',
  data () {
    return {
      message:'页面加载于' + new Date().toLocaleString(),
      APIURL:'http://10.10.13.252',
      todos:[
        {text:'首页',link:'/first'},
        {text:'详情',link:'/second'},
        {text:'列表',link:'/list'}
      ],
      active:0,
      ttt:'I am 父组件',
      user:'',
      data:qs.stringify({keyWords:'',pageNum:1,pageSize:10})
    }
  },

  components:{
    NavTop,
    NavFooter,
  },
  mounted(){  
    axios.post(this.APIURL+'/usermang/list')
    .then(function(response){
      console.log(response);
    })
    .catch(function(err){
      console.log(err);
    });
    // this.$fetch(this.APIURL+'/usermang/list')
    // .then((response) => {
    //   console.log(response)
    // });

    // this.$post(this.APIURL+'/usermang/getTeacherList',{pageNum:1,pageSize:10})
    // .then((response) => {
    //   console.log(response)
    // })
    this.$post(this.APIURL+'/usermang/getTeacherList',this.data)
    .then(function(response){
      console.log(response);
    })
    .catch(function(err){
      console.log(err);
    });
  },
  methods:{

    toggle:function(i){
      this.active = i
    },
    getUser:function(msg){
      this.user = msg
      console.log(this.$refs.navfooter.aur)
    }
  }
  
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.ul{width: 100%;height: 100px;text-align: center;}
.ul li{
  width:100px;
  text-align:center;
  display: inline-block;
  display:inline-block;
  color:blue;
  background-color:#eee;
  text-align:center;
}
.ul li.active{
  color:#fff;
  background-color:blue;
}
.ul li a{
  display:inline-block;
  width:100%;
}
</style>
