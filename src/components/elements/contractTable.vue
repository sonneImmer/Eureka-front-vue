<template>
  <el-table
    :data="dataList"
    style="width: 100%"
    max-height="250">
    <el-table-column
      prop="contract_name"
      label="合约名称"
      width="120">
    </el-table-column>
    <el-table-column
      prop="sign_in"
      label="签定方"
      width="120">
    </el-table-column>
    <el-table-column
      prop="contract_statu"
      label="合约状态"
      width="120">
    </el-table-column>
    <el-table-column
      prop="contract_address"
      label="合约地址"
      width="120">
    </el-table-column>
    <el-table-column
      prop="service_inuse"
      label="执行服务列表"
      width="300">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="合约具体信息"
      width="120">
      <router-link to="/contract">
        <el-button>details</el-button>
      </router-link>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: 'contractTable',
  props: {
    dataList: []
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped>

</style>
