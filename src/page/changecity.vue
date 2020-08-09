<template>
  <div class="page-changeCity">
    <el-row class>
      <province />
    </el-row>
    <el-row class>
      <hot title="热门城市" :list="hotList" />
    </el-row>
    <el-row class>
      <hot title="最近访问" :list="rencentList" />
    </el-row>
    <el-row class>
      <m-categroy />
    </el-row>
  </div>
</template>
<script>
import Province from "@/components/changeCity/province.vue";
import hot from "@/components/changeCity/hotcity.vue";
import MCategroy from "@/components/changeCity/categroy.vue"
import api from "@/api/index.js"


export default {
  data() {
    return {
      hotList: [
      ],
      rencentList: [
      ]
    };
  },
  components: {
    Province,
    hot,
    MCategroy
  },
   created(){
    api.getHotCity().then(res =>{
      // console.log(res)
      this.hotList = res.data.data.map(item => item.name)
    }),
    api.getRecentlyCity().then(res =>{
      // console.log(res)
      this.rencentList = res.data.data.map(item => item.name)
    })
  },
}

</script>