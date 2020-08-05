<template>
  <div>
    <input v-model="username">
    <input v-model="password">
    <button v-on:click="submit"></button>
  </div>
</template>

<script>
import { doLogin } from '../api/login'

export default {
  name: 'login',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    submit () {
      doLogin(this.username, this.password).then(res => {
        console.log(res)
        if (res.data.resultCode === 200) {
          const token = 'token'
          Message.success('登录成功')
          // 存储token到浏览器
          localStorage.setItem('eleToken', token)
          this.$router.push('/')
        } else {
          Message.error(res.data.resultMsg)
          console.log('错误')
        }
      })
    }
  }

}
</script>

<style scoped>

</style>
