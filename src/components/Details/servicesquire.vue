<template>
  <el-container>
    <el-header>
      <el-page-header @back="goBack" content="服务广场" title="返回">
      </el-page-header>
    </el-header>
    <div class="container theme-showcase">
    <el-card class="box-card">
    <el-main>
      <h2 class="title is-2">开放服务</h2>
      <el-table
        :data="tableData"
        height="250"
        border
        :row-class-name="tableRowClassName"
        style="width: 100%">
        <el-table-column
          fixed
          prop="date"
          label="服务名称"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="服务状态"
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          label="提供商">
        </el-table-column>
        <el-table-column
          prop="address"
          label="执行合约列表">
        </el-table-column>
        <el-table-column
          fixed="right"
          prop="address"
          width="100"
          label="选择服务">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
            <el-button type="text" size="small">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-main>
    </el-card>
    </div>
    <hr>
    <div class="container theme-showcase">
    <el-card class="box-card">
    <el-main>
      <h2 class="title is-2">选择合约模板</h2>
      <el-table
        :data="tableData"
        border
        height="250"
        style="width: 100%">
        <el-table-column
          prop="date"
          label="合约名称"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="签定方"
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          label="合约状态">
        </el-table-column>
        <el-table-column
          prop="address"
          label="合约地址">
        </el-table-column>
        <el-table-column
          prop="address"
          label="链接服务列表">
        </el-table-column>
        <el-table-column
          prop="address"
          label="合约内容">
        </el-table-column>
      </el-table>
    </el-main>
    </el-card>
    </div>
  </el-container>
</template>


<script>
//import {tableDataList} from '../../request/api'
export default {
name: "servicesquire",
  data() {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },
  methods:{
    goBack: function () {
      //window.history.back()
      this.$router.push({
        path: '/'
      })
    },
    handleClick(row) {
      console.log(row);
    },
    tableRowClassName({row, rowIndex}) {
      if (rowIndex === 1) {
        return 'warning-row';
      } else if (rowIndex === 3) {
        return 'success-row';
      }
      return '';
    }
  }
}
</script>

<style scoped>
.el-header, .el-footer {
// background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}
</style>
