<template>
  <div style="margin-top: 20px">
    <el-header>
      <el-page-header @back="goBack" content="服务器端" title="返回">
      </el-page-header>
    </el-header>

    <div name = "top_container">
      <div class = "container theme-showcase" role="main" v-for="(contract,item) in contracts" v-bind:key="item">
        <el-card class="box-card col-sm-10 col-sm-offset-1" shadow="always">
          <div name="contract_message" class="">
            <br>
            <table class="table table-striped table-bordered" style="word-break:break-all; word-wrap:break-all;">
              <thead>
              <tr>
                <th style="text-align: center;" class="col-sm-4">参与方</th>
                <th style="text-align: center;" class="col-sm-8">参与方签名</th>
              </tr>
              </thead>
              <tbody>
                <tr name="party_sign" v-for="(party,id) in contract.participant" v-bind:key="id">
                  <td name="contract_party" style="text-align: center;" v-model="party.name">{{ party.name }}</td>
                  <td name="contract_sign"  style="text-align: left;" v-model="party.sign" contenteditable="true">{{ party.sign }}</td>
                </tr>
                <tr name="address">
                  <td class="col-sm-3" style="text-align: center;">合约地址</td>
                  <td name="contract_address" style="text-align: left" contenteditable="false">{{ contract.address }}</td>
                </tr>
                <tr name="signature">
                  <td class="col-sm-3" style="text-align: center;">签名</td>
                  <td name="contract_sign" style="text-align: left" contenteditable="false"></td>
                </tr>
              </tbody>
            </table>
            <div style="text-align: right">
              <button class="btn btn-default" id="submit_provider_contract2" type="submit" @click="submit_contract($event)">同意签署</button>
            </div>
          </div>
        </el-card>
        <br><br>
      </div>
    </div>
    <br><br>
<!--    <el-footer style="text-align: center">-->
<!--      <el-pagination-->
<!--        @size-change="handleSizeChange"-->
<!--        @current-change="handleCurrentChange"-->
<!--        :current-page.sync="currentPage3"-->
<!--        :page-size="2"-->
<!--        :hide-on-single-page="false"-->
<!--        layout="prev, pager, next, jumper"-->
<!--        :total="3">-->
<!--      </el-pagination>-->
<!--      <br>-->
<!--    </el-footer>-->
  </div>
</template>

<script>
  import axios from 'axios'
  import {contracts} from '../../request/api'

  var i = 3
  export default {
    name: 'admin',
    components: {
      //'v-page': pagination,
    },
    data () {
      return {
        contracts: null,
      }
    },
    mounted() {
      // axios.get('../static/adminTemplate.json')
      //   .then((response) => {
      //     this.contracts = response.data.contracts
      //   })
      this.getParties()
    },
    methods: {
      submit_contract: function (event) {
        event = event ? event : window.event;
        var obj = event.srcElement ? event.srcElement : event.target;
        var divNode = $(obj).parent();
        var messageNode = divNode.parent("div[name=contract_message]");
        var messageListNode = messageNode.children("table").children("tbody").children("tr[name=party_sign]");
        var party = [];
        var sign = [];

        messageListNode.each(function () {
          var partyNode = $(this).children("td[name=contract_party]");
          if(partyNode.length > 0) {
            party.push(partyNode.text());
          }
          var signNode = $(this).children("td[name=contract_sign]");
          if(signNode.length > 0) {
            sign.push(signNode.text());
          }
        })
        alert(party);
        alert(sign);

        var addressNode = messageNode.children("table").children("tbody").children("tr[name=address]");
        var signNode = messageNode.children("table").children("tbody").children("tr[name=signature]");
        var address = addressNode.children("td[name=contract_address]").text();

        alert("合约地址：" + address);

        this.$message("result：签署成功");
        /*
            需要传参
            party：参与方
            sign：对应签名
            address：合约地址

            需要返回
            result：签名结果
        */
        signNode.children("td[name=contract_sign]").text("ILqnQN/BytnGOmwXwo/OSyG5QWJ3alwgL5edPLiG0/OgH2AAmZ6ixwtux2NunPxkHoFx2j4rhBBELDDIw7RxwXw=");
      },
      goBack: function () {
        window.history.back()
      },
      getParties () {
        contracts
          .then(res => {
            this.contracts = res.contracts
          })
      }
    }
  }
</script>

<style>
  .el-card {
    margin-bottom: 25px;
    padding-top: 10px;
  }
</style>
