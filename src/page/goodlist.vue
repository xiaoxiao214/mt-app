<template>
  <div class="page-product">
    <el-row class="m-crumbs">
      <m-crumb />
    </el-row>
    <el-row>
      <el-col :span="19">
        <el-row>
            <m-categroy />
        </el-row>
        <el-row>
            <m-list />
        </el-row>
      </el-col>
      <el-col :span="5">map + fav</el-col>
    </el-row>
  </div>
</template>
<script>
import MCrumb from "@/components/products/crumbs.vue";
import MCategroy from "@/components/products/categroy.vue";
import MList from "@/components/products/list.vue";


export default {
  data() {
    return {
      
    };
  },
  components: {
    MCrumb,
    MCategroy,
    MList
  },
};
</script>
<style lang="scss">
@import "@/assets/css/products/index.scss";
@import "@/assets/css/products/list.scss";

</style>