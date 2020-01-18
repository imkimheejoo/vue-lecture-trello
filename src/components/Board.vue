<template>
  <div>
    Board
    <div>bid: {{bid}}</div>
    <hr />
<!--    Board component에 Card component를 어디에 출력할지 정해야함 => 중첩 라우팅-->
    <router-link :to="`/b/${bid}/c/1`">Card1</router-link>
    <router-link :to="`/b/${bid}/c/2`">Card2</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
    export default {
        name: "Board",
        data() {
            return {
                bid:0
            }
        },
        created() {
            this.bid = this.$route.params.bid
        }
    }
</script>

<style scoped>

</style>

