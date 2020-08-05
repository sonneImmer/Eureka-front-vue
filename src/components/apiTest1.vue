<template>
  <div class="request">
    {{ message }}
    <input v-model="chainName" placeholder="chainName">
    <input v-model="method" placeholder="method">
    <input v-model="toAddress" placeholder="toAddress">
    <input v-model="number" placeholder="number">
  </div>
</template>

<script>
export default {
  name: 'apiTest1',
  data () {
    return {
      chainName: 'shellchain',
      message: 'NoMessage',
      method: 'addT',
      toAddress: '1CdaYPxEkQ495bMtKySTq5dbKoUHdBtya8JLbH',
      number: '10'
    }
  }
}
</script>

<style scoped>

</style>
