<template>
  <div>Home
    <div>
      Board List
      <div v-if="loading">로딩중</div>
      <div v-else>Api result: {{apiRes}}</div>
      <ul>
        <li>
          <router-link to="/b/1">Board1</router-link>
        </li>
        <li>
          <router-link to="/b/2">Board2</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Home",
        data() {
            return {
                loading: false,
                apiRes: ''
            }
        },
        created() {
            this.fetchData()
        },
        methods: {
            fetchData() {
                this.loading = true

                const req = new XMLHttpRequest() //요청객체 생성

                req.open('GET', 'http://localhost:3000/health')
                req.send()

                req.addEventListener('load', () => {
                    this.loading = false
                    this.apiRes = {
                        status: req.status,
                        statusText: req.statusText,
                        response: JSON.parse(req.response) //순수 문자열로 오기 때문에 json으로 파싱 해줘야 함
                    }
                })


            }
        }
    }
</script>

<style scoped>

</style>
