<template>
  <div>
        <h2 style="font-weight: bold;" >{{spesc}}</h2>
    <p>{{name}}</p>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  props: {
    number: String
  },
  data: function () {
    return {
      name: 'helloSpesc',
      spesc: null
    }
  },
  mounted () {
    if (this.$route.params.number === '1') {
      axios.get('../static/testTemplate.json')
        .then((response) => {
          this.spesc = response.data.spesc
        })
    } else {
      axios.get('../static/test.json')
        .then((response) => {
          this.spesc = response.data.contractData
        })
    }
  }
}
</script>

<style scoped>

</style>
