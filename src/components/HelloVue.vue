<template>
  <el-container>
    <el-aside>
      <header-aside></header-aside>
    </el-aside>
    <el-container>
      <el-main>
        <service-status></service-status>
      </el-main>
      <el-footer>服务发现伙伴</el-footer>
      <el-main>
        <service-table :dataList="serviceDataList"></service-table>
      </el-main>
      <el-footer>
        <contract-table :dataList="contractDataList"></contract-table>
      </el-footer>
    </el-container>
  </el-container>
</template>

<script>
import serviceTable from './elements/serviceTable'
import contractTable from './elements/contractTable'
import headerAside from './elements/headerAside'
import serviceStatus from './elements/serviceStatus'
import axios from 'axios'

export default {
  name: 'HelloVue',
  components: {serviceTable, contractTable, headerAside, serviceStatus},
  data () {
    return {
      message: 'Hellow Vue!',
      contractDataList: [],
      serviceDataList: []
    }
  },
  methods: {
    getHomeInfo () {
      axios.get('../static/test.json')
        .then((response) => {
          this.contractDataList = response.data.contractData
          this.serviceDataList = response.data.serviceData
        })
    }
  },
  mounted () {
    this.getHomeInfo()
  }
}
</script>

<style scoped>

</style>
