<template>
  <div>
    Board
    <!--    데이토 로딩이 완료 됐을 떄 출력-->
    <div v-if="loading">loading board...</div>
    <div v-else>
      <div>bid: {{bid}}</div>
      <hr/>
      <!--    Board component에 Card component를 어디에 출력할지 정해야함 => 중첩 라우팅-->
      <router-link :to="`/b/${bid}/c/1`">Card1</router-link>
      <router-link :to="`/b/${bid}/c/2`">Card2</router-link>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Board",
        data() {
            return {
                bid: 0,
                loading: false
            }
        },
        created() {
            this.fetchData()
        },
        methods: {
            //백엔드 api를 호출하고 데이터를 요청하는 함수 -> 데이터를 받아서 데이터 객체에 추가함
            fetchData() {
                this.loading = true
                setTimeout(() => {
                    this.bid = this.$route.params.bid  //이 명령어 실핼하소 0.5초 지연
                    this.loading = false
                }, 500)
            }
        }
    }
</script>

<style scoped>

</style>

