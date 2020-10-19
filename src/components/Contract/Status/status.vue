<template>
  <div>
    {{status}}
  </div>
</template>

<script>
    export default {
      name: "status",
      data () {
        return {
          status : null
        }
      },
      created() {
        this.getStatus()
      },
      methods: {
        getStatus () {
          // 取到路由带过来的参数
          const routerQueryId = this.$route.query.status
          this.status = routerQueryId
        }
      }
    }
</script>

<style scoped>

</style>
