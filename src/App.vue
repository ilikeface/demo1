<template>
  <div>
    <Header></Header>
    <!-- 路由写在中间 -->
    <router-view></router-view>
    <!-- 用v-show去控制是否显示 这样写的话如果路劲很多会很麻烦-->
    <!-- <Footer v-show="$route.path=='/home' || $route.path=='/search'"></Footer> -->
    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>

import Header from './components/Header/header.vue'
import Footer from './components/Footer/footer.vue'

export default { 
  name: 'App',
  components: {
    Header,
    Footer,
  
},
mounted(){
 // 通知vuex发送请求，获取数据，存储与仓库中
    this.$store.dispatch("categoryList");
}
}
</script>

<style>

</style>
