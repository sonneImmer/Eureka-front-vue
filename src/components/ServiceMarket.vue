<template>
  <el-container>
    <el-aside>
      <header-aside></header-aside>
    </el-aside>
    <el-container>
      <el-header>
      </el-header>
<!--      <el-main>-->
<!--        <p>服务发现伙伴</p>-->
<!--        <el-radio-group  v-model="AuthoCheck">-->
<!--          <el-radio v-for="(item, index) in arrayservice"-->
<!--                    :key="index" :label="item" border>-->
<!--            {{item}}-->
<!--          </el-radio>-->
<!--        </el-radio-group>-->
<!--        <el-radio-group disabled v-model="AUtoCheck2">-->
<!--          <el-radio v-for="(item, index) in unarrayservice"-->
<!--                    :key="index" :label="item" border>-->
<!--            {{item}}-->
<!--          </el-radio>-->
<!--        </el-radio-group>-->
<!--      </el-main>-->
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
import serviceStatus from './elements/serviceStatusBackup'
import {contractAll} from '../request/api'
import {serviceDiscover} from '../request/api'
export default {
  name: 'ServiceMarket',
  components: {serviceTable, contractTable, headerAside, serviceStatus},
  data () {
    return {
      message: 'Hello Vue!',
      contractDataList: [],
      serviceDataList: [],
      AuthoCheck: '',
      AUtoCheck2:'',
      authTypeList: ['北京','湖南'],
      getservice:'',
      arrayservice:[],
      unarrayservice:[],
      str1:''
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
        })
    },
    getserviceDiscover () {
      serviceDiscover
       .then(res => {
         this.getservice=res
         this.str1=(this.getservice["unavailable-replicas"])
         this.arrayservice=(this.str1.split(','))
         this.str1=(this.getservice["available-replicas"])
         this.unarrayservice=(this.str1.split(','))
         this.arrayservice=this.arrayservice.filter(item =>item!="")
         this.unarrayservice=this.unarrayservice.filter(item =>item!="")
       })
    },
  },
  mounted () {
    this.getHomeInfo1()
    this.getserviceDiscover()
  }
}
</script>

<style scoped>

.el-aside{
  background-color: #545c64;
}

</style>
