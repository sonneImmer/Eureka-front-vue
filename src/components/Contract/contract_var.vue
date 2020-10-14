<template>
  <div class="contractVar" v-if="contractInfo != null">
    <h3 style="font-weight: bold;">关键信息</h3>
    <hr>

    <div v-for="contract_var in contractInfo.vars">
      <el-card class="box-card" shadow="always">
        <p>{{contract_var.description}}</p>
        <p>@@请完善下列信息：</p>
        <el-form ref="form" :model="form" label-width="20%">
          <el-form-item v-for="specific_var in contract_var.var" v-bind:key="specific_var.key">
            <el-form-item v-bind:label="specific_var.key">
              <el-input style="width: 60%" v-model="specific_var.value" suffix-icon="el-icon-edit"></el-input>
            </el-form-item>
          </el-form-item>
        </el-form>

        <p>@@预览效果如下：</p>
        <div v-if="contract_var.party_name != null">
        <pre><code>
    party {{contract_var.party_name}}{
      <tr v-for="specific_var in contract_var.var" v-bind:key="specific_var.key">
      <td>{{specific_var.key}} : {{specific_var.value}}</td>
      </tr>
    }
        </code></pre>
        </div>
        <div v-else>
          <pre><code>
      <tr v-for="specific_var in contract_var.var" v-bind:key="specific_var.key">
      <td>{{specific_var.key}} : {{specific_var.value}}</td>
      </tr>
          </code></pre>
        </div>

      </el-card>
      <br>
    </div>
    <br>
  </div>
</template>

<script>
    // import axios from 'axios'
    // import {contractInfo} from '../../request/api'

    export default {
      name: "contract_var",
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
  .contractVar >>> .el-card__body {
    padding: 30px;
  }
</style>
