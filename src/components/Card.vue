<template>
  <div>
    Card
    <div>cid: {{cid}}</div>
  </div>
</template>

<script>
    export default {
        name: "Card",
        data() {
            return{
                cid: 0
            }
        },
        created() {
            this.cid = this.$route.params.cid
        },
        watch: {
            '$route'() {
                this.cid = this.$route.params.cid //route객체를 감시
            }
        }
    }
</script>

<style scoped>

</style>
