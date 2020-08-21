<template>
  <div>
    received:{{ msg }}
  </div>
</template>

<script>
import { contractDetails, contractDetails1 } from '../../request/api'

export default {
  name: 'demo',
  data () {
    return {
      msg: '',
      contractInfo: []
    }
  },
  created () {
    this.getParams()
    this.getDetails()
  },
  methods: {
    getParams () {
      this.msg = this.$route.params.detailsId
      console.log(this.$route.params.detailsId)
    },
    getDetails () {
      contractDetails(this.detailsId)
        .then(res => {
          this.contractInfo = res.contractInfo
        })
    },
    getDetails1 () {
      contractDetails1(this.detailsId)
        .then(res => {
          this.contractInfo = res.contractInfo
        })
    }
  },
  watch: {
    '$route': 'getParams'
  }
}
</script>

<style scoped>

</style>
