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
                <el-input style="font-size: 25px" v-model="registerdata.environment":readonly="true"></el-input>
              </div>
            </el-col>
            <el-col :span="4" :offset="1">
              <div class="grid-content bg-purple">
                <div class="sub-title">cpu数量</div>
                <el-input style="font-size: 25px" v-model="registerdata['num-of-cpus']":readonly="true"></el-input>
              </div>
            </el-col>
            <el-col :span="4" :offset="1">
              <div class="grid-content bg-purple">
                <div class="sub-title">总内存空间</div>
                <el-input style="font-size: 25px" v-model="registerdata['total-avail-memory']":readonly="true"></el-input>
              </div>
            </el-col>
            <el-col :span="4" :offset="1">
              <div class="grid-content bg-purple">
                <div class="sub-title">可用内存空间</div>
                <el-input style="font-size: 25px" v-model="registerdata['current-memory-usage']":readonly="true"></el-input>
              </div>
            </el-col>
            <el-col :span="4" :offset="1">
              <div class="grid-content bg-purple">
                <div class="sub-title">更新阙值（分钟）</div>
                <div>
                  <el-input style="font-size: 25px;text-align: center" v-model="registerdata['server-uptime']":readonly="true"></el-input>
                </div>
              </div>
            </el-col>
          </el-row>
        </el-card>
      </el-main>
      <el-main>
        <el-card :border="true" style="text-align:center">
          <p style="font-size: 18px">服务发现伙伴</p>
            <el-main>
              <el-radio-group  v-model="AuthoCheck">
                <el-radio-button v-for="(item, index) in arrayservice"
                          :key="index" :label="item" border>
                  {{item}}
                </el-radio-button>
              </el-radio-group>
              <el-radio-group disabled v-model="AUtoCheck2">
                <el-radio-button v-for="(item, index) in unarrayservice"
                          :key="index" :label="item" border>
                  {{item}}
                </el-radio-button>
              </el-radio-group>
            </el-main>
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
import {registerData, serviceDiscover, serviceRequest} from '../../request/api'
import ServiceAdminTable from "./serviceAdminTable"
export default {
  name: 'ServiceAdmin',
  components: {headerAside, ServiceAdminTable, serviceTable, serviceStatus},
  data () {
    return {
      serviceRequestData: [],
      registerdata:"",
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
      ],
      AuthoCheck: '',
      AUtoCheck2:'',
      authTypeList: ['北京','湖南'],
      getservice:'',
      arrayservice:[],
      unarrayservice:[],
      str1:''
    }
  },
  mounted () {
    // this.getEurekaServicesInfo(),
    this.getRegisterdata()
    this.getserviceDiscover()
  },
  methods: {
    getEurekaServicesInfo () {
      serviceRequest.then(res => {
        // console.log(res)
        this.serviceRequestData = res.serviceRequestData
      })
    },
    getRegisterdata () {
      registerData.then(res => {
        this.registerdata=res
      })
    },
    getserviceDiscover () {
      serviceDiscover
        .then(res => {
          this.getservice=res
          this.str1=(this.getservice["available-replicas"])
          this.arrayservice=(this.str1.split(','))
          this.str1=(this.getservice["unavailable-replicas"])
          this.unarrayservice=(this.str1.split(','))
          this.arrayservice=this.arrayservice.filter(item =>item!="")
          this.unarrayservice=this.unarrayservice.filter(item =>item!="")
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
