<template>
  <div>
    Card
    <div v-if="loading">card loading...</div>
    <div v-else>
      <div>cid: {{cid}}</div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Card",
        data() {
            return {
                cid: 0,
                loading: false
            }
        },
        watch: {
            '$route': {
                //fetchData를 실행시켜라
                handler: 'fetchData',
                immediate: true //즉시 실행해라 (created의 역할도 해줌)
            }
        },
        methods: {
            fetchData() {
                this.loading = true
                setTimeout(() =>{
                    this.cid = this.$route.params.cid
                    this.loading = false
                }, 500)
            }
        }
    }
</script>

<style scoped>

</style>
