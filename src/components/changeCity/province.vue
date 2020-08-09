<template>
  <div class="m-province">
    <span>按省份选择</span>
    <m-select
      :list="provinceList"
      title="省份"
      :value="province"
      :showWrapperActive="provinceActive"
      @change-active="changeProvinceActive"
      @change="changeProvince"
      :className="province"

    />
    <m-select
      :list="cityList"
      title="城市"
      :value="city"
      :showWrapperActive="cityActive"
      @change-active="changeCityActive"
      @change="changecity"
      :Disable="changeDisabled"
      :className="city"
    />
    <span>直接搜索：</span>
    <el-select
      v-model="searchWord"
      filterable
      remote
      reserve-keyword
      placeholder="请输入关键词"
      :remote-method="remoteMethod"
      :loading="loading"
    >
      <el-option v-for="item in searchList" :key="item" :label="item" :value="item"></el-option>
    </el-select>
  </div>
</template>
<script>
import mSelect from "./select.vue";
import api from "@/api/index.js";
export default {
  data() {
    return {
      provinceList: [
      ],
      changeDisabled:true,
      province: "省份",
      city: "城市",
      cityList: [
      ],
      provinceActive: false,
      cityActive: false,
      searchList: [
        "桂林",
        "南宁",
        "柳州",
        "梧州",
        "北海",
        "防城港",
        "钦州",
        "贵港",
        "玉林",
        "百色",
        "贺州",
        "河池",
        "来宾",
        "崇左",
        "阳朔",
        "桂平",
        "东兴",
        "灵山",
        "北流",
        "岑溪",
        "藤县",
        "平果市",
        "宾阳",
        "武鸣",
        "田东县",
        "上林县",
        "扶绥县",
        "合浦县",
        "容县",
        "博白县",
        "宜州区",
        "靖西市",
        "陆川县",
        "平南县",
      ],
      searchWord: "",
      loading: false,
    };
  },
  created() {
    api.getProvince().then((res) => {
      console.log(res)
      this.provinceList = res.data.data.map((item) => {
        item.name = item.provinceName;
        return item;
    })})
  },
  components: {
    mSelect,
  },
  methods: {
    changeProvinceActive(flag) {
      this.provinceActive = flag;
      if (flag) {
        this.cityActive = false;
      }
    },
    changeCityActive(flag) {
      this.cityActive = flag;
      if (flag) {
        this.provinceActive = false;
      }
    },
    changeProvince(item) {
      this.province = item.provinceName;
      this.changeDisabled = false;
      this.cityList = item.cityInfoList;
    },
    changecity(val) {
      this.city = val.name;
      this.$store.dispatch('setPosition', val);
      this.$router.push({name: 'index'})
    },
    remoteMethod(e) {
      // console.log(e);
    },
  },
};
</script>
<style lang="scss">
@import "@/assets/css/changecity/iselect.scss";
</style>