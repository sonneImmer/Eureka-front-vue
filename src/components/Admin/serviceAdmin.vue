<template>
  <div>>
    <el-container>
      <el-header>
        <service-status></service-status>
      </el-header>
      <el-main>
        <service-table :dataList="serviceDataList"></service-table>
      </el-main>
      <el-footer>服务发现伙伴</el-footer>
    </el-container>
  </div>
</template>

<script>
import serviceTable from '../elements/serviceTable'
import serviceStatus from '../elements/serviceStatus'
import {contractAll} from '../../request/api'

export default {
  name: 'ServiceAdmin',
  components: {serviceTable, serviceStatus},
  methods: {
    getEurekaServicesInfo () {
      contractAll.then(res => {
        console.log(res)
        this.serviceDataList = res.serviceData
      })
    }
  },
  data () {
    return {
      serviceDataList: []
    }
  },
  mounted () {
    this.getEurekaServicesInfo()
  }
}
</script>

<style scoped>

</style>
