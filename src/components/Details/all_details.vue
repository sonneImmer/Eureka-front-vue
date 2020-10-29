<template>
  <div style="margin-top: 20px">
    <el-header>
      <el-page-header @back="goBack" content="服务器端" title="返回">
      </el-page-header>
    </el-header>
    <div class="container theme-showcase">
      <h2 class="title is-2">选择合约模板</h2>
      <hr>
      <el-card class="box-card">
        <el-table
          :data="tableData"
          style="width: 100%;text-align: center">
          <el-table-column
            prop="name"
            label="合同类型"
            width="260">
          </el-table-column>
          <el-table-column
            prop="description"
            label="合同简述"
            width="600">
          </el-table-column>
          <el-table-column
            prop="id"
            fixed="right"
            label="操作"
            width="200">
            <template slot-scope="scope">
              <!-- 可以传参 可以用id或者name绑定合同模板里需要的信息参数
              需要传 参与方对象、交易信息

              <router-link v-bind:to="'/details'+scope.row.id"><el-link type="primary">查看模板</el-link></router-link>
              <el-button @click="handleClick(scope.row.id)" type="text" size="middle">编辑</el-button>
              <br>-->
              <br>
              <!-- 可以一并转到contract 然后用户自己编辑 contract那里可以加一个交易信息part
              可以添加单条键值对 也可以添加一个对象（也适用于参与方）
              -->
              <router-link v-bind:to="'/details'+scope.row.id">
                <el-button icon="el-icon-view" type="text" size="middle">查看</el-button>
              </router-link>
              <el-button @click="handleClick(scope.row.id)" icon="el-icon-edit" type="text" size="middle">编辑</el-button>
              <el-button @click="handleclick2(scope.row.id)" icon="el-icon-view" type="text" size="middle">具体合约</el-button>


            </template>
          </el-table-column>
        </el-table>
      </el-card>
    </div>
  </div>

</template>

<script>
  import {tableDataList} from '../../request/api'

  export default {
    mounted() {
      // axios.get('../static/adminTemplate.json')
      //   .then((response) => {
      //     this.contracts = response.data.contracts
      //   })
      this.getTableData()
    },
    created() {
      this.getQueryServiceAdminId()
    },
    methods: {
      handleClick(row) {
        /*console.log(row);
        // this.$message('typeId:'+row.id);
        this.$router.push({name:'draft',params:{num:row.id}})
        typeId = { conId : row.id };
        typeId = JSON.stringify(row.id);
        axios.post('../static/test.json',typeId).then((response) => {
          console.log(response);
          this.conTypeId = response.data.typeId;
        }).catch((response) => {
          console.log(response.error)
        })*/
        console.log(row);
        this.$router.push({
          path: '/draft',
          query: {
            contractId: row
          }
        })
      },
      handleclick2(row){
        this.$router.push({
          path: '/detailsDraft',
          query: {
            contractId: row
          }
        })
      },
      /*
      // 元素居中
      cellStyle({ row, column, rowIndex, columnIndex }){
       return "text-align:center";
      },
      // 表头居中
      rowClass({ row, rowIndex }){
       return "text-align:center";
      }
      */
      getTableData () {
        tableDataList
          .then(res => {
            this.tableData = res.tableData
            this.contract = res.contract
          })
      },
      goBack: function () {
        //window.history.back()
        this.$router.push({
          path: '/'
        })
      },
      getQueryServiceAdminId () {
        // 取到路由带过来的参数
        const routerQueryId = this.$route.params.serviceAdminId
        console.log(routerQueryId)
        const routerQueryObject = this.$route.params.serviceDataList
        console.log(routerQueryObject)
        // axios.get('../static/testTemplate' + routerQueryId + '.json',{
        //   template_id : routerQueryId
        // })
        //   .then((response) => {
        //     this.contractInfo = response.data.contractInfo
        //   })
      }
    },
    data() {
      return {
        contract: null,
        tableData: null
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
</style>
