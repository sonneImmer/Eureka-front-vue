<template>
  <el-container>
    <el-aside>
      <header-aside></header-aside>
    </el-aside>
    <el-container>
      <el-header>
        <service-status></service-status>
      </el-header>
      <el-footer>服务发现伙伴</el-footer>
      <el-main>
        <service-table :dataList="serviceDataList"></service-table>
      </el-main>
      <el-main>
        <contract-table :dataList="contractDataList"></contract-table>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import serviceTable from './elements/serviceTable'
import contractTable from './elements/contractTable'
import headerAside from './elements/headerAside'
import serviceStatus from './elements/serviceStatus'
import {contractAll} from '../request/api'

export default {
  name: 'HelloVue',
  components: {serviceTable, contractTable, headerAside, serviceStatus},
  data () {
    return {
      message: 'Hello Vue!',
      contractDataList: [],
      serviceDataList: []
    }
  },
  methods: {
    /* getHomeInfo () {
      axios.get('../static/test.json')
        .then((response) => {
          this.contractDataList = response.data.contractData
          this.serviceDataList = response.data.serviceData
        })
    }, */
    getHomeInfo1 () {
      contractAll
        .then(res => {
          this.contractDataList = res.contractData
          this.serviceDataList = res.serviceData
          // console.log(res)
        })
    }
  },
  mounted () {
    this.getHomeInfo1()
  }
}
</script>

<style scoped>

.el-aside{
  background-color: #545c64;
}

</style>
