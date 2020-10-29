<template>
  <el-table
    :data="dataList"
    style="width: 100%"
    max-height="250">
    <el-table-column
      prop="title"
      label="合约名称"
      width="120">
    </el-table-column>
    <el-table-column
      prop="sign_in"
      label="签定方"
      width="120">
    </el-table-column>
    <el-table-column
      prop="state"
      label="合约状态"
      width="120">
    </el-table-column>
    <el-table-column
      prop="address"
      label="合约地址"
      width="120">
    </el-table-column>
    <el-table-column
      prop="microservices"
      label="执行服务列表"
      width="300">
    </el-table-column>
    <el-table-column
      prop="details_id"
      label="详情界面"
      width="280">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="合约具体信息"
      width="120">
      <template slot-scope="scope">
        <el-button @click="gotoDetails(scope.row.id)">
          details
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: 'contractTable',
  props: {
    dataList: null
  },
  data () {
    return {
    }
  },
  methods: {
    gotoDetails (row) {
      console.log(row);
      this.$router.push({
        path: '/detailsDraft',
        query: {
          contractId: row
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
