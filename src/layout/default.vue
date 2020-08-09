 <template>
  <div class="layout-default">
    <el-container>
      <el-header height="">
        <my-header />
      </el-header>
      <el-main >
        <router-view>
        </router-view>
      </el-main>
      <el-footer height="">
        <my-footer />
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import MyHeader from '@/components/header/index.vue'
import myFooter from '@/components/footer/index.vue'
export default {
  components: {
    MyHeader,
    myFooter
  }
}
</script>
<style lang="scss" >
 @import '@/assets/css/public/layout.scss';

</style>
