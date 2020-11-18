<template>
    <el-row>
      <el-col :span="4">
        <div class="grid-content bg-purple">
          <div class="sub-title">Application</div>
          <el-input style="font-size: 25px"></el-input>
        </div>
      </el-col>
      <el-col :span="4" :offset="1">
        <div class="grid-content bg-purple">
          <div class="sub-title">AMIs</div>
          <el-input style="font-size: 25px" :readonly="true"></el-input>
        </div>
      </el-col>
      <el-col :span="6" :offset="1">
        <div class="grid-content bg-purple">
          <div class="sub-title">Avaliablity Zones</div>
          <el-input style="font-size: 15px" :readonly="true"></el-input>
        </div>
      </el-col>
      <el-col :span="6" :offset="1">
        <div class="grid-content bg-purple">
          <div class="sub-title">Status</div>
          <el-input style="font-size: 15px" :readonly="true"></el-input>
        </div>
      </el-col>
    </el-row>
</template>

<script>
  import {discoverData} from "../../request/api";

  export default {
    name: 'serviceStatus',
    data () {
      return {
        registerdata:"",
      }
    },
    mounted () {
      this.getRegisterdata()
    },
    methods: {
      getRegisterdata () {
        discoverData.then(res => {
          this.registerdata=res
        })
      },
    }
  }
</script>

<style scoped>

</style>
