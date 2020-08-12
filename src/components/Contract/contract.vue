<template>
  <div>
    <el-header>
      <el-page-header @back="goBack" content="客户端" title="返回">
      </el-page-header>
    </el-header>

    <div class = "container theme-showcase" role="main">
      <h2>
        服务标准&nbsp;&nbsp;
      </h2><hr>
      <div>
        <form action="#" method="post">
          <div class="form-group">
            <label for="term1" style="font-size: 18px;font-weight: bolder;">条款1</label>
            <input type="text" class="form-control" id="term1"
                   name="term1" value="乙方在甲方报修后。应做到1小时响应，4小时恢复，如有特殊情况不超过1天，并提供有关书面报告" >
          </div>
          <div class="form-group">
            <label for="term2" style="font-size: 18px;font-weight: bolder;">条款2</label>
            <input type="text" class="form-control" id="term2"
                   name="term2" value="乙方应对甲方提供信息咨询、技术支持、巡检服务、上门维修等服务内容。经双方认同，巡检服务定为 3月一次" >
          </div>
          <div class="form-group">
            <label for="term3" style="font-size: 18px;font-weight: bolder;">条款3</label>
            <input type="text" class="form-control" id="term3"
                   name="term3" value="协议期间对所有列入维护的设备进行一次预保养服务，时间为协议签定之日起的2日内" >
          </div>
          <div class="form-group">
            <label for="term4" style="font-size: 18px;font-weight: bolder;">条款4</label>
            <input type="text" class="form-control" id="term4"
                   name="term4" value="预保养服务包括系统软件、应用软件、及网络，内容包括目前机器运行的整体状况，存在的问题，技术以及管理建议">
          </div>
          <button type="button" class="btn btn-default">Submit</button>
        </form>
      </div>

      <br><br><br>

      <h2>
        基本信息
      </h2><hr>
      <div class="form-horizontal">

        <div class="form-group"  v-for="(party,id) in parties" v-bind:key="id">
          <div class="col-sm-1" style="float: right;">
            <div v-if="id > 1">
              <button class="btn btn-default" @click="delete_party(id)">
                    <span class="glyphicon glyphicon-minus" aria-hidden="true">
                    </span>
              </button>
            </div>
            <div v-else>
              <button class="btn btn-default" disabled="true" @click="delete_party(id)">
                    <span class="glyphicon glyphicon-minus" aria-hidden="true">
                    </span>
              </button>
            </div>
          </div>
          <label class="col-sm-1 control-label">参与方</label>
          <div class="col-sm-10" name = "parties">
            <input type="text" class="form-control" v-model="parties[id]">
          </div>
        </div>

        <div class="form-group">
          <div class="col-sm-11"></div>
          <div class="col-sm-1" style="float: right;">
            <button class="btn btn-default" @click="add_party()">
                    <span class="glyphicon glyphicon-plus" aria-hidden="true">
                    </span>
            </button>
          </div>
        </div>

        <!--备用details数据获取 勿删
        <div class="form-group">
            <label  for="consumerstarttime" class="col-sm-1 control-label">开始时间</label>
            <div class="col-sm-10" name = "other">
                <input type="text" class="form-control" id="consumerstarttime" name="consumerstarttime" placeholder="202实验室" value=${consumerstarttime}>
            </div>
        </div>

        <div class="form-group">
            <label  for="consumerendtime" class="col-sm-1 control-label">结束时间</label>
            <div class="col-sm-10" name = "other">
                <input type="text" class="form-control" id="consumerendtime" name="consumerendtime" placeholder="202实验室" value=${consumerendtime}>
            </div>
        </div>

        <div class="form-group">
            <label  for="consumerexecutiontime" class="col-sm-1 control-label">实行时间</label>
            <div class="col-sm-10" name = "other">
                <input type="text" class="form-control" id="consumerexecutiontime" name="consumerexecutiontime" placeholder="202实验室" value=${consumerexecutiontime}>
            </div>
        </div>

        <div class="form-group">
            <label  for="consumerrepairrate" class="col-sm-1 control-label">修复率</label>
            <div class="col-sm-10" name = "other">
                <input type="text" class="form-control" id="consumerrepairrate" name="consumerrepairrate" placeholder="202实验室" value=${consumerrepairrate}>
            </div>
        </div>

        <div class="form-group">
            <label  for="consumercost" class="col-sm-1 control-label">服务费用</label>
            <div class="col-sm-10" name = "other">
                <input type="text" class="form-control" id="consumercost" name="consumercost" placeholder="202实验室" value=${consumercost}>
            </div>
        </div>-->
      </div>
      <button type="submit" class="btn btn-default" @click="submit_contract_to_admin()">Submit</button>
      <br><br><br>

    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'contract',
    data () {
      return {
        parties: null,
        contractInfo: null,
      }
    },
    mounted () {
      axios.get('../static/testTemplate3.json')
        .then((response) => {
          this.contractInfo = response.data.contractInfo
        })
      axios.get('../static/contractTemplate_party.json')
        .then((response) => {
          this.parties = response.data.parties
        })
    },
    methods: {
      goBack: function () {
        window.history.back()
      },
      add_party: function() {
        this.parties.push('');
      },
      delete_party: function (id) {
        this.$delete(this.parties, id)
      },
      submit_contract_to_admin: function () {
        console.log(this.parties);
      }
    }
  }
</script>


<style scoped>

</style>
