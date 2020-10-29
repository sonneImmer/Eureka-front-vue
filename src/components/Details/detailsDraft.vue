<template>
  <div>
    <el-header>
      <el-page-header @back="goBack()" content="合约具体信息" title="返回">
      </el-page-header>
    </el-header>

    <div class="container theme-showcase" role="main" v-if="contractInfo!=null">
      <div class="col-sm-10 el-col-sm-offset-1">
        <div v-if="contractInfo.id == 1">
         <details1 :contract="contractInfo"></details1>
        </div>
        <div v-else-if="contractInfo.id == 2">
         <details2></details2>
        </div>
        <div v-else-if="contractInfo.id == 3">
          <details3></details3>
        </div>
        <div v-else-if="contractInfo.id == 4">
          <details4></details4>
        </div>
      </div>
<!--      <div>-->
<!--        <router-link :to="'/details'+contractInfo.id">-->
<!--        </router-link>-->
<!--      </div>-->
    </div>



  </div>
</template>

<script>
import axios from 'axios'
import details1 from './details1'
import details2 from './details2'
import details3 from './details3'
import details4 from './details4'
//import {contractInfo} from '../../request/api'
import {parties} from '../../request/api'
export default {
  name: "details-draft",
  data(){
    return{
      parties: null,
      contractInfo: null,
    }
  },
  components:{
    details1,details2,details3,details4
  },
  created() {
    this.getQueryId()
  },
  mounted () {
    // axios.get('../static/testTemplate1.json')
    //   .then((response) => {
    //     this.contractInfo = response.data.contractInfo
    //   })
    // axios.get('../static/contractTemplate_party.json')
    //   .then((response) => {
    //     this.parties = response.data.parties
    //   })
    this.getParties()
    this.getContractInfo()
  },
  methods:{
    goBack(){
      window.history.back()
    },
    getParties () {
      parties
        .then(res => {
          this.parties = res.parties
        })
    },
    getContractInfo () {
      // contractInfo
      //   .then(res => {
      //     this.contractInfo = res.contractInfo
      //   })
    },
    getQueryId () {
      // 取到路由带过来的参数
      const routerQueryId = this.$route.query.contractId
      //console.log(routerParams)
      axios.get('../static/testTemplate' + routerQueryId + '.json',{
        template_id : routerQueryId
      })
        .then((response) => {
          this.contractInfo = response.data.contractInfo
        })
    }
  }
}
</script>

<style scoped>
.contract_title >>> .el-input__inner {
  /*width: 220px;*/
  border-top-width: 0px;
  border-left-width: 0px;
  border-right-width: 0px;
  border-bottom-width: 1px;
  border-radius: 0;
  margin-bottom:2px;
  align-self: baseline;
  /*display:inline;*/
  /*outline: medium;*/
}
</style>
