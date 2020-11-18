<template>
  <el-table
    :data="dataList"
    style="width: 100%">
    <el-table-column
      prop="service_name"
      label="服务名称"
      width="180">
    </el-table-column>
    <el-table-column
      label="AMI"
      width="180">
      n/a
    </el-table-column>
    <el-table-column
      prop="area_in"
      label="可用区域"
      width="180">
    </el-table-column>
    <el-table-column
      prop="service_status"
      label="服务状态"
      width="180">
    </el-table-column>
    <el-table-column
      prop="provider"
      label="提供商"
      width="200">
    </el-table-column>
    <el-table-column
      label="审核发布"
      fixed="right"
      width="100">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.$index)">审核</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    name: 'serviceAdminTable',
    props: {
      dataList: null
    },
    data: function () {
      return {
      }
    },
    methods : {
      handleClick(row) {
        // console.log(row+1);
        // console.log(this.dataList[row]);
        let data = JSON.stringify(this.dataList[row])
        this.$router.push({
          name: 'details',
          params: {
            serviceAdminId: row+1,
            serviceDataList: data
          }
        })
      }
    }
  }
</script>

<style scoped>

</style>
