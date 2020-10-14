<template>
    <div class="contractParty" v-if="contractInfo != null">
      <h3 style="font-weight: bold;">参与人信息</h3>
      <hr>

      <el-card class="box-card" shadow="always">
        <div v-if="contractInfo.id == 1">
          <p>@@甲方信息：{{contractInfo.parties[0].name_zh}}，登记信息包括：个人账户信息；行为包括：宣布竞拍开始、宣布竞拍结束。</p>
        </div>
        <div v-else-if="contractInfo.id == 2">
          <p>@@甲方信息：{{contractInfo.parties[0].name_zh}}，登记信息包括：委托方账户信息，委托方公司资质，委托方服务信息；行为包括：服务上线、服务下线。</p>
        </div>
        <div v-else-if="contractInfo.id == 3">
          <p>@@甲方信息：{{contractInfo.parties[0].name_zh}}，登记信息包括：委托方账户信息，委托方公司资质，委托方服务信息；行为包括：报修。</p>
        </div>
        <div v-else-if="contractInfo.id == 4">
          <p>@@甲方信息：{{contractInfo.parties[0].name_zh}}，登记信息包括：租赁公司机构、地址、电话；行为包括：展示出租汽车信息、出租汽车。</p>
        </div>

        <p>@@请完善下列信息：</p>
        <el-form ref="form" :model="form" label-width="20%">
          <el-form-item>
            <el-form-item v-bind:label="contractInfo.parties[0].name_zh">
              <el-input style="width: 60%" v-model="contractInfo.parties[0].name_en" suffix-icon="el-icon-edit"></el-input>
            </el-form-item>
          </el-form-item>
          <el-form-item v-for="property in contractInfo.parties[0].properties" v-bind:key="property.key">
            <el-form-item v-bind:label="property.key">
              <el-input style="width: 60%" v-model="property.value" suffix-icon="el-icon-edit"></el-input>
            </el-form-item>
          </el-form-item>
        </el-form>

        <p>@@预览效果如下：</p>
        <pre><code>
        party {{contractInfo.parties[0].name_en}}{
          <tr v-for="property in contractInfo.parties[0].properties" v-bind:key="property.key">
           <td>{{property.key}} : {{property.value}}</td>
          </tr>
        }
         </code></pre>
      </el-card>

      <br>

      <el-card class="box-card" shadow="always">
        <div v-if="contractInfo.id == 1">
          <p>@@乙方信息：{{contractInfo.parties[1].name_zh}}，登记信息包括：个人账户信息、账户余额；行为包括：出价、进行竞拍、撤回无效出价。</p>
        </div>
        <div v-else-if="contractInfo.id == 2">
          <p>@@乙方信息：{{contractInfo.parties[1].name_zh}}，登记信息包括：代理方账户信息、代理方公司资质；行为包括：发布服务、销售服务。</p>
        </div>
        <div v-else-if="contractInfo.id == 3">
          <p>@@乙方信息：{{contractInfo.parties[1].name_zh}}，登记信息包括：代理方账户信息、代理方公司资质；行为包括：响应报修，出具书面报告。</p>
        </div>
        <div v-else-if="contractInfo.id == 4">
          <p>@@乙方信息：{{contractInfo.parties[1].name_zh}}，登记信息包括：个人账户信息、账户余额；行为包括：租车。</p>
        </div>

        <p>@@请完善下列信息：</p>
        <el-form ref="form" :model="form" label-width="20%">
          <el-form-item>
            <el-form-item v-bind:label="contractInfo.parties[1].name_zh">
              <el-input style="width: 60%" v-model="contractInfo.parties[1].name_en" suffix-icon="el-icon-edit"></el-input>
            </el-form-item>
          </el-form-item>
          <el-form-item v-for="property in contractInfo.parties[1].properties" v-bind:key="property.key">
            <el-form-item v-bind:label="property.key">
              <el-input style="width: 60%" v-model="property.value" suffix-icon="el-icon-edit"></el-input>
            </el-form-item>
          </el-form-item>
        </el-form>

        <p>@@预览效果如下：</p>
        <pre><code>
        party {{contractInfo.parties[1].name_en}}{
          <tr v-for="property in contractInfo.parties[1].properties" v-bind:key="property.key">
          <td>{{property.key}} : {{property.value}}</td>
          </tr>
        }
      </code></pre>
      </el-card>
      <br>
    </div>
</template>

<script>
    // import axios from 'axios'
    // import {contractInfo} from '../../request/api'

    export default {
      name: "contract_party",
      props: {
        contractInfo: null
      },
      data () {
        return {
          form: {

          }
        }
      },
      mounted () {
        // axios.get('../static/testTemplate1.json')
        //   .then((response) => {
        //     this.contractInfo = response.data.contractInfo
        //   })
        //this.getContractInfo()
      },
      methods: {
        // getContractInfo () {
        //   contractInfo
        //     .then(res => {
        //       this.contractInfo = res.contractInfo
        //     })
        // }
      }
    }
</script>

<style scoped>
  .contractParty >>> .el-card__body {
    padding: 30px;
  }
</style>
