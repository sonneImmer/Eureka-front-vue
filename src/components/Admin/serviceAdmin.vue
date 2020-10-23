<template>
    <el-container>
      <el-aside>
        <header-aside></header-aside>
      </el-aside>
<!--          <div class = "container theme-showcase" role="main">-->
      <el-container>
        <el-header>
          <service-status></service-status>
        </el-header>
        <el-footer>服务发现伙伴</el-footer>
        <el-main>
          <service-admin-table :dataList="serviceRequestData"></service-admin-table>
        </el-main>
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
      serviceRequestData: []
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
