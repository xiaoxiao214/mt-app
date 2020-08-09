<template>
 <div :class="['choose-wrap', Disable ?'disabled':'']" @click="showWrapper" v-document-click="documentClick">
    <div class="choose">
      <span>{{value}}</span>
      <i class="el-icon-caret-bottom"></i>
      <div :class="{'mt-content':true,'active':showWrapperActive}">
        <h2>{{title}}</h2>
        <div :class="['wrapper',className]">
          <div class="col" v-for="(listData, index) in renderList" :key="index">
            <span class="mt-item" v-for="(i, index) in listData" :key="index" @click="changevalue(i)">{{i.name}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: [
    "list",
    "title",
    "value",
    "showWrapperActive",
    "className",
    "Disable"
  ],
  methods: {
    showWrapper(e) {
      e.stopPropagation();
      if( !this.Disable){
      this.$emit("change-active", true);
      }
    },
    documentClick() {
      this.$emit("change-active", false);
    },
    changevalue(item){
            this.$emit('change',item)
        }
  },
  computed: {
    renderList: function() {
      let col = Math.ceil(this.list.length / 12);
      let resultList = [];
      for (var i = 0; i < col; i++) {
        let data = this.list.slice(i * 12, i * 12 + 12);
        resultList.push(data);
        // console.log(data);
      }
      return resultList;
    }
  }
}
</script>
<style lang="scss">
@import "@/assets/css/changecity/select.scss";
</style>
