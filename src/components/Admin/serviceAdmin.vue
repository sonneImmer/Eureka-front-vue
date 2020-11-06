<template>
  <el-container>
    <el-aside>
      <header-aside></header-aside>
    </el-aside>
    <el-container>
      <el-main>
        <el-card :border="true" style="text-align:center">
          <p style="font-size: 18px">注册中心状态</p>
          <el-row>
            <el-col :span="4">
              <div class="grid-content bg-purple">
                <div class="sub-title">开发环境</div>
                <el-input></el-input>
              </div>
            </el-col>
            <el-col :span="4" :offset="1">
              <div class="grid-content bg-purple">
                <div class="sub-title">当前时刻</div>
                <el-input></el-input>
              </div>
            </el-col>
            <el-col :span="4" :offset="1">
              <div class="grid-content bg-purple">
                <div class="sub-title">租赁到期使能</div>
                <el-input></el-input>
              </div>
            </el-col>
            <el-col :span="4" :offset="1">
              <div class="grid-content bg-purple">
                <div class="sub-title">最后一分钟更新</div>
                <el-input></el-input>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="4">
              <div class="grid-content bg-purple">
                <div class="sub-title">数据中心</div>
                <el-input></el-input>
              </div>
            </el-col>
            <el-col :span="4" :offset="1">
              <div class="grid-content bg-purple">
                <div class="sub-title">开启时间</div>
                <el-input></el-input>
              </div>
            </el-col>
            <el-col :span="4" :offset="1">
              <div class="grid-content bg-purple">
                <div class="sub-title">更新阙值（分钟）</div>
                <el-input></el-input>
              </div>
            </el-col>
          </el-row>
        </el-card>
      </el-main>
      <el-main>
        <el-card :border="true" style="text-align:center">
          <p style="font-size: 18px">服务发现伙伴</p>
          <el-row class="demo-autocomplete">
            <el-col :span="4" >
              <el-button>服务器1：地区一</el-button>
            </el-col>
            <el-col :span="4" :offset="1">
              <el-button>服务器2：地区二</el-button>
            </el-col>
          </el-row>
        </el-card>
      </el-main>
      <el-main>
        <el-card :border="true">
          <p style="font-size: 18px;text-align: center">Eureka已注册服务</p>
          <service-admin-table :dataList="serviceRequestData"></service-admin-table>
        </el-card>
      </el-main>
      <el-main>
        <el-card :border="true">
        <p style="font-size: 18px;text-align: center">合约模板</p>
        <el-table
          :data="tableData"
          height="250"
          border
          style="width: 100%;text-align: center;">
          <el-table-column
            prop="name"
            label="合约名称"
            width="200">
          </el-table-column>
          <el-table-column
            prop="theme"
            label="合约内容"
            width="600">
          </el-table-column>
        </el-table>
        </el-card>
      </el-main>
      <el-footer></el-footer>
    </el-container>
    <!--    </div>-->
    <!--  </div>-->
  </el-container>

</template>

<script>
import serviceTable from '../Admin/serviceAdminTable'
import serviceStatus from '../elements/serviceStatusBackup'
import headerAside from '../elements/headerAside'
import {serviceRequest} from '../../request/api'
import ServiceAdminTable from "./serviceAdminTable"
export default {
  name: 'ServiceAdmin',
  components: {headerAside, ServiceAdminTable, serviceTable, serviceStatus},
  data () {
    return {
      serviceRequestData: [],
      tableData:[
        {
          name:'委托合同',
          theme:'Term...'
        },
        {
          name:'中介合同',
          theme:'Term...'
        },
        {
          name:'服务合同合同',
          theme:'Term...'
        },
      ]
    }
  },
  mounted () {
    this.getEurekaServicesInfo()
  },
  methods: {
    getEurekaServicesInfo () {
      serviceRequest.then(res => {
        // console.log(res)
        this.serviceRequestData = res.serviceRequestData
      })
    },
    goBack: function () {
      window.history.back()
    }
  }
}
</script>

<style scoped>
.el-aside{
  background-color: #545c64;
}
</style>
