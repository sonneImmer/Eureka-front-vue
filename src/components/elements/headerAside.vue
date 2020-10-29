<template>
  <el-row class="tac">
    <el-col style="height: 100vh">
      <el-menu
        router
        :default-active="$route.path"
        :default-openeds="['2', '3']"
        class="el-menu-vertical-demo"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">

        <el-menu-item index="/">
          <i class="el-icon-menu"></i>
          <span slot="title">主页面</span>
        </el-menu-item>

        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>管理员</span>
          </template>
          <el-menu-item-group>
              <el-menu-item index="/admin">合约部署</el-menu-item>
              <el-menu-item index="/serviceAdmin">服务审核</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-document"></i>
            <span>消费者</span>
          </template>
          <el-menu-item-group>
<<<<<<< HEAD
              <el-menu-item index="/details">服务选择</el-menu-item>
              <el-menu-item index="/admin">合同签署</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-menu-item index="/demo">
          <i class="el-icon-setting"></i>
          <span slot="title">服务商</span>
        </el-menu-item>
=======
<!--            <template slot="title">管理员</template>-->
            <router-link to="/details">
              <el-menu-item index="3-1">服务选择</el-menu-item>
            </router-link>
            <router-link to="/services">
              <el-menu-item index="3-2">合同签署</el-menu-item>
            </router-link>
          </el-menu-item-group>
        </el-submenu>

<!--        <el-menu-item index="4">-->
<!--          <i class="el-icon-setting"></i>-->
<!--          <span slot="title">管理员</span>-->
<!--        </el-menu-item>-->
>>>>>>> dev-temp
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
export default {
  props : {
    // defaultActive: null
  },
  data () {
    return {

    }
  }
}
</script>

<style scoped>

</style>
