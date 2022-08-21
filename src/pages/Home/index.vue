<template>
  <div>
    
    <TypeNav></TypeNav>
    <ListContainer></ListContainer>
    <Recommend></Recommend>
    <Rank></Rank>
    <Like></Like>
    <!-- 父子组件通信 -->
    <Floor v-for="(floor) in floorList" :key="floor.id" :list="floor"></Floor> 
   
    
    <Brand></Brand>
  </div>
</template>

<script>

import ListContainer from "./ListContainer"
import Recommend from "./Recommend"
import Rank from "./Rank"
import Like from "./Like/index.vue"
import Floor from "./Floor/index.vue"
import Brand from "./Brand/index.vue"
import { mapState } from "vuex"

export default {
    components: { ListContainer, Recommend, Rank, Like, Floor, Brand, Floor },
    mounted(){
      this.$store.dispatch("getFloorList");
      this.$store.dispatch('getUserInfo');
    },
    computed:{
      ...mapState({
        floorList:(state)=>state.home.floorList,
      }),
    },
}
</script>

<style>

</style>