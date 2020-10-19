<template>
  <el-table
    :data="dataList"
    style="width: 100%"
    max-height="250">
    <el-table-column
      fixed
      prop="service_name"
      label="服务名称"
      width="150">
    </el-table-column>
    <el-table-column
      prop="area_in"
      label="可用区域"
      width="120">
    </el-table-column>
    <el-table-column
      prop="service_statu"
      label="服务状态"
      width="120">
    </el-table-column>
    <el-table-column
      prop="provider"
      label="提供商"
      width="120">
    </el-table-column>
    <el-table-column
      prop="service_inuse"
      label="执行合约列表"
      width="300">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="服务具体信息"
      width="120">
      <router-link to="/details1">
        <el-button>details</el-button>
      </router-link>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: 'serviceTable',
  props: {
    dataList: null
  },
  data: function () {
    return {
    }
  }
}
</script>

<style scoped>

</style>
