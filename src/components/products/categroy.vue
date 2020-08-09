<template>
  <div class="m-product-categroy">
    <dl class="classic">
      <dt>分类</dt>
      <dt>全部</dt>
      <dd v-for="item in menuList" :key="item.type">
        <m-select :name="item.name" :list="item.sub_items" />
      </dd>
    </dl>
    <dl class="classic">
      <dt>区域</dt>
      <dt>全部</dt>
      <dd v-for="item in areaList" :key="item">
        <m-select :name="item.title" :list="item.subList" />
      </dd>
    </dl>
  </div>
</template>
<script>
import MSelect from "./select.vue";
export default {
  components: {
    MSelect,
  },
  data() {
    return {
      menuList: [
        {
          type: "food",
          name: "美食",
          sub_items: [
            {
              title: "美食",
              items: "代金券",
            },
            {
              title: "美食",
              items: "甜点饮品",
            },
            {
              title: "美食",
              items: "火锅",
            },
            {
              title: "美食",
              items: "自助餐",
            },
            {
              title: "美食",
              items: "小吃快餐",
            },
          ],
        },

        {
          type: "food",
          name: "美食",
          sub_items: [
            {
              title: "美食",
              items: "代金券",
            },
            {
              title: "美食",
              items: "甜点饮品",
            },
            {
              title: "美食",
              items: "火锅",
            },
            {
              title: "美食",
              items: "自助餐",
            },
            {
              title: "美食",
              items: "小吃快餐",
            },
          ],
        },
        {
          type: "food",
          name: "美食",
          sub_items: [
            {
              title: "美食",
              items: "代金券",
            },
            {
              title: "美食",
              items: "甜点饮品",
            },
            {
              title: "美食",
              items: "火锅",
            },
            {
              title: "美食",
              items: "自助餐",
            },
            {
              title: "美食",
              items: "小吃快餐",
            },
          ],
        },
        {
          type: "takeout",
          name: "外卖",
          sub_items: [
            {
              title: "外卖",
              items: "美团外卖",
            },
            {
              title: "外卖",
              items: "夜宵",
            },
            {
              title: "外卖",
              items: "饮品",
            },
            {
              title: "外卖",
              items: "午餐",
            },
          ],
        },
        {
          type: "takeout",
          name: "外卖",
          sub_items: [
            {
              title: "外卖",
              items: "美团外卖",
            },
            {
              title: "外卖",
              items: "夜宵",
            },
            {
              title: "外卖",
              items: "饮品",
            },
            {
              title: "外卖",
              items: "午餐",
            },
          ],
        },
        {
          type: "takeout",
          name: "外卖",
          sub_items: [
            {
              title: "外卖",
              items: "美团外卖",
            },
            {
              title: "外卖",
              items: "夜宵",
            },
            {
              title: "外卖",
              items: "饮品",
            },
            {
              title: "外卖",
              items: "午餐",
            },
          ],
        },
      ],
      areaList: [
        {
          title: "推荐商圈",

          subList: [
            {
              items: "望京",

              id: 120000,
            },
            {
              items: "昌平",

              id: 12222,
            },
          ],
        },
        {
          title: "推荐商圈",

          subList: [
            {
              items: "望京",

              id: 120000,
            },
            {
              items: "昌平",

              id: 12222,
            },
          ],
        },
        {
          title: "推荐商圈",

          subList: [
            {
              items: "望京",

              id: 120000,
            },
            {
              items: "昌平",

              id: 12222,
            },
          ],
        },
      ],
    };
  },
};
</script>