<template>
<div class="container theme-showcase">

<h2 class="title is-2">合同协议书</h2>
<hr>
<el-card class="box-card">

<el-table
    :data="tableData"
    :align="center"
    :cell-style="cellStyle"
    :header-cell-style="rowClass"
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
        需要传 参与方对象、交易信息-->

        <router-link v-bind:to="'/details'+scope.row.id"><el-link type="primary">查看模板</el-link></router-link>
        <el-button @click="handleClick(scope.row.id)" type="text" size="middle">编辑</el-button>
        <br>
,
        <!-- 可以一并转到contract 然后用户自己编辑 contract那里可以加一个交易信息part
        可以添加单条键值对 也可以添加一个对象（也适用于参与方）
        -->
        <router-link v-bind:to="'/details'+scope.row.id"><el-link icon="el-icon-view">查看</el-link></router-link>
        <router-link v-bind:to="'/draft'"><el-link>编辑<i class="el-icon-edit el-icon--right"></i></el-link></router-link>

      </template>
    </el-table-column>
  </el-table>

</el-card>
</div>
</template>

<script>
export default {
  methods: {
    handleClick: function (row) {
      // this.$message('typeId:'+row.id);
      // this.$router.push({name:'draft',params:{num:row.id}})
      // typeId = { conId : row.id };
      // typeId = JSON.stringify(row.id);
      /*
        axios.post('../static/test.json',typeId).then((response) => {
                       console.log(response);
                       this.conTypeId = response.data.typeId;
                        }).catch((response) => {
                           console.log(response.error)
                       })
                       */
      /* let getreponse = new api()
      getreponse.getDataByGet(
        'getContractRequests', // 后端的接口
        {template_id: row.id}, // 把后端给的字段赋值
        res => {
          console.log(res) // 成功后获取的值
        }) */
    },
    data () {
      return {
        contract: {
          title: 'Online Bidding',
          blockchainIdentity: '0xB9a8…M37qG6'
        },
        tableData: [{
          name: '网络竞买合同协议书',
          description: '拍卖细则',
          id: '1'
        }, {
          name: '中介合同协议书',
          description: '中介',
          id: '2'
        }, {
          name: '技术服务合同协议书',
          description: 'IT服务细则',
          id: '3'
        }, {
          name: '汽车租赁合同协议书',
          description: '汽车租赁细则',
          id: '4'
        }]
      }
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
