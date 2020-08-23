<template>
  <div>
    <el-header>
      <el-page-header @back="goBack" content="客户端" title="返回">
      </el-page-header>
    </el-header>

    <div class = "container theme-showcase" role="main" v-if="contractInfo != null">
      <div class="col-sm-10 col-sm-offset-1">
        <div class="blog-post">
          <el-row >
            <el-col :span="6">
              <label style="font-size:x-large;margin-top:2px;">合同名称：</label>
            </el-col>
            <el-col :span="12">
              <el-input class="contract_title" suffix-icon="el-icon-edit" v-model="contractInfo.title_zh" placeholder="合约名zh"></el-input>
            </el-col>
            <el-col>
              <!--            <i-->
              <!--              class="el-icon-edit el-input__icon"-->
              <!--              slot="suffix">-->
              <!--            </i>-->
            </el-col>
          </el-row>

          <el-row >
            <el-col :span="6">
              <label style="font-size:x-large;margin-top:2px;">Contract Name：</label>
            </el-col>
            <el-col :span="12">
              <el-input class="contract_title" suffix-icon="el-icon-edit" v-model="contractInfo.title_en" placeholder="合约名en"></el-input>
            </el-col>
            <el-col>
              <!--            <i-->
              <!--              class="el-icon-edit el-input__icon"-->
              <!--              slot="suffix">-->
              <!--            </i>-->
            </el-col>
          </el-row>
        </div>
        <hr>

        <conparty></conparty>
        <br>
        <convar></convar>

        <conterm></conterm>

        <h3 style="font-weight: bold;">
          基本信息
        </h3><hr>
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

        <br>
        <conclusion></conclusion>
        <br>
        <div style="text-align: center">
          <el-button type="submit" class="btn btn-default" @click="submit_contract_to_admin()">Submit</el-button>
        </div>

        <br><br>
      </div>
    </div>
    <br>
  </div>

</template>

<script>
  import axios from 'axios'
  import conclusion from './contract_conclusion'
  import conparty from './contract_party'
  import convar from './contract_var'
  import conterm from './contract_term'
  import {contractInfo} from '../../request/api'
  import {parties} from '../../request/api'

  export default {
    name: 'contract',
    data () {
      return {
        parties: null,
        contractInfo: null,
      }
    },
    components: {
      conclusion,conparty,convar,conterm
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
        console.log(this.contractInfo);
        this.$notify({
          title: '成功',
          message: '合约上传成功，等待审核',
          type: 'success'
        });
      },
      getParties () {
        parties
          .then(res => {
            this.parties = res.parties
          })
      },
      getContractInfo () {
        contractInfo
          .then(res => {
            this.contractInfo = res.contractInfo
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
