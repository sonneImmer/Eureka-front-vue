<template>
  <el-row class="tac">
    <el-col>
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">

        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">主页面</span>
        </el-menu-item>

        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>管理员</span>
          </template>
          <el-menu-item-group>
<!--            <template slot="title">管理员</template>-->
            <router-link to="/admin">
              <el-menu-item index="1-1">合约部署</el-menu-item>
            </router-link>
            <router-link to="/serviceAdmin">
              <el-menu-item index="1-2">服务审核</el-menu-item>
            </router-link>
          </el-menu-item-group>
        </el-submenu>

<!--        <el-menu-item index="2">-->
<!--          <i class="el-icon-menu"></i>-->
<!--          <span slot="title">客户端</span>-->
<!--          <el-menu-item-group>-->
<!--            <router-link to="/draft">-->
<!--              <el-menu-item index="2-1">11</el-menu-item>-->
<!--            </router-link>-->
<!--          </el-menu-item-group>-->
<!--        </el-menu-item>-->

<!--        <el-menu-item index="3" disabled>-->
<!--          <i class="el-icon-document"></i>-->
<!--          <span slot="title">导航三</span>-->
<!--        </el-menu-item>-->

        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-document"></i>
            <span>消费者</span>
          </template>
          <el-menu-item-group>
<!--            <template slot="title">管理员</template>-->
            <router-link to="/details">
              <el-menu-item index="3-1">服务选择</el-menu-item>
            </router-link>
            <router-link to="/admin">
              <el-menu-item index="3-2">合同签署</el-menu-item>
            </router-link>
          </el-menu-item-group>
        </el-submenu>

        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">管理员</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>
